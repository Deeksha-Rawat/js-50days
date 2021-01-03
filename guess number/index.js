//game values

let min = 1,
    max = 10,
    winningNum = getRandomNum(min,max),
    guessesLeft  = 3;

//Ui Elements
 
const game = document.querySelector  ('#game'),
      minNum = document.querySelector('.min-num'),
      maxNum = document.querySelector('.max-num'),
      guessBtn = document.querySelector('#guess-btn'),
      guessInput = document.querySelector('#guess-input'),
      message = document.querySelector('.message');
      
// assign UI min and max
 minNum.textContent = min;
 maxNum.textContent = max;


 //play again event listener

 guessBtn.addEventListener('mousedown',function(e){
     if(e.target.className === 'play-again'){
         window.location.reload();
     }
 });

 //listen for guess

 guessBtn.addEventListener('click',function(){
     let guess = parseInt(guessInput.value);


     //validate 

     if(isNaN(guess) || guess < min || guess > max){
         setMessage(`Please enter a number between ${min} and ${max}`,'red');
     }

     //check if won
     if(guess === winningNum){
        //disable input
      /*   guessInput.disabled = true;
        //change border green
        guessInput.style.borderColor = 'green';

        //set message

        setMessage(`${winningNum} is correct, YOU WON`,'green')

 */
        gameOver(true,`${winningNum} is correct, YOU WON`)

     }else{
         //wrong number
          guessesLeft -= 1;


          if(guessesLeft === 0){
              //game over
              /* guessInput.disabled = true;
        //change border green
        guessInput.style.borderColor = 'red';

        //set message

        setMessage(`GAME OVER,no attempt left. THE CORRECT NO WAS ${winningNum}`,'red')

 */         
            gameOver(false,`GAME OVER,no attempt left. THE CORRECT NO WAS ${winningNum}`);
            
          }else {
              //game continues - answer wrong
              setMessage(`${guess} is not correct, ${guessesLeft}  guesses left`)
          }

     }
 });

 //game over
 function gameOver(won,msg){
    let color;
    won === true ? color = 'green' : color = 'red';

    guessInput.disabled = true;
    //set text color
    message.style.color = color;
    //change border green
    guessInput.style.borderColor = color;

    //set message

    setMessage(msg);

    //play again?

    guessBtn.value = 'Play Again';
    guessBtn.className += 'play-again'


 }


 ///get winning number
 function getRandomNum(min,max){
     console.log(Math.floor(Math.random()*(max-min+1)+min));
     return(Math.floor(Math.random()*(max-min+1)+min));

 }


 //setMessage
 function setMessage(msg,color){
     message.textContent = msg;
     message.style.color = color;
 }