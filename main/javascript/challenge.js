let a = window.prompt("random too 1");
let b = window.prompt("random too 2");
console.log(Math.floor(Math.random()) * (Math.abs(a - b) + 1) + Math.min(a, b));
