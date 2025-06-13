function showRandomFunFact() {
  const facts = [
    "Our founder once ate 12 waffles in one sitting. (Do not try this at home.)",
    "Waffles were once considered a luxury food in medieval Europe.",
    "The word 'waffle' comes from the Dutch word 'wafel'.",
    "Strawberry waffles are our most Instagrammed item!",
    "We test every new waffle by dropping it from 2 feet to check crispiness. (Kidding!)"
  ];

  const randomIndex = Math.floor(Math.random() * facts.length);
  const factElement = document.getElementById("funFact");
  
  factElement.textContent = facts[randomIndex];
  factElement.style.display = "block";
}

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

