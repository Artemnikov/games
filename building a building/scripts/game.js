import {update, gameDraw} from './logic.js'
export let gameBoard = document.getElementById('board')
export let blockElement = document.getElementsByClassName('block');

window.addEventListener('keydown', (e) => {
    if( e.key == ' ')
        gameDraw();
})

function main (timeStamp) {
    update();
    window.requestAnimationFrame(main);
}

main();

