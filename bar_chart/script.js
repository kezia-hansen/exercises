const list = document.querySelector("ul");
const valueArr = [];

setInterval(generatesoejle, 1000);

function generatesoejle() {
  console.log(valueArr);
  valueArr.push(getRandomNum());

  const randomNum = getRandomNum();
  const li = document.createElement("li");
  li.style.setProperty("--height", randomNum);
  list.appendChild(li);

  if (valueArr.length > 20) {
    valueArr.shift();
    list.removeChild(list.firstChild);
  }
}

function getRandomNum() {
  return Math.round(Math.random() * 100);
}
