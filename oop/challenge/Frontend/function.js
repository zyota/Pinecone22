let btn = document.getElementById("btn");
let root = document.getElementById("root");
let submit = document.getElementById("submit");
let input = document.getElementById("input");
let add = document.getElementById("add");
let name = document.getElementById("name");
let surname = document.getElementById("surName");
let balance = document.getElementById("balance");
let balanceId = document.getElementById("balanceId");
btn.addEventListener("click", () => {
  fetch("http://localhost:3333/api/users")
    .then((res) => res.json())
    .then((res) => {
      root.innerHTML = "";
      res.map((users) => {
        let newCard = document.createElement("div");
        newCard.innerHTML = `<div class="card" style="width: 18rem;">
        <img src="https://upload.wikimedia.org/wikipedia/commons/9/99/Sample_User_Icon.png" class="card-img-top" alt="...">
        <div class="card-body">
          <p class="card-text">Name: ${users.name}</p>
          <p class="card-text">Surname ${users.surName}</p>
          <p class="card-text">Balance: ${users.balance}</p>
          <p class="card-text">Balance ID: ${users.balance_id}</p>
        </div>
      </div>`;
        root.appendChild(newCard);
      });
    });
});
submit.addEventListener("click", () => {
  fetch("http://localhost:3333/api/users")
    .then((res) => res.json())
    .then((res) => {
      root.innerHTML = "";
      res.map((users) => {
        let newCard = document.createElement("div");
        let alt;
        if (users.balance_type == true) {
          alt = 0.1;
        } else {
          alt = 0.01;
        }
        let interest = users.balance + users.balance * alt * input.value;
        newCard.innerHTML = `<div class="card" style="width: 18rem;">
        <img src="https://upload.wikimedia.org/wikipedia/commons/9/99/Sample_User_Icon.png" class="card-img-top" alt="...">
        <div class="card-body">
          <p class="card-text">Name: ${users.name}</p>
          <p class="card-text">Surname: ${users.surName}</p>
          <p class="card-text">Balance in ${input.value}: ${interest}</p>
          <p class="card-text">Balance ID: ${users.balance_id}</p>
        </div>
      </div>`;
        root.appendChild(newCard);
      });
    });
});
btn.addEventListener("click", () => {
  fetch("http://localhost:3333/api/users")
    .then((res) => res.json())
    .then((res) => {
      root.innerHTML = "";
      res.map((users) => {
        let newCard = document.createElement("div");
        newCard.innerHTML = `<div class="card" style="width: 18rem;">
        <img src="https://upload.wikimedia.org/wikipedia/commons/9/99/Sample_User_Icon.png" class="card-img-top" alt="...">
        <div class="card-body">
          <p class="card-text">Name: ${users.name}</p>
          <p class="card-text">Surname ${users.surName}</p>
          <p class="card-text">Balance: ${users.balance}</p>
          <p class="card-text">Balance ID: ${users.balance_id}</p>
        </div>
      </div>`;
        root.appendChild(newCard);
      });
    });
});
add.addEventListener("click", () => {
  fetch("http://localhost:3333/api/users")
    .then((res) => res.json())
    .then((res) => {
      root.innerHTML = "";
      res.map((users) => {
        let newCard = document.createElement("div");
        newCard.innerHTML = `<div class="card" style="width: 18rem;">
        <img src="https://upload.wikimedia.org/wikipedia/commons/9/99/Sample_User_Icon.png" class="card-img-top" alt="...">
        <div class="card-body">
          <p class="card-text">Name: ${users.name}</p>
          <p class="card-text">Surname ${users.surName}</p>
          <p class="card-text">Balance: ${users.balance}</p>
          <p class="card-text">Balance ID: ${users.balance_id}</p>
        </div>
      </div>`;
        root.appendChild(newCard);
      });
    });
});
