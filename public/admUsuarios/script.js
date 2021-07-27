//run the navbar function when the page is completely load
if (document.readyState == 'loading') {
    document.addEventListener('DOMContentLoaded', ()=>{ready();})
  } else {
    ready()
}


function ready(){
    loadUsers();
}



//load users onto page
async function loadUsers(){
  let fetch_data = {
    method:"GET",
  }

  let resp = await fetch('/users', fetch_data)
  resp  = await resp.json();
  var users= resp;

  for(let i of users){
    console.log(i);
    loadUser(i);
  }

  makeButtons(users);
}

//load one user onto page
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
    var listItem = `<div class="col-sm-12">
                      <div class="card">
                        <div class="card-body">
                        <div style="float: left">
                        ${user.name}
                        - <small>${user.email}</small>
                        </div>
                        <div style="float:right">${innerButton}</div>
                        </div>
                      </div>
                    </div>`;


    `<a href="#" class="list-group-item list-group-item-action flex-column align-items-start">
                        <div class="d-flex w-100 justify-content-between"> ${user.name}
                            <small> ${user.email} </small>
                            ${innerButton}
                        </div>
                    </a>`;
    userItem.innerHTML = listItem;
    userList.appendChild(userItem);
}

//functions to set and get objects onto the localStorage
Storage.prototype.setObj = function(key, obj) {
    return this.setItem(key, JSON.stringify(obj))
}

Storage.prototype.getObj = function(key) {
    return JSON.parse(this.getItem(key))
}

//set the action buttons
function makeButtons(users){
    for(let i=0; i<users.length; i++){
        button = document.getElementsByClassName("btn-adm")[i]
	    button.addEventListener("click", makeAdmin)
    }
}

//turns a normal user into admin
async function makeAdmin(event){
    var buttonClicked = event.target
    var emailTarget = buttonClicked.parentElement.parentElement.childNodes[1].childNodes[1].innerHTML
    emailTarget = emailTarget.trim();
    console.log("buttonclicked");
    console.log(emailTarget);

    var data = {
			email: emailTarget,
			perm: 2
		}

	  data = JSON.stringify(data);
    let fetch_data = {
      method:"PUT",
      body: data,
      headers: {
				'Content-Type': 'application/json'
			}
    }
    let resp = await fetch('/users/perm', fetch_data)
    if(resp.status == 400){
      alert("Falha ao mudar permissão")
    }

    location.reload()
}
