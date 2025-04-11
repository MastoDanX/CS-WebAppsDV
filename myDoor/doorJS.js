const winMsg = document.getElementById("winBox");
const door = document.getElementById("doorImg");
const key1 = document.getElementById("key1");
const key2 = document.getElementById("key2");
const key3 = document.getElementById("key3");

let x = 0;
let y = 0;
let z = 0;

key1.onclick = function(){
    enterKey(1);
    checkKey(key1);
}
key2.onclick = function(){
    enterKey(2);
    checkKey(key2);
}

key3.onclick = function(){
    enterKey(3);
    checkKey(key3);
}

function enterKey(num){
    if(x==0){
        x = num;
    } else if(y==0){
        y = num;
    } else {
        z = num;
    }
}

function closeDoor(){
    door.src = "Images/door_cl.png";
    winMsg.innerText = "";
    x = 0;
    y = 0;
    z = 0;
    key1.style.backgroundColor = "black";
    key2.style.backgroundColor = "black";
    key3.style.backgroundColor = "black";
}

// code is 213
function checkKey(keyID){
    if((x==2) && (y==1) && (z==3)){
        keyID.style.backgroundColor = "green";
        door.src = "Images/door_op.png";
        winMsg.innerText = "You have managed to open the door! Remember to lock up when you leave.";
    } else if((x==2) && (y==1) && (z==0)){
        keyID.style.backgroundColor = "green";
    } else if((x==2) && (y==0) && (z==0)) {
        keyID.style.backgroundColor = "green";
    } else {
        console.log("Fail");
        x = 0;
        y = 0;
        z = 0;
        key1.style.backgroundColor = "black";
        key2.style.backgroundColor = "black";
        key3.style.backgroundColor = "black";
    }
}

let doorOpened = true;
if (doorOpened) {
    key1.onclick ( e => {closeDoor()});
    key2.onclick ( e => {closeDoor()});
    key3.onclick ( e => {closeDoor()});
}