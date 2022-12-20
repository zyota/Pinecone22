// const now = new Date();
// function doSomething(func1, func2) {
//   if (now.getHours() < 18) {
//     func1();
//   } else {
//     func2;
//   }
// }
// function printHello() {
//   console.log("Hello");
// }
// function printBye() {
//   console.log("Bye");
// }
// doSomething(printHello, printBye);
let customBtn = document.getElementById("root");
customBtn.addEventListener("click", () => {
  customBtn.innerHTML = "Clicked";
  customBtn.style.opacity = "0.5";
});
customBtn.innerHTML = "Click Me";
window.addEventListener("scroll", () => {
  let percent = Math.floor(
    Math.floor(window.scrollY * 100) /
      (document.querySelector("body").clientHeight - window.innerHeight)
  );
  (document.querySelector("#per").innerHTML = `${percent}`) + "%";
});
