const showresult = document.getElementById('start')
const choicesid = document.querySelectorAll('.choice')
const playid = document.querySelector('.play')
const user = document.getElementById('user-score')
const computer = document.getElementById('comp-score')


let usercount = 0
let comptcount = 0
const generateComputerChoice = () => {
    const options = ['rock', 'paper', 'scissor']

    let index = Math.floor(Math.random() * 3)

    return options[index]

}

const showWinner=(userWin,userchoice,compChoice)=>{
    
    if (userWin) {
        showresult.innerText = `you win!  your ${userchoice} beats ${compChoice}`
        showresult.style.backgroundColor='green'
        usercount++
        user.innerHTML = `${usercount}`
    }
    else {
        showresult.innerText = `you lose! ${compChoice} beats your ${userchoice} `
        showresult.style.backgroundColor='red'
        comptcount++
        computer.innerText = `${comptcount}`

    }

}


const drawGame=()=>{
     showresult.innerText = `Game was draw try again!`
     showresult.style.backgroundColor='grey'
   
 }
const Playgame = (userchoice) => {
    // console.log("user choice:", userchoice);

    const compChoice = generateComputerChoice()
    // console.log("comp choice:", compChoice)
    
    //drawgame 
     if (userchoice === compChoice) {
        // console.log("its a draw")
        drawGame()

    }  else{

        let userWin = true
        if (userchoice === 'rock') {
            // sscissor or paper
            userWin = compChoice === 'scissor' ? true : false

        }
        else if (userchoice === 'paper') {
            // rock or scissor
            userWin = compChoice === 'rock' ? true : false
        }
        else {
            //  rock or paper
            userWin = compChoice == 'rock' ? false : true
        }
        // console.log(userWin)
        showWinner(userWin,userchoice,compChoice)

    }
    }


choicesid.forEach((obj) => {
    obj.addEventListener('click', () => {
        const userchoice = obj.getAttribute('id')
        // console.log(userchoice)
        Playgame(userchoice)
    })
})