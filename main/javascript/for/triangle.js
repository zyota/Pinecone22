let num = 10;
let output = "";
for (let row = 1; row <= num; row++) {
  for (let col = 1; col <= num; col++) {
    if (col <= row) {
      output = output + " " + "*";
    }
  }
  output = output + "\n";
}
console.log(output);
