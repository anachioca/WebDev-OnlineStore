const user1 = {
    nome: "Ana Laura",
    status: "ativo",
}

const user2 = {
    nome: "Maria Fernanda",
    status: "ativo",
}

const user3 = {
    nome: "Paulo",
    status: "banido",
}

let users = [user1, user2, user3];

console.log(users.length)
users.forEach(myFunction)


function myFunction(value, index, array){

    let myList = document.getElementsByClassName("list-group")[0];

    let newUser = document.createElement("a");
    newUser.className = "list-group-item list-group-item-action flex-column align-items-start"

    let userName = document.createElement("div");
    userName.className = "d-flex w-100 justify-content-between";
    userName.innerHTML = users[index].nome;

    let status = document.createElement("small");
    status.innerHTML = users[index].status;

    let myButton = document.createElement("button");
    myButton.type = "button";
    myButton.className = "btn btn-custom"
    myButton.innerHTML = "Mudar Status"

    userName.appendChild(status);
    userName.appendChild(myButton);
    newUser.appendChild(userName);
    myList.appendChild(newUser);
}
