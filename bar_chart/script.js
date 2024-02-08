const valueArr = [];

setInterval(generatesoejle, 1000);

function generatesoejle() {
  console.log(valueArr);
  valueArr.push(getRandomNum());

  document.querySelectorAll("li").forEach((li, i) => {
    li.style.setProperty("--height", valueArr[i]);
  });

  if (valueArr.length > 20) {
    valueArr.shift();
  }
}

function getRandomNum() {
  return Math.round(Math.random() * 100);
}
