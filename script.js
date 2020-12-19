const buttons=document.querySelectorAll('.pick');
const scoreEl=document.getElementById('score');
const main=document.getElementById('main');
const selection=document.getElementById('selection');
const reset = document.getElementById('reset');
const user_select = document.getElementById('user_select');
const computer_select = document.getElementById('computer_select');
const winner= document.getElementById('winner');

//modal buttons
const openBtn=document.getElementById('main');
const closeBtn=document.getElementById('main');
const modal=document.getElementById('main');

const choices=['paper', 'rock', 'scissors', 'lizard', 'spock'];

let score=0;
let userChoice=undefined;

buttons.forEach((button) =>{
    button.addEventListener('click', () =>{
        userChoice=button.getAttribute('data-choice');       

        checkWinner();

    });
});
reset.addEventListener('click', () => {
//show the selection | hide the main
        main.style.display = 'none';
        selection.style.display='flex';

});
open.addEventListener('click', () => {
     modal.style.display = 'flex';
});

closeBtn.addEventListener('click', () => {
     modal.style.display = 'flex';
});

function checkWinner() {
       const computerChoice = pickRandomChoice();
        

     //update the view
     updateSelection(user_Select, userChoice);
      updateSelection(computer_Select, computerChioce);


        if(userChoice === computerChoice) {

//draw/
      winner.innerText='draw';
} else if 
       (userChoice ==='paper' && computerChoice === 'rock' )||
       (userChoice === 'rock' && computerChoice === 'scissors') ||  
       (userChoice === 'scissors' && computerChoice === 'paper') ||
       (userChoice `lizard` && computerChoice === 'spock') ||
       (userChoice `spock` && computerChoice === 'paper')

 {
//user won//
updateScore(1);
 winner.innerText=`You Won`;

} 
else{
//user lost
updateScore(-1);
 winner.innerText='You Lost';
}

//show the selection | hide the main
        main.style.display = 'none';
        selection.style.display='flex';

function updateScore(value){
        score += 1;

       scoreEl.innerText=score;
}

/*console.log(pickRandomChoice() );*/

function pickRandomChoice(){
      return choices[Math.floor(Math.random() * choices.length)]
    ;
}

function updateSelection(selectionEl, choice){
      
//class reset
      selectionEl.classList.remove('btn-paper');
      selectionEl.classList.remove('btn-rock');
      selectionEl.classList.remove('btn-scissors');
      selectionEl.classList.remove('btn-lizard');
      selectionEl.classList.remove('btn-spock');

       //update the image
     const img=selectionEl.querySelector('img'); 
     selectionEl.classList.add(`btn-${choice}`);
     selectionEl.querySelector('img').src=  ./images/icon-${choice}.svg

     img.alt=choice;

}
