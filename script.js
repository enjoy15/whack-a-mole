//"use strict";

const coords=document.getElementById("coords")
const board=document.getElementById("board")
const hammer=document.getElementById("hammer")

const squares = document.querySelectorAll('.square')
const mole = document.querySelector('.mole')
const timeLeft = document.querySelector('#time-left')
const score = document.querySelector('#score')

let result = 0
let hitPosition
let currentTime = 20
let timerId = null

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
     return true
}
function handleMouseUp(e){
     hammer.classList.remove("down")            
}
function keyUp(e){
     board.innerHTML=e.key
}


function randomSquare() {
  squares.forEach(square => {
    square.classList.remove('mole')
    })
  let randomSquare = squares[Math.floor(Math.random()*15)+1]

  console.log(randomSquare)

  randomSquare.classList.add('mole')

  hitPosition = randomSquare.id
  console.log(hitPosition)

  
  squares.forEach(square => {
    square.addEventListener('mousedown', () => {
      if (square.id == hitPosition) {
        result++
        score.textContent = result
        hitPosition = null
      }
    console.log("click")  
    // handleMouseDown()
    })
  })
}

function moveMole() {
  timerId = setInterval(randomSquare, 1000)
  countDownTimerId = setInterval(countDown, 1000)
}

function countDown() {
  currentTime--
  timeLeft.textContent = currentTime

  if (currentTime == 0) {
    clearInterval(countDownTimerId)
    clearInterval(timerId)
    alert('GAME OVER! Your final score is ' + result)
  }

}

  