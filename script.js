document.getElementById("startBtn").addEventListener("click", () => {
  document.getElementById("startBtn").style.display = "none";
  document.getElementById("countdownContainer").classList.remove("hidden");
  document.getElementById("quizContainer").classList.remove("hidden");
  startCountdown("2025-10-04T10:00:00");
  const music = document.getElementById("bgMusic");
  music.play();
});

function startCountdown(dateString) {
  const endDate = new Date(dateString);
  const countdownEl = document.getElementById("countdown");

  setInterval(() => {
    const now = new Date();
    const diff = endDate - now;

    if (diff <= 0) {
      countdownEl.textContent = "É hoje!";
      return;
    }

    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
    const minutes = Math.floor((diff / (1000 * 60)) % 60);
    const seconds = Math.floor((diff / 1000) % 60);

    countdownEl.textContent = `${days}d ${hours}h ${minutes}m ${seconds}s`;
  }, 1000);
}

const quizBtns = document.querySelectorAll(".quizBtn");
const quizFeedback = document.getElementById("quizFeedback");
const invitationContainer = document.getElementById("invitationContainer");

quizBtns.forEach((btn) => {
  btn.addEventListener("click", () => {
    if (btn.textContent === "Justin Bieber") {
      quizFeedback.textContent = "Acertou!";
      invitationContainer.classList.remove("hidden");
    } else {
      quizFeedback.textContent = "Errado! Tente novamente";
      invitationContainer.classList.add("hidden");
    }
  });
});

const confirmBtn = document.querySelector("#invitationContainer button");

confirmBtn.addEventListener("click", () => {
  const phoneNumber = "5512982446776";
  const message = encodeURIComponent("Amigo, estarei lá!");
  const whatsappURL = `https://wa.me/${phoneNumber}?text=${message}`;
  window.open(whatsappURL, "_blank");

  const popup = document.createElement("div");
  popup.style.position = "fixed";
  popup.style.top = "0";
  popup.style.left = "0";
  popup.style.width = "100%";
  popup.style.height = "100%";
  popup.style.backgroundColor = "rgba(0,0,0,0.7)";
  popup.style.display = "flex";
  popup.style.alignItems = "center";
  popup.style.justifyContent = "center";
  popup.style.zIndex = "1000";

  const img = document.createElement("img");
  img.src = "./assets/confirmacao.png";
  img.style.maxWidth = "40%";
  img.style.borderRadius = "15px";

  popup.addEventListener("click", () => popup.remove());
  img.addEventListener("click", (e) => e.stopPropagation());

  popup.appendChild(img);
  document.body.appendChild(popup);
});
