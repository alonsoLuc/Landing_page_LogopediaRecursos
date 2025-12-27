document.addEventListener("DOMContentLoaded", () => {

/* ===============================
   ESTADO
================================ */
let bpm = 100;
let isRunning = false;
let timer = null;
let direccionDerecha = true;

/* ===============================
   SONIDOS
================================ */
const sounds = {
  beep: new Audio("/tools/sounds/beep_313342.mp3"),
  wood: new Audio("/tools/sounds/metronome_2.mp3"),
  click: new Audio("/tools/sounds/metronome_3.mp3"),
  beat: new Audio("/tools/sounds/metronome_4.mp3")
};


let sonidoActual = sounds.beep;

/* ===============================
   ELEMENTOS
================================ */
const bpmSlider = document.getElementById("bpmSlider");
const bpmValue = document.getElementById("bpmValue");
const soundSelector = document.getElementById("soundSelector");
const startStopBtn = document.getElementById("startStopBtn");
const beatBall = document.getElementById("beatBall");
const beatTrack = document.getElementById("beatTrack");

if (!bpmSlider) {
  console.error("❌ Elementos del metrónomo no encontrados");
  return;
}

/* ===============================
   BPM
================================ */
bpmSlider.addEventListener("input", () => {
  bpm = parseInt(bpmSlider.value);
  bpmValue.textContent = bpm;

  if (isRunning) {
    stopMetronome();
    startMetronome();
  }
});

/* ===============================
   SONIDO
================================ */
soundSelector.addEventListener("change", () => {
  sonidoActual = sounds[soundSelector.value];
});

/* ===============================
   BOTÓN
================================ */
startStopBtn.addEventListener("click", () => {

  // desbloqueo audio (obligatorio en web)
  sonidoActual.play().then(() => {
    sonidoActual.pause();
    sonidoActual.currentTime = 0;
  }).catch(() => {});

  isRunning = !isRunning;
  startStopBtn.textContent = isRunning ? "Detener" : "Iniciar";
  isRunning ? startMetronome() : stopMetronome();
});

/* ===============================
   METRÓNOMO
================================ */
function startMetronome() {
  const interval = 60000 / bpm;
  tick();
  timer = setInterval(tick, interval);
}

function stopMetronome() {
  clearInterval(timer);
  timer = null;
}

/* ===============================
   TICK
================================ */
function tick() {
  playSound();
  animateBall();
}

/* ===============================
   SONIDO
================================ */
function playSound() {
  sonidoActual.currentTime = 0;
  sonidoActual.play().catch(() => {});
}

/* ===============================
   ANIMACIÓN
================================ */
function animateBall() {
  const trackWidth = beatTrack.clientWidth;
  const ballWidth = beatBall.clientWidth;
  const maxX = trackWidth - ballWidth;

  const destino = direccionDerecha ? maxX : 0;
  direccionDerecha = !direccionDerecha;

  beatBall.style.transition = `transform ${60000 / bpm}ms linear`;
  beatBall.style.transform = `translateX(${destino}px)`;
}

});
