// let str = "";
// for (let i = 1; i < 10; i++) {
//   for (let j = 1; j < 10; j++) {
//     str += j + " ";
//   }
//   str += "\n";
//   debugger;
// }
// console.log(str);
// let password = "123";
// let question;
// do {
//   question = prompt("What's your password?");
// } while (question != password);
// {
//   if (question == password) {
//     alert("Done");
//   } else {
//     alert("Wrong");
//     question = prompt("What's your password?");
//   }
// }
let i = 0;
while (i < 10) {
  i++;
  if (i % 2 == 0) {
    continue;
  }
  console.log(i);
}
