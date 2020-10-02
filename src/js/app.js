const colors = [
  '#93E916',
  '#FFFFFF',
  '#2196F3',
  '#4CAF50',
  '#FF9800',
  '#009688',
  '#795548',
  '#D60BF1 ',
  '#0BE8F1',
  '#F1430B',
];

const startBtnRef = document.querySelector('button[data-action="start"]');
const stopBtnRef = document.querySelector('button[data-action="stop"]');
const bodyRef = document.querySelector('body');

startBtnRef.addEventListener('click', changeColor);

function changeColor() {
  stopBtnRef.addEventListener('click', stopColor);
  const interval = setInterval(randomColor, 1000);
  startBtnRef.disabled = true;

  function randomColor() {
    const color = colors[randomIntegerFromInterval(0, colors.length - 1)];
    bodyRef.style.backgroundColor = `${color}`;
    console.log(color);
  }

  function stopColor() {
    clearInterval(interval);
    startBtnRef.disabled = false;
  }
}

const randomIntegerFromInterval = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};
