import {update} from './logic.js'
export let gameBoard = document.getElementById('board')
export let blockElement = document.getElementsByClassName('block');

window.addEventListener('keydown', (e) => {
    if( e.key == ' ')
        update();
})

function main (timeStamp) {
    window.requestAnimationFrame(main);
}

main();

