export default async function handler(req, res) {
  res.setHeader('Access-Control-Allow-Origin', '*')
  res.setHeader('Cache-Control', 'no-store')

  const { GITHUB_TOKEN, GIST_ID } = process.env
  if (!GITHUB_TOKEN || !GIST_ID) return res.json({ visits: [], configured: false })

  const gistRes = await fetch(`https://api.github.com/gists/${GIST_ID}`, {
    headers: {
      Authorization: `token ${GITHUB_TOKEN}`,
      'User-Agent': 'anrealestate-visits'
    }
  })
  if (!gistRes.ok) return res.json({ visits: [], configured: true, error: 'Could not read storage' })

  const gist = await gistRes.json()
  const visits = JSON.parse(gist.files?.['visits.json']?.content || '[]')
  return res.json({ visits, configured: true })
}
