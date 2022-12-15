let num = 4;
let output = "";
let count = 1;
for (let row = 1; row <= num; row++) {
  for (let dash = num - row; dash >= 0; dash--) {
    output += " ";
  }
  for (let number = 1; number <= row; number++) {
    output += count + " ";
    count++;
  } 
  output += "\n";
}
console.log(output);
