const list = document.querySelector("ul");
const valueArr = [];
/* const li = document.createElement("li");
li.style.setProperty("--height", "30");
list.appendChild(li);
 */
setInterval(generatesoejle, 1000);

function generatesoejle() {
  valueArr.push(Math.round(Math.random() * 100));
  console.log(valueArr);
  console.log("i", i);

  if (i === valueArr.length - 1) {
    pPointer.innerHTML += crumb.name;
  } else {
    pPointer.innerHTML += `<a href=${crumb.link}>${crumb.name}</a> / `;
  }

  console.log("generatesoejle");
}
