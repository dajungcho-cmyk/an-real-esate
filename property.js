/* ================================
   Build image list from gallery
   ================================ */
const heroEl = document.querySelector('.pg-hero')
const cellEls = document.querySelectorAll('.pg-cell')

const images = [
  {
    src: heroEl?.dataset.src || document.getElementById('pg-hero-img')?.src,
    alt: document.getElementById('pg-hero-img')?.alt || 'Property photo'
  },
  ...Array.from(cellEls).map(cell => ({
    src: cell.dataset.src,
    alt: cell.querySelector('img')?.alt || 'Property photo'
  }))
].filter(img => img.src)

/* ================================
   Lightbox
   ================================ */
const lbOverlay = document.getElementById('lb-overlay')
const lbImg     = document.getElementById('lb-img')
const lbCounter = document.getElementById('lb-counter')
let   current   = 0

function lbShow(index) {
  current = (index + images.length) % images.length
  const { src, alt } = images[current]
  lbImg.classList.add('is-loading')
  const tmp = new Image()
  tmp.onload = () => {
    lbImg.src = src
    lbImg.alt = alt
    lbImg.classList.remove('is-loading')
  }
  tmp.src = src
  lbCounter.textContent = `${current + 1} / ${images.length}`
}

function lbOpen(index) {
  lbShow(index)
  lbOverlay.classList.add('is-open')
  document.body.style.overflow = 'hidden'
}

function lbClose() {
  lbOverlay.classList.remove('is-open')
  document.body.style.overflow = ''
}

/* ================================
   Open triggers — hero + cells
   ================================ */
if (heroEl) {
  heroEl.addEventListener('click', () => lbOpen(0))
  heroEl.addEventListener('keydown', e => { if (e.key === 'Enter' || e.key === ' ') lbOpen(0) })
}

cellEls.forEach((cell, i) => {
  cell.addEventListener('click', () => lbOpen(i + 1))
})

/* ================================
   Controls
   ================================ */
document.getElementById('lb-close')?.addEventListener('click', lbClose)
document.getElementById('lb-prev')?.addEventListener('click', () => lbShow(current - 1))
document.getElementById('lb-next')?.addEventListener('click', () => lbShow(current + 1))

lbOverlay?.addEventListener('click', e => {
  if (e.target === lbOverlay) lbClose()
})

/* ================================
   Keyboard
   ================================ */
document.addEventListener('keydown', e => {
  if (!lbOverlay?.classList.contains('is-open')) return
  if (e.key === 'Escape')     lbClose()
  if (e.key === 'ArrowLeft')  lbShow(current - 1)
  if (e.key === 'ArrowRight') lbShow(current + 1)
})

/* ================================
   Touch swipe
   ================================ */
let touchStartX = 0
lbOverlay?.addEventListener('touchstart', e => {
  touchStartX = e.changedTouches[0].clientX
}, { passive: true })

lbOverlay?.addEventListener('touchend', e => {
  const dx = e.changedTouches[0].clientX - touchStartX
  if (Math.abs(dx) < 50) return
  dx < 0 ? lbShow(current + 1) : lbShow(current - 1)
})

/* ================================
   Enquiry form
   ================================ */
document.getElementById('prop-form')?.addEventListener('submit', async e => {
  e.preventDefault()
  const form = e.target
  const btn  = form.querySelector('button[type="submit"]')

  const name  = form.querySelector('[name="name"]').value.trim()
  const email = form.querySelector('[name="email"]').value.trim()
  const emailOk = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
  if (!name || !emailOk) {
    form.querySelector('[name="name"]').style.borderColor  = name    ? '' : 'var(--gold)'
    form.querySelector('[name="email"]').style.borderColor = emailOk ? '' : 'var(--gold)'
    return
  }

  const lang = (typeof getLang === 'function') ? getLang() : 'en'
  const t = k => window.I18N?.[lang]?.[k] || window.I18N?.en?.[k] || k
  btn.textContent   = t('form.requesting')
  btn.disabled      = true

  const property = form.querySelector('[name="property"]')?.value || ''

  try {
    const res = await fetch('https://formsubmit.co/ajax/alvaro@anrealestate.es', {
      method:  'POST',
      headers: { 'Content-Type': 'application/json', 'Accept': 'application/json' },
      body: JSON.stringify({
        name,
        email,
        phone:    form.querySelector('[name="phone"]').value.trim(),
        message:  form.querySelector('[name="message"]').value.trim(),
        property,
        _subject: 'Solicitud de visita web — ' + property,
        _captcha: 'false',
        _template: 'table',
      }),
    })
    if (!res.ok) throw new Error()
    btn.textContent        = t('form.requested')
    btn.style.background   = 'var(--gold)'
    btn.style.borderColor  = 'var(--gold)'
    btn.style.color        = 'var(--bg)'
    form.reset()
    if (typeof showToast === 'function') showToast(t('form.toast_enquiry'))
    setTimeout(() => {
      btn.textContent        = t('form.request_submit')
      btn.style.background   = ''
      btn.style.borderColor  = ''
      btn.style.color        = ''
      btn.disabled           = false
    }, 4000)
  } catch {
    btn.textContent = t('form.error')
    btn.disabled    = false
  }
})

/* ================================
   Similar properties
   ================================ */
;(() => {
  const section = document.getElementById('similar-section')
  const grid    = document.getElementById('similar-grid')
  if (!section || !grid) return

  const inline = document.getElementById('listings-data')
  if (!inline) return

  let all = []
  try { all = JSON.parse(inline.textContent).listings || [] } catch { return }

  const currentTitle = document.querySelector('[name="property"]')?.value || ''
  const others = all.filter(l => l.published && !currentTitle.includes(l.title)).slice(0, 3)

  if (!others.length) return

  const simLang = (typeof getLang === 'function') ? getLang() : 'en'
  const simT = k => window.I18N?.[simLang]?.[k] || window.I18N?.en?.[k] || k
  grid.innerHTML = others.map(l => {
    const tag = l.status === 'rent' ? simT('prop.for_rent') : simT('prop.for_sale')
    return `
      <a href="property.html?slug=${l.slug || ''}" class="prop-card" data-type="${l.status} ${l.type}">
        <div class="prop-img-wrap">
          <img src="${l.image}" alt="${l.title}" class="prop-img" loading="lazy" />
          <span class="prop-tag ${l.status}">${tag}</span>
        </div>
        <div class="prop-info">
          <div class="prop-meta">
            <span class="prop-loc">${l.neighbourhood}</span>
            <span class="prop-price">${l.price}</span>
          </div>
          <h3 class="prop-title">${l.title}</h3>
          <p class="prop-specs">${l.beds} bed &nbsp;·&nbsp; ${l.baths} bath &nbsp;·&nbsp; ${l.size} m²</p>
        </div>
      </a>`
  }).join('')

  section.style.display = ''
})()

/* ================================
   Mobile sticky CTA
   ================================ */
const stickyCta = document.getElementById('prop-sticky-cta')
const enquireEl = document.getElementById('enquire')

if (stickyCta && enquireEl) {
  new IntersectionObserver(
    ([e]) => { stickyCta.style.display = e.isIntersecting ? 'none' : '' },
    { threshold: 0.1 }
  ).observe(enquireEl)
}
