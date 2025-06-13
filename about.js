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

function toggleWaffleGlow(event) {
  const waffle = event.target;

  if (waffle.classList.contains("glow")) {
    waffle.classList.remove("glow");
  } else {
    waffle.classList.add("glow");
  }
}

function playWaffleSound() {
  const sound = document.getElementById("waffleSound");
  sound.currentTime = 0;
  sound.play();
}