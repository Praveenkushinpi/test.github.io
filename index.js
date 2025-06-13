function changeDescription(type) {
  const descs = {
    normal: "Golden, crispy & perfect every time!",
    strawberry: "Fresh strawberries & whipped cream 🍓",
    chocolate: "Double chocolate dreams 🍫"
  };
  document.querySelector(`#${type} .desc`).textContent = descs[type];
}

function livePreview() {
  const input = document.getElementById("waffleName").value;
  document.getElementById("liveText").textContent = `Your waffle idea: ${input || "🍓🍫🧇"}`;
}

function changeTheme(theme) {
  document.body.className = theme;
}

function playWaffleSound() {
  const sound = document.getElementById("waffleSound");
  sound.currentTime = 0;
  sound.play();
}

function toggleWaffleGlow(event) {
  const waffle = event.target;

  if (waffle.classList.contains("glow")) {
    waffle.classList.remove("glow");
  } else {
    waffle.classList.add("glow");
  }
}

