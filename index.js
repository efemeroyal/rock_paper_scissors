// Importing relevant materials from the DOM

const exit = document.querySelector('.exit-btn')
const Continue = document.querySelector('.continue-btn')
const start = document.querySelector('.start-btn')
const question = document.querySelector('.question')
const rockBtn = document.querySelector('.btn1')
const container = document.querySelector('.container')
const loadContainer = document.querySelector('.load-container')
const header = document.querySelector('header')
const rulesBox = document.querySelector('.rules')
const paperBtn = document.querySelector('.btn2')
const scisscorsBtn = document.querySelector('.btn3')
const restartBtn = document.querySelector('.restart-btn')
const rulesBtn = document.querySelector('.rules-btn')
const closeBtn = document.querySelector('.rules-close-btn')
const scoreText = document.querySelector('.score')
const playerText = document.querySelector('.player-text')
const resultText = document.querySelector('.result-text')
const computerText = document.querySelector('.computer-text')
const btns = document.querySelectorAll('button')
const turn = document.querySelector('.turn')


let num = randomNumber()
let pMove =''
let cMove =''
let score = 0

if(num==0){
    turn.innerHTML = "Computer's Turn"
}
else {
    turn.innerHTML = "Player's Turn"
   
}
//Using the foreach method to loop through the array of buttons

btns.forEach(btn=>
btn.addEventListener('click',()=>{
    computerText.innerHTML = 'Computer is thinking...'
    setTimeout(()=>{
            computerTurn()
            
    },2000)
    setTimeout(()=>{
        checkWin()
        
},3000)
setTimeout(()=>{
        
     resultText.innerHTML = 'Your Results Go Here'   
},8000)
}))

// Call of functions

// computerTurn()
playerTurn()

restartBtn.onclick=()=>{
   score=0
   scoreText.innerHTML = `Score: ${score}`
   playerText.innerHTML = ''
   computerText.innerHTML = ''
   resultText.innerHTML = 'Your Results Go Here'
}

rulesBtn.onclick=()=>{
     rulesBox.classList.add('rules-active')
     container.classList.add('blur')
     header.classList.add('blur')
}
closeBtn.addEventListener('click',()=>{
    rulesBox.classList.remove('rules-active')
     container.classList.remove('blur')
     header.classList.remove('blur')
})

start.addEventListener('click',()=>{
      question.classList.add('a')
    //   loadContainer.classList.add('blur')
})
exit.addEventListener('click',()=>{
      question.classList.remove('a')
})
Continue.addEventListener('click',()=>{
      header.classList.remove('load')
      container.classList.remove('load')
      loadContainer.classList.add('load')
})

// Functions Section

function randomNumber(){
    let turn = Math.floor(Math.random()*2)
    return turn
}

function playerTurn(){
    rockBtn.addEventListener('click',()=>{
        pMove = 'rock'
        playerText.innerHTML = `You played ${pMove}`
      })
      paperBtn.addEventListener('click',()=>{
        pMove = 'paper'
         playerText.innerHTML = `You played ${pMove}`
      })
      scisscorsBtn.addEventListener('click',()=>{
        pMove = 'scisscors'
         playerText.innerHTML = `You played ${pMove}`
      })
}
function computerTurn(){
    let options = ['rock', 'paper', 'scisscors']
    let r = Math.floor(Math.random()*3)
    cMove = options[r]
    computerText.innerHTML = `Computer played ${cMove}`

}


function checkWin(){
   if(pMove =='rock' && cMove=='rock'){
        resultText.innerHTML = "It's a tie!"
   }
     if(pMove =='rock' && cMove=='paper'){
        resultText.innerHTML = "rock doesn't beat paper, You lose!"
   }
     if(pMove =='rock' && cMove=='scisscors'){
        resultText.innerHTML = "rock beats scisscors, You win!"
        score++
        scoreText.innerHTML =  `Score: ${score}`
   }
   if(pMove =='paper' && cMove=='paper'){
        resultText.innerHTML = "It's a tie!"
   }
     if(pMove =='paper' && cMove=='scisscors'){
        resultText.innerHTML = "paper doesn't beat scisscors, You lose!"
   }
     if(pMove =='paper' && cMove=='rock'){
        resultText.innerHTML = "paper beats rock, You win!"
        score++
        scoreText.innerHTML =  `Score: ${score}`
   }
   if(pMove =='scisscors' && cMove=='scisscors'){
        resultText.innerHTML = "It's a tie!"
   }
     if(pMove =='scisscors' && cMove=='rock'){
        resultText.innerHTML = "scisscors doesn't beat rock, You lose!"
   }
     if(pMove =='scisscors' && cMove=='paper'){
        resultText.innerHTML = "scisscors beats paper, You win!"
        score++
        scoreText.innerHTML =  `Score: ${score}`
   }
}
 
