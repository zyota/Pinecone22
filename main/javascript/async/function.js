function prepare_breakfast() {
  let coffee_promise = new Promise((resolve, reject) =>
    resolve("coffee ready")
  );
  let egg_promise = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("finished frying egg");
    }, 1000);
  });
  let bacon_promise = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("finished frying bacon");
    }, 1000);
  });
  let bread_promise = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("bread toasted");
    }, 3000);
  });
  let jam_promise = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Jam on bread");
    }, 1000);
  });
  let juice_promise = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Juice poured");
    }, 1000);
  });
  let combined_promise = Promise.all([
    coffee_promise,
    egg_promise,
    bacon_promise,
    bread_promise,
    jam_promise,
    juice_promise,
  ]);
  return combined_promise;
}
async function morning() {
  let result = await prepare_breakfast();
  console.log(result);
}
morning();
