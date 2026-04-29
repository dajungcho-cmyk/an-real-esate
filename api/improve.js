export default async function handler(req, res) {
  res.setHeader('Access-Control-Allow-Origin', '*')
  res.setHeader('Access-Control-Allow-Methods', 'POST,OPTIONS')
  if (req.method === 'OPTIONS') return res.status(200).end()
  if (req.method !== 'POST') return res.status(405).end('Method Not Allowed')

  const { text, lang } = req.body || {}
  if (!text?.trim()) return res.status(400).json({ error: 'No text' })

  const apiKey = process.env.ANTHROPIC_API_KEY
  if (!apiKey) {
    return res.status(503).json({ error: 'ANTHROPIC_API_KEY not configured in Vercel environment variables' })
  }

  const LANG_NAMES = { es:'Spanish', en:'English', ca:'Catalan', fr:'French', de:'German', it:'Italian', ru:'Russian' }
  const langInstruction = lang && lang !== 'auto' && LANG_NAMES[lang]
    ? `Write in ${LANG_NAMES[lang]}.`
    : 'Keep the same language as the input text.'

  const r = await fetch('https://api.anthropic.com/v1/messages', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'x-api-key': apiKey,
      'anthropic-version': '2023-06-01',
    },
    body: JSON.stringify({
      model: 'claude-haiku-4-5-20251001',
      max_tokens: 600,
      messages: [{
        role: 'user',
        content: `You are a luxury real estate copywriter specialising in high-end properties in Barcelona. Rewrite the following description paragraph to be more compelling, sophisticated and elegant. Use refined vocabulary appropriate for premium real estate. ${langInstruction} Return ONLY the improved text, no quotes, no explanation:\n\n${text}`,
      }],
    }),
  })

  const data = await r.json()
  if (!r.ok) return res.status(500).json({ error: data.error?.message || 'API error' })

  const improved = data.content?.[0]?.text?.trim() || text
  return res.json({ improved })
}
