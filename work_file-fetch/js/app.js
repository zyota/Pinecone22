let select = document.querySelector("#breeds");
let card = document.querySelector(".card");
fetch("https://dog.ceo/dog-api/breeds-list")
  .then((res) => res.json())
  .then((data) => data());
function 