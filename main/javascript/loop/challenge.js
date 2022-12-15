let x = 10;
let count = 1;
let output = "";
while (x > 0) {
  let y = 10;
  while (y > 0) {
    output = output + count + " \t";
    if (count % 10 == 0) output += "\n";
    y = y - 1;
    count = count + 1;
  }
  x = x - 1;
}
console.log(output);
