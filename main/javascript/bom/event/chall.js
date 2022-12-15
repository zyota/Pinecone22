let myButton = document.querySelector("body");
function changeBackgroundColor() {
  myButton.style.backgroundColor = `rgb(${Math.round(
    Math.random(1) * 255
  )},${Math.round(Math.random(1) * 255)},${Math.round(Math.random(1) * 255)})`;
}
myButton.addEventListener("click", changeBackgroundColor);
