// let count = 10;
// while (count >= 1) {
//   console.log(count);
//   count = count - 1;
// }
// let text =
//   "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.";
// let numberOfa = 0;
// let countA = 0;
// while (numberOfa < text.length) {
//   if (text[numberOfa] == "s" || text[numberOfa] == "S") {
//     countA = countA + 1;
//   }
//   numberOfa = numberOfa + 1;
// }
// console.log(countA);
let num = 100;
let count = 0;
while (num > 0) {
  if (num % 3 == 0) {
    count = count + 1;
  }
  num = num - 1;
}
console.log(count);
