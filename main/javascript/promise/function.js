let boldIncome = 1_000_000;

let doPromise = new Promise((resolve, reject) => {
  setTimeout(() => {
    if (boldIncome > 1_000_000) {
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
let arr = [{ name: "zalukh", age: 22 }];
let newArr = arr;
newArr[0].name = "Bayanmunkh";
console.log(arr);
