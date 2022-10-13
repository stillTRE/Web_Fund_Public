// console.log("page loaded...");

var newName = document.querySelector('#name');

function changeName() {
    newName.innerText = "Clark Kent"
}

var user1 = document.querySelector('#user1');

function hide() {
    user1.remove();
}

var user2 = document.querySelector('#user2');

function hide2() {
    user2.remove();
}



function decreaseReq() {
    badge = document.querySelector('#badge1');
    badge = badge.innerText --;
}

function increaseCon() {
    
    badge = document.querySelector('#badge1')
    badge = badge.innerText --;
    badge2 = document.querySelector('#badge2');
    var id = parseInt(badge2.innerText.match(/\d+/g));
    id++;
    badge2.innerText = id + '+';
    // console.log(id);
}


