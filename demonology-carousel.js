document.addEventListener('DOMContentLoaded', () => {
  const panel = document.getElementById('assets-demonology');
  if (!panel) return;

  const names = [
    'Bed', 'Big Blacklight', 'Bucket', 'Defibrulator', 'Ducky', 'EMF Reader',
    'Foods', 'Foods and Drinks', 'Furniture', 'Futuristic Defib', 'Lamp', 'Lantern',
    'Ocean Camera', 'Plates', 'Revolver', 'Santa EMF', 'Shotgun', 'Snorkel',
    'Spirit Box 1', 'Spirit Box 3', 'Stainless Steel', 'Water Gun', 'Wheelchair'
  ];

  panel.innerHTML = `
    <div class="ugc-slider-wrap demonology-carousel-wrap">
      <button class="slider-btn slider-btn-prev" aria-label="Previous Demonology assets">&#8249;</button>
      <div class="ugc-grid demonology-carousel-grid"></div>
      <button class="slider-btn slider-btn-next" aria-label="Next Demonology assets">&#8250;</button>
    </div>
  `;

  const grid = panel.querySelector('.demonology-carousel-grid');
  names.forEach((name, index) => {
    const col = index % 6;
    const row = Math.floor(index / 6);
    const card = document.createElement('div');
    card.className = 'ugc-card demonology-image-card';
    card.setAttribute('aria-label', name);
    card.innerHTML = `<div class="demonology-sprite-frame" style="--sprite-col:${col};--sprite-row:${row}"></div>`;
    grid.appendChild(card);
  });

  const prev = panel.querySelector('.slider-btn-prev');
  const next = panel.querySelector('.slider-btn-next');
  prev.addEventListener('click', () => grid.scrollBy({ left: -grid.clientWidth, behavior: 'smooth' }));
  next.addEventListener('click', () => grid.scrollBy({ left: grid.clientWidth, behavior: 'smooth' }));
});
