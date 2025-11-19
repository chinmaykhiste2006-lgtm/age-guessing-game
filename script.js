// import { randomName, age} from "./data/names.js";
// import { more_guess, less_guess } from "./data/messages.js";

// let num;
// let guess;

// document.querySelector('.js-male-button').
// addEventListener('click', () => {

//     num = Math.floor(Math.random() * 10);
//   randomName('male', num);  
// });

// document.querySelector('.js-female-button').
// addEventListener('click', () => {

//     num = Math.floor(Math.random() * 10);
//   randomName('female', num);  
// });

// document.querySelector('.js-other-button').
// addEventListener('click', () => {

// num = Math.floor(Math.random() * 10);
//   randomName('other', num);  
// });

// let tries = 0;
// let score = 100;

// function render(){


//   document.querySelector('.js-submit').
//   addEventListener('click', () => {

// guess =  parseInt(document.querySelector('.js-age-input').value);
  
//     do{

//     document.querySelector('.js-score-box').
//     innerHTML = `Score: ${score}`;
    
//     document.querySelector('.js-tries-box').
//     innerHTML = `Tries: ${tries}`;





 
//   let message = document.querySelector('.js-pop-up');
//  let msgIdx = Math.floor(Math.random() * 10);

//   if(guess < age){
  
//     message.innerHTML = `${less_guess[msgIdx]}`; 
//   }
  
//   else if(guess > age){
  
//     message.innerHTML = `${more_guess[msgIdx]}`; 
//   }

//   else if(guess <= 0){
  
//     message.innerHTML = `Age cannot be negative or zero`;
//   }

//   tries++;
//   score--;

//     }while(age!== guess);
    


// message.innerHTML = `Hurrah! You Won in ${tries+1} tries and your score is ${score+1}. Refresh to play again`;
// tries = 0;
// score = 100;
// return;
//   });

// }


// render();



import { randomName, age, random_human } from "./data/names.js";
import { more_guess, less_guess } from "./data/messages.js";
import { image } from "./data/images.js";

let num;
let guess;

let tries = 0;
let score = 100;

let gameOver = false;

function reset(){

  tries = 0;
  score = 100;
  document.querySelector('.js-score-box').innerHTML = `Score: ${score}`;
  document.querySelector('.js-tries-box').innerHTML = `Tries: ${tries}`;
}



function increment(){


  tries++;
  score--;

  document.querySelector('.js-score-box').innerHTML = `Score: ${score}`;
  document.querySelector('.js-tries-box').innerHTML = `Tries: ${tries}`;
}

document.querySelector('.js-male-button').addEventListener('click', () => {
    num = Math.floor(Math.random() * 10);
    gameOver = false;
    randomName('male', num);
    image('male', num);
   reset();
});

document.querySelector('.js-female-button').addEventListener('click', () => {
    num = Math.floor(Math.random() * 10);
    gameOver = false;
    randomName('female', num);
    image('female', num);
reset();
});

document.querySelector('.js-other-button').addEventListener('click', () => {
    num = Math.floor(Math.random() * 10);
   gameOver  = false;
    randomName('other', num);
    image('other', num);
reset();
});


function render() {

  document.querySelector('.js-submit').addEventListener('click', () => {

    guess = parseInt(document.querySelector('.js-age-input').value);
    let message = document.querySelector('.js-pop-up');
    let msgIdx = Math.floor(Math.random() * 10);

    if(random_human === undefined){

      alert("please select gender");
      return;
    }

    if(gameOver){

      message.innerHTML = `Please refresh the page or tap on any gender to play`;
      return;
    }

    if (guess === age) {

      gameOver = true;
      increment();
      message.innerHTML = `Hurrah! You Won in ${tries} tries and your score is ${score}. Refresh or choose next person`;
    }


   else if (guess <= 0 || isNaN(guess)) {
      message.innerHTML = "Age cannot be negative or zero";
     increment();
    }

    // correct


    // wrong
  else if (guess < age) {
      message.innerHTML = less_guess[msgIdx];
      increment();
    }
   else {
      message.innerHTML = more_guess[msgIdx];
      increment();
    }


    if(tries === 90){

      message.innerHTML = `Ohh! You lost. Please refresh and play Again`;
      gameOver = true;
      return;
    }
  });

}

render();









