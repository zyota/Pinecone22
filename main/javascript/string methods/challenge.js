const register = "УЮ00242714";
const reg = register.slice(2, 9);
const birthday = reg.slice(2, 6);
const month = birthday.slice(0, 2);
const day = birthday.slice(2, 4);
const letter = register.slice(0, 2);
const alphabet = letter.slice(0, 1);
function isCorrectreg() {
  if (alphabet.includes(register[0]) && register.length == 10) {
    getRegisterinfo();
  } else console.log("Buruu register");
}
function getGender() {
  if (Number(reg[6]) % 2 == 0) {
    console.log("Emegtei");
  } else {
    console.log("Eregtei");
  }
}
function getBirthday() {
  const newMonth = month - 20;
  if (month > 12) {
    return console.log(
      "Tany tursun udur " + newMonth + " sariin " + day + " -ny udur "
    );
  } else {
    console.log("Tany tursun udur " + month + " sariin " + day + " -ny udur");
  }
}
function getRegion() {}
function getRegisterinfo() {
  getGender();
  getBirthday();
  getRegion();
}
isCorrectreg();
