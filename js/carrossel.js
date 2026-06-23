// =====================
// CARROSSEL DE NOTÍCIAS
// =====================

const slides = document.getElementById('slides');
const dotsBox = document.getElementById('dots');

if (slides && dotsBox) {
  const total = slides.children.length;
  let idx = 0;
  let timer;

  // Cria os dots
  for (let i = 0; i < total; i++) {
    const dot = document.createElement('button');
    dot.onclick = () => go(i);
    dotsBox.appendChild(dot);
  }

  function render() {
    slides.style.transform = `translateX(-${idx * 100}%)`;
    [...dotsBox.children].forEach((dot, i) => {
      dot.className = i === idx ? 'active' : '';
    });
  }

  function resetTimer() {
    clearInterval(timer);
    timer = setInterval(() => move(1), 5000);
  }

  function go(n) { idx = n; render(); resetTimer(); }
  function move(d) { idx = (idx + d + total) % total; render(); resetTimer(); }

  // Pausa ao passar o mouse
  const heroContainer = slides.closest('.hero');
  if (heroContainer) {
    heroContainer.addEventListener('mouseenter', () => clearInterval(timer));
    heroContainer.addEventListener('mouseleave', resetTimer);
  }

  render();
  resetTimer();
}


// =====================
// CARROSSEL ADS 1
// =====================

const times = [
  { name: "Marcela Amaral", img: "imgs/apoiadores/a1.png", url: "apoiadores.html#apoiador1" },
  { name: "IFSP", img: "imgs/apoiadores/a2.png", url: "apoiadores.html#apoiador2" },
];

const adots1 = document.getElementById('adots-1');
const sp1    = document.getElementById('sponsor-1');
const adImg1 = document.getElementById('ad-img-1');
const adLnk1 = document.getElementById('ad-link-1');
let sTimer1;

if (adots1 && sp1 && adImg1 && adLnk1) {
  let sIdx1 = 0;

  for (let i = 0; i < times.length; i++) {
    const dot = document.createElement('button');
    dot.onclick = () => { sIdx1 = i; sRender1(); };
    adots1.appendChild(dot);
  }

  function sRender1() {
    const s = times[sIdx1];
    adImg1.src = s.img; adImg1.alt = s.name;
    sp1.textContent = s.name; adLnk1.href = s.url;
    [...adots1.children].forEach((d, i) => d.className = i === sIdx1 ? 'active' : '');
  }

  sTimer1 = setInterval(() => { sIdx1 = (sIdx1 + 1) % times.length; sRender1(); }, 4000);
  
  adLnk1.addEventListener('mouseenter', () => clearInterval(sTimer1));
  adLnk1.addEventListener('mouseleave', () => {
    sTimer1 = setInterval(() => { sIdx1 = (sIdx1 + 1) % times.length; sRender1(); }, 4000);
  });
  
  sRender1();
}


// =====================
// CARROSSEL ADS 2 
// =====================

const sponsors = [
  { name: "Mastercard", img: "imgs/apoiadores/a6.png", url: "apoiadores.html" },
  { name: "CBF",      img: "imgs/apoiadores/a8.png",  url: "apoiadores.html" },
  { name: "Nasa",     img: "imgs/apoiadores/a9.png",    url: "apoiadores.html" },
];

const adots2 = document.getElementById('adots-2');
const sp2    = document.getElementById('sponsor-2');
const adImg2 = document.getElementById('ad-img-2');
const adLnk2 = document.getElementById('ad-link-2');
let sTimer2;


if (adots2 && sp2 && adImg2 && adLnk2) {
  let sIdx2 = 0;

  for (let i = 0; i < sponsors.length; i++) {
    const dot = document.createElement('button');
    dot.onclick = () => { sIdx2 = i; sRender2(); };
    adots2.appendChild(dot);
  }

  function sRender2() {
    const s = sponsors[sIdx2];
    adImg2.src = s.img; adImg2.alt = s.name;
    sp2.textContent = s.name; adLnk2.href = s.url;
    [...adots2.children].forEach((d, i) => d.className = i === sIdx2 ? 'active' : '');
  }

  sTimer2 = setInterval(() => { sIdx2 = (sIdx2 + 1) % sponsors.length; sRender2(); }, 4000);
  
  adLnk2.addEventListener('mouseenter', () => clearInterval(sTimer2));
  adLnk2.addEventListener('mouseleave', () => {
    sTimer2 = setInterval(() => { sIdx2 = (sIdx2 + 1) % sponsors.length; sRender2(); }, 4000);
  });
  
  sRender2();
}