let crops = [
  { name: "Tomato", waterNeed: 2, pestRisk: 0.3, water: 0, pests: false, days: 0 },
  { name: "Millet", waterNeed: 1, pestRisk: 0.1, water: 0, pests: false, days: 0 }
];

let score = 100;

function renderFarm() {
  const farmDiv = document.getElementById("farm");
  farmDiv.innerHTML = "";
  crops.forEach((crop, i) => {
    farmDiv.innerHTML += `
      <div class="crop">
        <strong>${crop.name}</strong> - Watered: ${crop.water} | Days: ${crop.days} | Pests: ${crop.pests ? "Yes" : "No"}
        <button onclick="waterCrop(${i})">💧 Water</button>
        <button onclick="sprayPests(${i})">🐛 Spray</button>
      </div>
    `;
  });
}

function waterCrop(index) {
  crops[index].water++;
}

function sprayPests(index) {
  if (crops[index].pests) {
    crops[index].pests = false;
    score -= 5;
  }
}

function nextDay() {
  crops.forEach(crop => {
    crop.days++;
    crop.pests = Math.random() < crop.pestRisk;
    score += crop.water >= crop.waterNeed ? 5 : -10;
    crop.water = 0;
  });
  renderFarm();
  document.getElementById("score").innerText = `Sustainability Score: ${score}`;
}

renderFarm();
