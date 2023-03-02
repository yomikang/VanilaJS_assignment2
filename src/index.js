const colors = [
  "#ef5777",
  "#575fcf",
  "#4bcffa",
  "#34e7e4",
  "#0be881",
  "#f53b57",
  "#3c40c6",
  "#0fbcf9",
  "#00d8d6",
  "#05c46b",
  "#ffc048",
  "#ffdd59",
  "#ff5e57",
  "#d2dae2",
  "#485460",
  "#ffa801",
  "#ffd32a",
  "#ff3f34"
];

const btn = document.querySelector("button");

function getMultipleRandom(arr, num) {
  const shuffled = [...arr].sort(() => 0.5 - Math.random());
  return shuffled.slice(0, num);
}

const col1 = getMultipleRandom(colors, 2)[0];
const col2 = getMultipleRandom(colors, 2)[1];

function setGradient() {
  document.body.style.background =
    "linear-gradient(to right," + col1 + "," + col2 + ")";
  CSS.textContent = document.body.style.background;
}

btn.addEventListener("click", setGradient);
