//"use strict";

const coords=document.getElementById("coords")
const board=document.getElementById("board")
const hammer=document.getElementById("hammer")

board.addEventListener("mousemove",handleMouseMove)
board.addEventListener("mousedown",handleMouseDown)
board.addEventListener("mouseup",handleMouseUp)
board.addEventListener("keyup",keyUp)

function handleMouseMove(e){
     coords.innerText= e.clientX + " " + e.clientY
     hammer.style.top=e.clientY+"px"
     hammer.style.left=e.clientX +"px"
}
function handleMouseDown(e){
     hammer.classList.add("down")
}
function handleMouseUp(e){
     hammer.classList.remove("down")            
}
function keyUp(e){
     board.innerHTML=e.key
}

let x = 1; 

function gridClick(id) {

    let molePosition = id;
    alert(molePosition);

}

function mole(){

    var elem = document.getElementById(x);
    elem.style.backgroundColor = 'white';    
    x = Math.floor(Math.random()*15)+1;
    var elem = document.getElementById(x);
    elem.style.backgroundColor = 'red';

};


// let ids = document.getElementById('grid-item');
// let startButton = document.getElementById('startButton');

// let start = function() {
//     ids.style.backgroundColor = 'black';
//   };
// //   startButton.onclick = start;

//   startButton.addEventListener('click', start);

// startButton.onclick = setInterval(() => {
//     //Generate a random number
//     const random = Math.floor(Math.random() * 16);
    
//     const element = document.querySelector('#id');
//     element.style.color = '#000000'

//   }, 1000);


// startButton.onclick = setInterval(function popup(){
//     var d = new Date();
//     var n = d.getTime();
// }, 1000);