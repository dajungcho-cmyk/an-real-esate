export default async function handler(req, res) {
  res.setHeader('Access-Control-Allow-Origin', '*')
  res.setHeader('Access-Control-Allow-Methods', 'POST,OPTIONS')
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type')
  if (req.method === 'OPTIONS') return res.status(200).end()
  if (req.method !== 'POST') return res.status(405).end()

  const { RESEND_API_KEY } = process.env
  if (!RESEND_API_KEY) return res.status(503).json({ error: 'Email service not configured' })

  const { clientEmail, clientName, propRef, propTitle, visitDate, clientPdfBase64, agentPdfBase64 } = req.body || {}

  const send = async (payload) => {
    const r = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: { Authorization: `Bearer ${RESEND_API_KEY}`, 'Content-Type': 'application/json' },
      body: JSON.stringify(payload)
    })
    const data = await r.json().catch(() => ({}))
    return { ok: r.ok, status: r.status, data }
  }

  const results = []
  const safeRef = (propRef || 'visita').replace(/[^A-Z0-9_-]/gi, '_')

  if (clientEmail && clientPdfBase64) {
    const r = await send({
      from: 'AN High End Real Estate <alvaro@anrealestate.es>',
      to: [clientEmail],
      subject: `Hoja de visita firmada — ${propRef || 'Propiedad'}`,
      html: `<p>Estimado/a ${clientName || 'visitante'},</p>
<p>Adjunto encontrará su hoja de visita firmada electrónicamente con AN High End Real Estate.</p>
<p>Conserve este documento como comprobante oficial de su visita${propTitle ? ' a ' + propTitle : ''}.</p>
<br>
<p style="color:#888;font-size:12px">D. Álvaro Navarro Mosca · Agente inmobiliario autónomo · AICAT 13069<br>
<a href="mailto:alvaro@anrealestate.es">alvaro@anrealestate.es</a> · anrealestate.es</p>`,
      attachments: [{ filename: `HojaVisita_${safeRef}.pdf`, content: clientPdfBase64 }]
    })
    results.push({ type: 'client', ok: r.ok, status: r.status })
  }

  if (agentPdfBase64) {
    const r = await send({
      from: 'AN High End Real Estate <alvaro@anrealestate.es>',
      to: ['alvaro@anrealestate.es'],
      reply_to: clientEmail || undefined,
      subject: `[Agente] Nueva visita — ${propRef || 'Propiedad'} — ${clientName || ''}`,
      html: `<p>Nueva hoja de visita firmada.</p>
<p><strong>Propiedad:</strong> ${propRef || '—'} · ${propTitle || ''}</p>
<p><strong>Visitante:</strong> ${clientName || '—'}</p>
<p><strong>Fecha:</strong> ${visitDate || '—'}</p>
<p>Adjunto encontrará el documento completo del agente con dirección y datos de verificación.</p>`,
      attachments: [{ filename: `HojaVisita_AGENTE_${safeRef}.pdf`, content: agentPdfBase64 }]
    })
    results.push({ type: 'agent', ok: r.ok, status: r.status })
  }

  return res.json({ ok: results.every(r => r.ok), results })
}
