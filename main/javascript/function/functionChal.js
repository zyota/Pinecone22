function tegshtoo(num1, num2) {
  if (num1 < num2) {
    for (let tegsh = num1; tegsh <= num2; tegsh++) {
      if (tegsh % 2 == 0) {
        console.log(tegsh + "\n");
      }
    }
  } else {
    for (let tegsh = num2; tegsh <= num1; tegsh++) {
      if (tegsh % 2 == 0) {
        console.log(tegsh + "\n");
      }
    }
  }
}
function sondgoitoo(num1, num2) {
  if (num1 < num2) {
    for (let sondgoi = num1; sondgoi <= num2; sondgoi++) {
      if (sondgoi % 2 == 1) {
        console.log(sondgoi + "\n");
      }
    }
  } else {
    for (let sondgoi = num2; sondgoi <= num1; sondgoi++) {
      if (sondgoi % 2 == 1) {
        console.log(sondgoi + "\n");
      }
    }
  }
}
tegshtoo(14, 10);
sondgoitoo(15, 11);
