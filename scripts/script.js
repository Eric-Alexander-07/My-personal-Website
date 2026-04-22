// Simple toggle helpers for sport.html cards.
const athleticsPanel = document.getElementById('athletics');
const dancePanel = document.getElementById('dance');
const calisthenicsPanel = document.getElementById('calisthenics');
const challengePanel = document.getElementById('challenges');

function togglePanel(panel, hiddenClass) {
  if (!panel) return;
  panel.classList.toggle(hiddenClass);
}

window.athletics = () => togglePanel(athleticsPanel, 'hidden1');
window.dance = () => togglePanel(dancePanel, 'hidden2');
window.calisthenics = () => togglePanel(calisthenicsPanel, 'hidden3');
window.challenges = () => togglePanel(challengePanel, 'hidden4');

// ===== LIGHTBOX =====
// All state at module level so closures in event handlers always see current values.

const hoverSelector = '.about-gallery img, .media-strip img, .image-stack img, .collage-item img';

let _lb = null;       // lightbox DOM element
let _imgEl = null;
let _captionEl = null;
let _closeBtn = null;
let _prevBtn = null;
let _nextBtn = null;
let _counterEl = null;
let _thumbstrip = null;
let _thumbsEl = null;

let _gallery = [];
let _idx = 0;

const _ensureLightbox = () => {
  if (_lb) return;

  _lb = document.createElement('div');
  _lb.className = 'media-lightbox';
  _lb.setAttribute('role', 'dialog');
  _lb.setAttribute('aria-modal', 'true');
  _lb.setAttribute('aria-label', 'Bildansicht');
  _lb.innerHTML = `
    <div class="media-lightbox__layout">
      <div class="media-lightbox__topbar">
        <span class="media-lightbox__counter" aria-live="polite"></span>
        <button type="button" class="media-lightbox__close" aria-label="Schließen">&times;</button>
      </div>
      <div class="media-lightbox__stage">
        <button type="button" class="media-lightbox__prev" aria-label="Vorheriges Bild" hidden>&#8249;</button>
        <figure class="media-lightbox__frame">
          <img class="media-lightbox__image" alt="" />
          <figcaption class="media-lightbox__caption"></figcaption>
        </figure>
        <button type="button" class="media-lightbox__next" aria-label="Nächstes Bild" hidden>&#8250;</button>
      </div>
      <div class="media-lightbox__thumbstrip" hidden>
        <div class="media-lightbox__thumbs"></div>
      </div>
    </div>
  `;
  document.body.appendChild(_lb);

  _imgEl = _lb.querySelector('.media-lightbox__image');
  _captionEl = _lb.querySelector('.media-lightbox__caption');
  _closeBtn = _lb.querySelector('.media-lightbox__close');
  _prevBtn = _lb.querySelector('.media-lightbox__prev');
  _nextBtn = _lb.querySelector('.media-lightbox__next');
  _counterEl = _lb.querySelector('.media-lightbox__counter');
  _thumbstrip = _lb.querySelector('.media-lightbox__thumbstrip');
  _thumbsEl = _lb.querySelector('.media-lightbox__thumbs');

  // All events bound once — always reference module-level state
  _closeBtn.addEventListener('click', _closeLightbox);
  _prevBtn.addEventListener('click', () => _navigate(-1));
  _nextBtn.addEventListener('click', () => _navigate(1));

  _lb.addEventListener('click', (e) => {
    const inside = e.target.closest(
      '.media-lightbox__frame, .media-lightbox__prev, .media-lightbox__next, ' +
      '.media-lightbox__topbar, .media-lightbox__thumbstrip'
    );
    if (!inside) _closeLightbox();
  });

  document.addEventListener('keydown', (e) => {
    if (!_lb.classList.contains('is-open')) return;
    if (e.key === 'Escape')      { e.preventDefault(); _closeLightbox(); }
    if (e.key === 'ArrowLeft')   { e.preventDefault(); _navigate(-1); }
    if (e.key === 'ArrowRight')  { e.preventDefault(); _navigate(1); }
  });

  // Swipe gestures on mobile
  let _touchX = 0;
  _lb.addEventListener('touchstart', (e) => { _touchX = e.touches[0].clientX; }, { passive: true });
  _lb.addEventListener('touchend', (e) => {
    const diff = _touchX - e.changedTouches[0].clientX;
    if (Math.abs(diff) > 44) _navigate(diff > 0 ? 1 : -1);
  }, { passive: true });
};

const _render = () => {
  const item = _gallery[_idx];
  _imgEl.src = item.src;
  _imgEl.alt = item.alt || '';
  const caption = item.alt?.trim();
  _captionEl.textContent = caption || '';
  _captionEl.hidden = !caption;
  _counterEl.textContent = _gallery.length > 1 ? `${_idx + 1} / ${_gallery.length}` : '';
  if (_gallery.length > 1) _syncThumbs();
};

const _syncThumbs = () => {
  _thumbsEl.querySelectorAll('.media-lightbox__thumb').forEach((t, i) => {
    t.classList.toggle('is-active', i === _idx);
  });
  const active = _thumbsEl.querySelector('.is-active');
  if (active) active.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'center' });
};

const _navigate = (dir) => {
  if (_gallery.length < 2) return;
  _idx = (_idx + dir + _gallery.length) % _gallery.length;
  _render();
};

const _closeLightbox = () => {
  if (!_lb) return;
  _lb.classList.remove('is-open');
  _imgEl.removeAttribute('src');
  _imgEl.removeAttribute('alt');
  _captionEl.textContent = '';
  _captionEl.hidden = true;
  _counterEl.textContent = '';
  document.body.style.removeProperty('overflow');
  _gallery = [];
};

const _buildCollageGallery = () => {
  const seen = new Set();
  const items = [];
  document.querySelectorAll('.collage-item img').forEach((img) => {
    const src = img.currentSrc || img.src;
    if (src && !seen.has(src)) {
      seen.add(src);
      items.push({ src, alt: img.alt || '' });
    }
  });
  return items;
};

const _buildThumbs = (items) => {
  _thumbsEl.innerHTML = '';
  items.forEach((item, i) => {
    const t = document.createElement('img');
    t.className = 'media-lightbox__thumb';
    t.src = item.src;
    t.alt = '';
    t.loading = 'lazy';
    if (i === _idx) t.classList.add('is-active');
    t.addEventListener('click', () => { _idx = i; _render(); });
    _thumbsEl.appendChild(t);
  });
};

const _openLightbox = (source, galleryGroup) => {
  _ensureLightbox();
  const src = source.currentSrc || source.src;

  if (galleryGroup && galleryGroup.length > 1) {
    _gallery = galleryGroup;
    _idx = _gallery.findIndex((item) => item.src === src);
    if (_idx < 0) _idx = 0;
    _prevBtn.hidden = false;
    _nextBtn.hidden = false;
    _thumbstrip.hidden = false;
    _buildThumbs(_gallery);
  } else {
    _gallery = [{ src, alt: source.alt || '' }];
    _idx = 0;
    _prevBtn.hidden = true;
    _nextBtn.hidden = true;
    _thumbstrip.hidden = true;
    _thumbsEl.innerHTML = '';
  }

  _render();
  _lb.classList.add('is-open');
  document.body.style.setProperty('overflow', 'hidden');
  _closeBtn.focus();
};

const initLightbox = () => {
  const images = document.querySelectorAll(hoverSelector);
  images.forEach((img) => img.classList.add('media-hoverable', 'lightbox-trigger'));
  if (!images.length) return;

  _ensureLightbox();

  images.forEach((img) => {
    if (img.dataset.lightboxBound) return;
    const isInsideInteractive = Boolean(img.closest('a, button'));
    const isCollage = Boolean(img.closest('.collage-item'));
    if (!isInsideInteractive && !isCollage && !img.hasAttribute('tabindex')) {
      img.setAttribute('tabindex', '0');
    }
    const activate = (e) => {
      if (isInsideInteractive) return;
      e?.preventDefault();
      _openLightbox(img, isCollage ? _buildCollageGallery() : null);
    };
    img.addEventListener('click', (e) => { if (!e.defaultPrevented) activate(e); });
    img.addEventListener('keydown', (e) => {
      if (isInsideInteractive) return;
      if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); activate(); }
    });
    img.dataset.lightboxBound = 'true';
  });
};

const readyState = () => {
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initLightbox, { once: true });
  } else {
    initLightbox();
  }
};

window.initLightbox = initLightbox;
document.dispatchEvent(new Event('lightbox:ready'));

readyState();
