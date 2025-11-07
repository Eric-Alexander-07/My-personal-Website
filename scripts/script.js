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

const hoverSelector = '.about-gallery img, .media-strip img, .image-stack img, .collage-item img';
const lightboxSelector = hoverSelector;

const buildLightbox = () => {
  const lightbox = document.createElement('div');
  lightbox.className = 'media-lightbox';
  lightbox.innerHTML = `
    <figure class="media-lightbox__frame" role="dialog" aria-modal="true" aria-label="Große Bildansicht">
      <button type="button" class="media-lightbox__close" aria-label="Schließen">&times;</button>
      <img class="media-lightbox__image" alt="" />
      <figcaption class="media-lightbox__caption"></figcaption>
    </figure>
  `;
  document.body.appendChild(lightbox);
  return lightbox;
};

const initLightbox = () => {
  const hoverImages = document.querySelectorAll(hoverSelector);
  hoverImages.forEach((img) => {
    img.classList.add('media-hoverable', 'lightbox-trigger');
  });

  const lightboxImages = document.querySelectorAll(lightboxSelector);
  if (!lightboxImages.length) return;

  const lightbox = buildLightbox();
  const imgEl = lightbox.querySelector('.media-lightbox__image');
  const captionEl = lightbox.querySelector('.media-lightbox__caption');
  const closeBtn = lightbox.querySelector('.media-lightbox__close');
  captionEl.hidden = true;

  const closeLightbox = () => {
    lightbox.classList.remove('is-open');
    imgEl.removeAttribute('src');
    imgEl.removeAttribute('alt');
    captionEl.textContent = '';
    captionEl.hidden = true;
    document.body.style.removeProperty('overflow');
  };

  const openLightbox = (source) => {
    const fullSrc = source.getAttribute('data-lightbox-src') || source.currentSrc || source.src;
    imgEl.src = fullSrc;
    imgEl.alt = source.alt || '';
    const caption = source.alt?.trim();
    if (caption) {
      captionEl.textContent = caption;
      captionEl.hidden = false;
    } else {
      captionEl.textContent = '';
      captionEl.hidden = true;
    }
    lightbox.classList.add('is-open');
    document.body.style.setProperty('overflow', 'hidden');
    closeBtn.focus();
  };

  closeBtn.addEventListener('click', closeLightbox);
  lightbox.addEventListener('click', (event) => {
    if (event.target === lightbox) {
      closeLightbox();
    }
  });
  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape' && lightbox.classList.contains('is-open')) {
      closeLightbox();
    }
  });

  lightboxImages.forEach((img) => {
    img.classList.add('lightbox-trigger');
    const isInsideInteractive = Boolean(img.closest('a, button'));
    const isDecorative = Boolean(img.closest('.collage-item'));
    if (!isInsideInteractive && !isDecorative && !img.hasAttribute('tabindex')) {
      img.setAttribute('tabindex', '0');
    }
    const activate = (event) => {
      if (isInsideInteractive) return;
      event?.preventDefault();
      openLightbox(img);
    };
    img.addEventListener('click', (event) => {
      if (event.defaultPrevented) return;
      activate(event);
    });
    img.addEventListener('keydown', (event) => {
      if (isInsideInteractive) return;
      if (event.key === 'Enter' || event.key === ' ') {
        event.preventDefault();
        activate();
      }
    });
  });
};

const readyState = () => {
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initLightbox, { once: true });
  } else {
    initLightbox();
  }
};

readyState();
