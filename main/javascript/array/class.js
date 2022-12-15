let studentNames = [
  "batsukh",
  "narandelgerekh",
  "nomin",
  "murun",
  "bayanmunkh",
  "munkhsuld",
  "usukhbayar",
  "namnantseren",
  "yunchir",
  "uugan-erdene",
];
let longestName = studentNames[0];
let max = longestName.length;
for (let i = 0; i < studentNames.length; i++) {
  if (studentNames[i].length > max) {
    longestName = studentNames.length;
    max = studentNames[i].length;
    console.log(studentNames[i]);
  }
}
