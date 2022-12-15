let button = document.getElementById("myBtn");
let p1 = document.getElementById("p1");
let p2 = document.getElementById("p2");
function changeBackgroundColor() {
  p1.style.backgroundColor = `rgb(${Math.round(
    Math.random(1) * 255
  )},${Math.round(Math.random(1) * 255)},${Math.round(Math.random(1) * 255)})`;
  p2.style.backgroundColor = `rgb(${Math.round(
    Math.random(1) * 255
  )},${Math.round(Math.random(1) * 255)},${Math.round(Math.random(1) * 255)})`;
}
myBtn.addEventListener("click", changeBackgroundColor);
