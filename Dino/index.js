let character = document.getElementById('character');
let block = document.getElementById('block');
let score = 1;
let printScore = document.getElementById('score');
let printScoreBaseState = printScore.innerHTML;

window.addEventListener('keydown', (e) => {
    if(e.key == ' '){
        animateCharacter();
    }
})

function animateCharacter () {
    blockAnimation(true);
    if(character.classList == 'animate_character') {return}
    characterAnimation(true)
    setTimeout( function() {
        characterAnimation(false)
      }, 500);
}

let checkHit = setInterval(function () {
    let characterTop = parseInt( window.getComputedStyle(character).getPropertyValue('top'));
    let boxLeft = parseInt ( window.getComputedStyle(block).getPropertyValue('left'));
    if( boxLeft < 20 && boxLeft > 0 &&  characterTop > 130 ){
        lose()
    } else if (boxLeft < 20 && characterTop < 130) calculateScore (true)
}, 10);

function characterAnimation (state) {
    if ( state ) character.classList.add('animate_character');
    if ( !state ) character.classList.remove('animate_character');
}

function blockAnimation (state) {
    if ( state ) block.classList.add('animate_block');
    if ( !state ) block.classList.remove('animate_block');
}

function calculateScore (state) {
    if (state){ ++score; printScore.innerHTML = printScoreBaseState + parseInt(score/8) }
    if ( !state ) {score = 0;}
}

function lose () {
    blockAnimation(false);
    calculateScore(false)
    character.classList.remove('animate_character');
    printScore.innerHTML = printScoreBaseState;
}