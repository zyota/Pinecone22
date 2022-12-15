let rootElement = document.getElementById("root");
rootElement.style.display = "flex";
rootElement.style.flexWrap = "wrap";
rootElement.style.width = "450px";
let u = Math.round(Math.random(1) * 255);
let o = Math.round(Math.random(1) * 255);
let p = Math.round(Math.random(1) * 255) + 50;
let r = p - 50;
let rt = Math.floor(Math.random(1) * 4);
let rt2 = Math.floor(Math.random(1) * 4);
for (let i = 0; i < 4; i++) {
  for (let j = 0; j < 4; j++) {
    let newDiv = document.createElement("div");
    newDiv.className = "one";
    newDiv.style.height = `100px`;
    newDiv.style.width = `100px`;
    newDiv.innerText = `rgb(${u},${o},${p})`;
    newDiv.style.margin = `5px`;
    rootElement.appendChild(newDiv);
    newDiv.style.border = "1px solid green";
    newDiv.style.backgroundColor = `rgb(${u},${o},${p})`;
    if (i == rt && j == rt2) {
      newDiv.style.backgroundColor = `rgb(${u},${o},${r})`;
      newDiv.innerText = `rgb(${u},${o},${r})`;
    }
  }
}
