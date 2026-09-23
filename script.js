document.getElementById('year').textContent = new Date().getFullYear();

document.querySelectorAll('.card').forEach((card) => {
  const title = card.querySelector('h3');
  if (!title || title.textContent.trim() !== 'Stazione Meteo con Logo') return;
  const body = card.querySelector('.card-body');
  if (!body || body.querySelector('.smart-meteo-link')) return;
  const link = document.createElement('a');
  link.href = 'smart-meteo.html';
  link.className = 'btn btn-primary smart-meteo-link';
  link.textContent = 'Scopri Smart Meteo Station';
  link.style.marginTop = '14px';
  link.style.display = 'inline-flex';
  body.appendChild(link);
});
