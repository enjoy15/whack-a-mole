const boxs = document.querySelectorAll(".grid-item");
const length = boxs.length;

function gridClick(id) {
    alert(id);
}

let startButton = document.getElementById('startButton');

var interval = setInterval(() => {
    //Generate a random number
    const random = Math.floor(Math.random() * length);
    
    //Remove the active class from every ground
    boxs.forEach((e) => {
      e.classList.remove("active");
    });
    
    //Add the active class to random ground
    boxs[random].classList.add("active");
  }, 700);


// startButton.onclick = setInterval(function popup(){
//     var d = new Date();
//     var n = d.getTime();
// }, 1000);