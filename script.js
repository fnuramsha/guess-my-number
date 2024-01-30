

const button = document.querySelector('.check')
let secretNumber = Math.trunc(Math.random()*20) + 1
//document.querySelector('.number').textContent = secretNumber this line is for testing purpose
 let score = 20;
 let highScore = 0;

 const displayMessage = function(message) {
    document.querySelector('.message').textContent = message
 }
button.addEventListener('click', function() {
    const guess = Number(document.querySelector('.guess').value) 

    if(!guess) {
      displayMessage('No number');
    }
    else if(guess === secretNumber) {
       
      displayMessage("You won!"); 
      document.querySelector('body').style.backgroundColor = '#60b347' 
      if(score > highScore) {
        highScore = score;
        document.querySelector('.highscore').textContent = highScore;
      }
    
     } 
    else if(guess != secretNumber) {
        if(score > 0) {
            document.querySelector('.message').textContent = guess > secretNumber? "Your Number is too high!" : "Your Number is too Low"
            score -- ;
            document.querySelector('.score').textContent = score;
        } else {
            displayMessage("You lost the game")
            document.querySelector('body').style.backgroundColor = '#red' ;
        }
    }
     
})

document.querySelector('.again').addEventListener('click', function()  {
score = 20;
document.querySelector('.score').textContent = score;
let secretNumber = Math.trunc(Math.random()*20) + 1
document.querySelector('.guess').value = ' ';
document.querySelector('body').style.backgroundColor = '#222'
displayMessage("Start guessing....")
document.querySelector('.number').textContent = '?';


})