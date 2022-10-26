let comguess;

let userguess = [];
let userNumberUpdate = document.getElementById("textOutput");
userGuessUpdate = document.getElementById("inputBox");

let audio = new Audio("./mux/music.mp3")

const init=()=>{
    comguess=Math.floor(Math.random()*100);

    document.getElementById("newGameButton").style.display="none";
    document.getElementById("gameArea").style.display="none";
};

  const startGame = ()=>{
    document.getElementById("welcomeScreen").style.display="none";

    document.getElementById("gameArea").style.display="block";
  }

  const newGameBegin = ()=>{
    audio.play();
    window.location.reload();
   
  }

  const startNewGame = ()=>{
    audio.play();
   document.getElementById("newGameButton").style.display="inline";
   userGuessUpdate.setAttribute("disabled",true);
  }

 const compareGuess = ()=>{
    audio.play();
    const userNumber = Number(document.getElementById("inputBox").value);
    userguess = [...userguess , userNumber];
    document.getElementById("guesses").innerHTML=userguess;


 if(userguess.length<maxGuess){
     if(userNumber<comguess){
        userNumberUpdate.innerHTML="Your Guess Is Low ";
        userGuessUpdate.value=" ";
    }else if(userNumber>comguess){
        userNumberUpdate.innerHTML="Your Guess Is HIGH ";
        userGuessUpdate.value=" ";
    }else{
        userNumberUpdate.innerHTML="Your Guess Is Correct";
        userGuessUpdate.value=" ";

        startNewGame();
    }
} else{
    if(userNumber<comguess){
        userguessUpdate.innerHTML=`You Loose !! correct number is ${comguess}`;
        userGuessUpdate.value=" ";
        
        startNewGame();

    }else if(userNumber>comguess){
        userNumberUpdate.innerHTML=`You Loose !! correct number is ${comguess}`;
        userGuessUpdate.value=" ";
          
        startNewGame();

    }else{
        userNumberUpdate.innerHTML="Your Guess Is Correct";
        userGuessUpdate.value=" ";

        startNewGame();
    }
}

    document.getElementById("attempts").innerHTML=userguess.length;

 }


 const easyMode = ()=>{
    audio.play();
    maxGuess = 15;
    startGame();
 }
 const mediumMode = ()=>{
    maxGuess = 10;
    audio.play();
    startGame();
 }
 const hardMode = ()=>{
    maxGuess = 5;
    startGame();
    audio.play();
 }

