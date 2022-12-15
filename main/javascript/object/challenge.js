let athletes = [
  { firstName: "abc", age: 15, record: [20, 100, 20] },
  { firstName: "bcd", age: 17, record: [30, 80, 20] },
  { firstName: "cfd", age: 16, record: [40, 90, 10] },
  { firstName: "dsdsf", age: 30, record: [50, 60, 70] },
];
function averageAge(average) {
  let sum = 0;
  let count = 0;
  for (i = 0; i < average.length; i++) {
    sum = sum + average[i].age;
    count++;
  }
  return Math.round(sum / count);
}
console.log(averageAge(athletes));
function getAllnames(names) {
  let getNames;
  for (i = 0; i < names.length; i++) {
    getnames = names[i].firstName;
    console.log(getnames);
  }
}
getAllnames(athletes);
function averageRecord(avgRec) {
  let count = 0;
  for (let i = 0; i < avgRec.length; i++) {
    let sum = 0;
    for (let j = 0; j <= avgRec[i].record.length; j++) {
      sum += avgRec[i].record[j];
      count++;
    }
    return sum / count;
  }
}
console.log("Average Record is " + " " + averageRecord(athletes));
