;(function () {
  'use strict'

  // Matches property/agent photos; excludes logos and UI icons
  function isPhoto(el) {
    if (!el || el.tagName !== 'IMG') return false
    var src = el.getAttribute('src') || ''
    return (src.indexOf('cloudinary') !== -1 || src.indexOf('alvaro') !== -1) &&
           src.indexOf('logo') === -1
  }

  // Inject protection CSS once
  var css = document.createElement('style')
  css.textContent =
    'img.an-photo{-webkit-user-drag:none;-webkit-touch-callout:none;' +
    'user-select:none;pointer-events:none;}' +
    '.an-shield{position:absolute;inset:0;z-index:5;cursor:default;' +
    '-webkit-user-select:none;user-select:none;}'
  document.head.appendChild(css)

  function protect(img) {
    if (img._anProtected) return
    img._anProtected = true
    img.setAttribute('draggable', 'false')
    img.classList.add('an-photo')

    var parent = img.parentNode
    if (!parent) return

    // Ensure parent can contain an absolutely-positioned shield
    if (getComputedStyle(parent).position === 'static') {
      parent.style.position = 'relative'
    }

    // Transparent shield div sits on top of the image
    // — intercepts right-click and drag without blocking parent click handlers
    // (clicks bubble up through shield → parent, which keeps lightbox/gallery working)
    var shield = document.createElement('div')
    shield.className = 'an-shield'
    shield.addEventListener('contextmenu', function (e) { e.preventDefault() }, true)
    shield.addEventListener('dragstart',   function (e) { e.preventDefault() }, true)
    parent.appendChild(shield)
  }

  function protectAll() {
    document.querySelectorAll('img').forEach(function (img) {
      if (isPhoto(img)) protect(img)
    })
  }

  // Global safety net (catches anything missed by protectAll)
  document.addEventListener('contextmenu', function (e) {
    if (isPhoto(e.target)) e.preventDefault()
  }, true)

  document.addEventListener('dragstart', function (e) {
    if (isPhoto(e.target)) e.preventDefault()
  }, true)

  // Block "Save Page" shortcut — won't stop screenshotting but stops the most common action
  document.addEventListener('keydown', function (e) {
    if ((e.ctrlKey || e.metaKey) && e.key === 's') e.preventDefault()
  })

  // Run once DOM is ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', protectAll)
  } else {
    protectAll()
  }

  // Cover dynamically loaded images (lightbox src swap, lazy-loaded thumbnails)
  if (window.MutationObserver) {
    new MutationObserver(function (mutations) {
      mutations.forEach(function (m) {
        m.addedNodes.forEach(function (node) {
          if (node.nodeType !== 1) return
          if (node.tagName === 'IMG' && isPhoto(node)) { protect(node); return }
          node.querySelectorAll('img').forEach(function (img) {
            if (isPhoto(img)) protect(img)
          })
        })
      })
    }).observe(document.documentElement, { childList: true, subtree: true })
  }
})()
