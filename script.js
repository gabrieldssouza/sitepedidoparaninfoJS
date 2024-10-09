const simButton = document.getElementById('sim');
const naoButton = document.getElementById('nao');
const animacaoDiv = document.getElementById('animacao');
const musica = document.getElementById('musica');

function moverBotaoNao() {
  const x = Math.random() * (window.innerWidth - naoButton.offsetWidth);
  const y = Math.random() * (window.innerHeight - naoButton.offsetHeight);
  naoButton.style.left = `${x}px`;
  naoButton.style.top = `${y}px`;
}

function criarCoracao(x, y) {
  const coracao = document.createElement('div');
  coracao.className = 'coracao';
  coracao.style.left = `${x}px`;
  coracao.style.top = `${y}px`;
  document.body.appendChild(coracao);
  setTimeout(() => coracao.remove(), 2000);
}

simButton.addEventListener('click', () => {
  simButton.style.display = 'none';
  naoButton.style.display = 'none';
  animacaoDiv.style.display = 'block';
  musica.play(); 
});

document.addEventListener('mousemove', (e) => {
  const naoButtonRect = naoButton.getBoundingClientRect();
  const mouseX = e.clientX;
  const mouseY = e.clientY;

  const distance = Math.sqrt(
    Math.pow(mouseX - (naoButtonRect.left + naoButtonRect.width / 2), 2) +
    Math.pow(mouseY - (naoButtonRect.top + naoButtonRect.height / 2), 2)
  );

  if (distance < 100) {
    moverBotaoNao();
  }
});

naoButton.style.left = `${simButton.offsetLeft + simButton.offsetWidth + 10}px`;
naoButton.style.top = `${simButton.offsetTop}px`;

document.addEventListener('click', (e) => {
  criarCoracao(e.clientX, e.clientY);
});

document.addEventListener('touchstart', (e) => {
  const touch = e.touches[0];
  criarCoracao(touch.clientX, touch.clientY);
});