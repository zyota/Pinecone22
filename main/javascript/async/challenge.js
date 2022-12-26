async function egg(resolve, reject) {
  setTimeout(() => {
    resolve("Egg fried");
  }, 2000);
}
async function coffee(resolve, reject) {
  setTimeout(() => {
    resolve("Coffee poured");
  }, 1000);
}
let result = await egg();
