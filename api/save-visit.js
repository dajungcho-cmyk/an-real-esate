const ALLOWED_ORIGINS = ['https://anrealestate.es', 'https://www.anrealestate.es']

export default async function handler(req, res) {
  const origin = req.headers.origin || ''
  const allowedOrigin = ALLOWED_ORIGINS.includes(origin) ? origin : ALLOWED_ORIGINS[0]
  res.setHeader('Access-Control-Allow-Origin', allowedOrigin)
  res.setHeader('Vary', 'Origin')
  res.setHeader('Access-Control-Allow-Methods', 'POST,OPTIONS')
  if (req.method === 'OPTIONS') return res.status(200).end()
  if (req.method !== 'POST') return res.status(405).end()

  const { GITHUB_TOKEN, GIST_ID } = process.env
  if (!GITHUB_TOKEN || !GIST_ID) return res.status(503).json({ error: 'Storage not configured' })

  const visit = req.body
  if (!visit || !visit.timestamp) return res.status(400).json({ error: 'Invalid visit data' })

  // Strip heavy binary fields before remote storage
  const { signature, dniPhoto, ...meta } = visit

  const headers = {
    Authorization: `token ${GITHUB_TOKEN}`,
    'User-Agent': 'anrealestate-visits',
    'Content-Type': 'application/json'
  }

  const gistRes = await fetch(`https://api.github.com/gists/${GIST_ID}`, { headers })
  if (!gistRes.ok) return res.status(502).json({ error: 'Could not read storage' })
  const gist = await gistRes.json()

  const current = JSON.parse(gist.files?.['visits.json']?.content || '[]')
  const isDup = current.some(v => v.timestamp === meta.timestamp && v.docNum === meta.docNum)

  if (!isDup) {
    current.unshift(meta)
    if (current.length > 1000) current.length = 1000

    const updateRes = await fetch(`https://api.github.com/gists/${GIST_ID}`, {
      method: 'PATCH',
      headers,
      body: JSON.stringify({ files: { 'visits.json': { content: JSON.stringify(current) } } })
    })
    if (!updateRes.ok) return res.status(502).json({ error: 'Could not write to storage' })
  }

  return res.json({ ok: true, saved: !isDup })
}
