let myIncome = 100_000;
let doPromise = new Promise((resolve, reject) => {
  setTimeout(() => {
    if (myIncome > 200_000) {
      resolve("success");
    } else {
      reject("not enough funds");
    }
  });
});
doPromise
  .then((param) => {
    console.log(param);
  })
  .catch((error) => {
    console.log(error);
  })
  .finally(() => {
    console.log("finished");
  });
