function maxNum(num1, num2) {
  if (num1 > num2) {
    return num1;
  } else {
    return num2;
  }
}
console.log("Ehnii daalgavar " + maxNum(30, 10));

function numCheck(num) {
  let arr = [1, 2, 3, 4, 5, 6];
  let i = 0;
  while (i < arr.length) {
    if (arr[i] == num) {
      return arr[i];
    } else {
      return "-1";
    }
    i++;
  }
}
console.log("2dahi daalgavar " + numCheck(5));
