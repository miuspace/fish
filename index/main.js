 
// change bg
function initBackgroundSwitcher() {
  const blocks = document.querySelectorAll('[data-bg-mchange]');
  const bgContainer = document.querySelector('[data-bg-mwrap]');

  const bgDiv1 = document.createElement('div');
  const bgDiv2 = document.createElement('div');
  bgDiv1.className = 'change-bg-img change-bg-img1';
  bgDiv2.className = 'change-bg-img change-bg-img2';
  bgContainer.insertBefore(bgDiv1, bgContainer.firstChild);
  bgContainer.insertBefore(bgDiv2, bgContainer.firstChild);

  let currentBg = null;
  let isFirstLoad = true;
  let showingDiv = bgDiv1;
  let hidingDiv = bgDiv2;

  function preloadImage(url) {
    return new Promise(resolve => {
      const img = new Image();
      img.src = url;
      img.onload = resolve;
    });
  }

  async function switchBackground(newUrl) {
    if (currentBg === newUrl && !isFirstLoad) return;
    await preloadImage(newUrl);

    if (isFirstLoad) {
      showingDiv.style.transition = "none";
      showingDiv.style.backgroundImage = `url(${newUrl})`;
      showingDiv.style.opacity = 1;
      currentBg = newUrl;
      isFirstLoad = false;
      setTimeout(() => {
        showingDiv.style.transition = "opacity 1.5s";
      }, 0);
      return;
    }

    hidingDiv.style.transition = "none";
    hidingDiv.style.backgroundImage = `url(${newUrl})`;
    hidingDiv.style.opacity = 0;

    setTimeout(() => {
      hidingDiv.style.transition = "opacity 2s";
      hidingDiv.style.opacity = 1;

      showingDiv.style.opacity = 0;

      const temp = showingDiv;
      showingDiv = hidingDiv;
      hidingDiv = temp;

      currentBg = newUrl;
    }, 10);
  }

  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const newBg = entry.target.dataset.bg;
        switchBackground(newBg);
      }
    });
  }, { threshold: 0.1 });

  blocks.forEach(block => observer.observe(block));
}

document.addEventListener('DOMContentLoaded', () => {
  initBackgroundSwitcher();
});


function initParallaxEffect() {
  const line1s = document.querySelectorAll('.deco-line-1');
  const line2s = document.querySelectorAll('.deco-line-2');

  let latestScrollY = 0;
  let ticking = false;

  function updateParallax() {
    const offset1 = latestScrollY * 0.08;//0.3
    const offset2 = latestScrollY * 0.2;//0.5

    line1s.forEach(el => {
      el.style.transform = `translateY(${offset1}px)`;
    });
    line2s.forEach(el => {
      el.style.transform = `translateY(${offset2}px)`;
    });

    ticking = false;
  }

  window.addEventListener('scroll', () => {
    latestScrollY = window.scrollY;

    if (!ticking) {
      window.requestAnimationFrame(updateParallax);
      ticking = true;
    }
  });
}

document.addEventListener('DOMContentLoaded', () => {
  initParallaxEffect();
});
