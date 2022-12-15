let str = "";
let num = 8;
for (let i = 1; i <= num; i++) {
  for (let j = 1; j <= num; j++) {
    if (i == 1 || i == num || j == 1 || j == num) {
      str = str + " " + i;
    } else {
      str = str + "  ";
    }
  }
  str = str + "\n";
}
console.log(str);
