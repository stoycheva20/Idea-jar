const paper = document.getElementById('paper');
const jar = document.getElementById('jar');
const sound = document.getElementById('sparkleSound');

const ideas = [
  "Kitty Bubbly Cafe",
  "Express pedi @Replenish Spa",
  "Firefly Bungee",
  "Yoga @Wellness Group",
  "North Market",
  "Budd Dairy Co",
  "panini opa"
];

function spawnSparkle(offsetX) {
  const sparkle = document.createElement('div');
  sparkle.className = 'sparkle';
  sparkle.style.top = `${paper.offsetTop + 10}px`;
  sparkle.style.left = `${paper.offsetLeft + paper.offsetWidth / 2 + offsetX}px`;
  document.body.appendChild(sparkle);
  setTimeout(() => sparkle.remove(), 1000);
}

jar.addEventListener('click', () => {
  const idea = ideas[Math.floor(Math.random() * ideas.length)];
  paper.textContent = idea;
  sound.currentTime = 0;
  sound.play();
  spawnSparkle(-40);
  spawnSparkle(40);
});
