// document.getElementById("root").innerText = "Hello";
// document.getElementsByClassName("dummy")[0].innerHTML = "Hello World";
// document.getElementsByTagName("h1")[0].innerText = "H1";
// document.querySelector(".dummy").innerHTML = "query";
// document.getElementById("root").innerHTML = "<h1 class='darkmode'>dsafdsg</h1>";
// document.getElementsByClassName("div")[0].className = "darkmode";
// document.getElementsByTagName("img")[0].src = "https://picsum.photos/500/500";
// document.getElementsByTagName("img")[0].alt = "not";
// document.getElementsByTagName("img")[0].width = "500";
// document.getElementsByClassName("profileName")[0].style.backgroundColor =
//   "aqua";
// const newDiv = document.createElement("h1");
// const newContent = document.createTextNode("Welcome to my website!");
// newDiv.appendChild(newContent);
// const main = document.getElementsByTagName("main");
// main[0].appendChild(newDiv);
let rootElement = document.getElementById("root");
let test = 100;
let myInterval = setInterval(function () {
  test += 10;
  console.log(test);
}, 1000);
if (test == 300) {
  clearInterval(myInterval);
}

rootElement.style.display = "flex";
rootElement.style.flexWrap = "wrap";
rootElement.style.width = "850px";
for (let i = 0; i < 8; i++) {
  for (let j = 0; j < 8; j++) {
    let newDiv = document.createElement("div");
    rootElement.appendChild(newDiv);
    newDiv.style.width = `${test}px`;
    newDiv.style.height = `${test}px`;

    newDiv.style.border = "1px solid black";
    if ((i + j) % 2 == 0) {
      newDiv.style.backgroundColor = "grey";
    }
  }
}
