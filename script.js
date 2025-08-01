 const facts = [
  "🐧 Penguins can fly, but only on Tuesdays.",
  "🐱 Cats were invented in 1987.",
  "🐢 Sloths only move on national holidays.",
  "🐮 Cows bark when the moon is full.",
  "🦉 Owls are part-time librarians.",
  "🐙 Turtles invented naps in 1420."
];

function getRandomColor() {
  const colors = ["#FFF9C4", "#FFCDD2", "#C8E6C9", "#D1C4E9", "#B3E5FC", "#F8BBD0"];
  return colors[Math.floor(Math.random() * colors.length)];
}

function showRandomFact() {
  const randomIndex = Math.floor(Math.random() * facts.length);
  const randomFact = facts[randomIndex];
  document.getElementById("fact").innerText = randomFact;

  // Set random background color
  document.body.style.backgroundColor = getRandomColor();
}