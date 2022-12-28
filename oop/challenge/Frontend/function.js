let btn = document.getElementById("btn");
let root = document.getElementById("root");
btn.addEventListener("click", () => {
  fetch("http://localhost:3333/api/users")
    .then((res) => res.json)
    .then((res) => {
      root.innerHTML = "";
      res.map((user) => {
        let newCard = document.createElement("div");
        newCard.innerHTML = `Name: ${user.name}, Id: ${user.id},Surname: ${user.surname},Balance: ${user.balance_id}`;
        root.appendChild(newCard);
      });
    });
});
