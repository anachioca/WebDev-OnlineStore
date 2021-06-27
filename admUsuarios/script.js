if (document.readyState == 'loading') {
    document.addEventListener('DOMContentLoaded', ()=>{ready();})
  } else {
    ready()
}
  

function ready(){
    loadUsers();
}

function loadUsers(){
    var users= localStorage.getObj("data_users");

    for(let i of users){
        console.log(i);
        loadUser(i);
    }

    makeButtons(users);
}

function loadUser(user){
    var userList = document.getElementsByClassName("list-group")[0];
    var userItem = document.createElement('div');

    console.log(user.perm);

    if (user.perm == 2) {
        innerButton = `<button type="button" class="btn btn-adm btn-custom" disabled> Administrador </button>`
    }
    else {
        innerButton = `<button type="button" class="btn btn-adm btn-custom"> Tornar administrador </button>`
    }

    userItem.classList.add("item")
    var listItem = `<a href="#" class="list-group-item list-group-item-action flex-column align-items-start">
                        <div class="d-flex w-100 justify-content-between"> ${user.name}
                            <small> ${user.email} </small>
                            ${innerButton}
                        </div>
                    </a>`;
    userItem.innerHTML = listItem;
    userList.appendChild(userItem);
}

Storage.prototype.setObj = function(key, obj) {
    return this.setItem(key, JSON.stringify(obj))
}

Storage.prototype.getObj = function(key) {
    return JSON.parse(this.getItem(key))
}

function makeButtons(users){
    for(let i=0; i<users.length; i++){
        button = document.getElementsByClassName("btn-adm")[i]
	    button.addEventListener("click", makeAdmin)
    }
}

function makeAdmin(event){
    var users = localStorage.getObj("data_users");
    var buttonClicked = event.target
    var emailTarget = buttonClicked.parentElement.childNodes[1].innerHTML
    emailTarget = emailTarget.trim();
    console.log("buttonclicked");
    console.log(emailTarget);
    for(let i of users){
        console.log(i.email);
        if(i.email === emailTarget){
            console.log("found!")
            i.perm = 2;
            break;
        }
    }
    localStorage.setObj("data_users", users)
    location.reload()
}