const SYSTEM_PROMPT = `You are a document verification assistant. Analyse the provided image of an identity document.

Rules:
- isIdDocument: true only if the image clearly shows a real identity document (DNI, NIE, passport, driver licence, residence permit)
- nameOnDoc: extract the full name exactly as printed. For DNI/NIE look for "APELLIDOS / NOMBRE" sections. Return null if unreadable.
- nameMatch: compare nameOnDoc with the submitted name. Ignore case, common accent variations and extra spaces. Return null if nameOnDoc is null.
- message: one short sentence in Spanish explaining the result.

Respond ONLY with valid JSON, no markdown:
{
  "isIdDocument": true,
  "docType": "DNI",
  "nameOnDoc": "GARCÍA LÓPEZ, ANTONIO",
  "nameMatch": true,
  "confidence": "high",
  "message": "Documento reconocido como DNI. El nombre coincide con el formulario."
}`

export default async function handler(req, res) {
  res.setHeader('Access-Control-Allow-Origin', '*')
  res.setHeader('Access-Control-Allow-Methods', 'POST,OPTIONS')
  if (req.method === 'OPTIONS') return res.status(200).end()
  if (req.method !== 'POST') return res.status(405).end('Method Not Allowed')

  const { imageBase64, name, docType } = req.body || {}
  if (!imageBase64) return res.status(400).json({ error: 'No image' })
  if (!name)        return res.status(400).json({ error: 'No name' })

  const apiKey = process.env.ANTHROPIC_API_KEY
  if (!apiKey) return res.status(503).json({ error: 'ANTHROPIC_API_KEY not configured' })

  // Extract media type and pure base64 from data URL
  const match = imageBase64.match(/^data:(image\/[a-z+]+);base64,(.+)$/)
  if (!match) return res.status(400).json({ error: 'Invalid image format' })
  const mediaType = match[1]
  const b64data   = match[2]

  const userMessage = `Please verify this identity document.\nSubmitted name: "${name}"\nDocument type declared: "${docType || 'unspecified'}"`

  const r = await fetch('https://api.anthropic.com/v1/messages', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'x-api-key': apiKey,
      'anthropic-version': '2023-06-01',
    },
    body: JSON.stringify({
      model: 'claude-haiku-4-5-20251001',
      max_tokens: 512,
      system: SYSTEM_PROMPT,
      messages: [{
        role: 'user',
        content: [
          { type: 'image', source: { type: 'base64', media_type: mediaType, data: b64data } },
          { type: 'text', text: userMessage }
        ]
      }]
    })
  })

  const data = await r.json()
  if (!r.ok) return res.status(500).json({ error: data.error?.message || 'API error' })

  const raw = data.content?.[0]?.text?.trim() || ''
  try {
    return res.json(JSON.parse(raw))
  } catch {
    return res.status(500).json({ error: 'Could not parse AI response', raw })
  }
}
