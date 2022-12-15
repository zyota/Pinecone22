document.getElementsByClassName("root")[0].innerHTML = "hello!";
document.getElementById("root").style.backgroundColor = "aqua";
document.querySelector(".root").style.width = "500px";
document.querySelector("#root").style.border = "1px solid black";
document.getElementsByTagName("div")[0].style.margin = "auto";
let i = 10;
let j;
let uruudah = true;
let myInterval = setInterval(function () {
  document.getElementById("root").style.height = `${i}px`;
  document.getElementById("root").style.width = `${i}px`;
  document.getElementById("root").style.backgroundColor = `rgb(${i},${j},255)`;
  i++;
  j = Math.round(Math.random(j) * 255);

  if (i == 600) {
    clearInterval(myInterval);
  }
}, 100);
