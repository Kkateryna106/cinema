const filmStrip = document.querySelector('.film-strip');

// Якщо потрібно додати більше кадрів динамічно
const images = ['image5.jpg', 'image6.jpg', 'image7.jpg'];
images.forEach((src) => {
  const frame = document.createElement('div');
  frame.className = 'frame';
  const img = document.createElement('img');
  img.src = src;
  img.alt = 'Film Frame';
  frame.appendChild(img);
  filmStrip.appendChild(frame);
});