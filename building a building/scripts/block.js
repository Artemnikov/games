import {gameBoard} from './game.js'
export let blockData = {
    height: 30,
    width: 200,
    draw: function () {
        let newBLock = document.createElement('div');
        newBLock.classList.add('block');
        newBLock.classList.add('block_animate');
        newBLock.style.height = this.height + 'px'
        newBLock.style.width = this.width + 'px'
        gameBoard.append(newBLock)
    },
}
