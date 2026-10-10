const button = document.getElementById('music-toggle');
const playerWrap = document.getElementById('youtube-player-wrap');
const playerFrame = document.getElementById('youtube-player');
const unlockForm = document.getElementById('unlock-form');
const passcodeInput = document.getElementById('passcode');
const lockMessage = document.getElementById('lock-message');

const embedUrl = 'https://www.youtube.com/embed/0fcsGS1dEro?autoplay=1&mute=0&loop=1&playlist=0fcsGS1dEro&controls=0&showinfo=0&rel=0&modestbranding=1';
const correctCode = '1904';

let isPlaying = false;

function playSong() {
  if (!playerFrame || !playerWrap) return;

  playerFrame.src = embedUrl;
  playerWrap.classList.remove('hidden');
  button.textContent = 'Pause our song';
  isPlaying = true;
}

function pauseSong() {
  if (!playerFrame || !playerWrap) return;

  playerFrame.src = '';
  playerWrap.classList.add('hidden');
  button.textContent = 'Play our song';
  isPlaying = false;
}

if (unlockForm && passcodeInput) {
  unlockForm.addEventListener('submit', (event) => {
    event.preventDefault();

    const enteredCode = passcodeInput.value.trim();

    if (enteredCode === correctCode) {
      document.body.classList.remove('locked');
      document.body.classList.add('unlocked');
      lockMessage.textContent = 'Unlocked. Happy anniversary, my love.';
      lockMessage.style.color = '#ffe0f0';
      passcodeInput.value = '';
    } else {
      lockMessage.textContent = 'Incorrect code. Try again.';
      lockMessage.style.color = '#ffb3b3';
      passcodeInput.value = '';
      passcodeInput.focus();
    }
  });
}

button.addEventListener('click', () => {
  if (isPlaying) {
    pauseSong();
  } else {
    playSong();
  }
});
