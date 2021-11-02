import {update as updateSnake, drawSnake as drawSnake, snakeSpeed} from './snake.js'
import {update as updateFood, draw as drawFood} from './food.js'
const gameBoard = document.getElementById('game_board')

// defining the speed of the game and calling game functions
let lastRenderedTime = 0;
function main (currentTime) {
    let secondsSinceLastRender = (currentTime - lastRenderedTime) / 1000;
    window.requestAnimationFrame(main)
    if (secondsSinceLastRender < 1 / snakeSpeed) return
    lastRenderedTime = currentTime;
    update()
    draw()
}
window.requestAnimationFrame(main)

function update () {
    updateSnake()
    updateFood()
}

function draw () {
    gameBoard.innerHTML = '';
    drawSnake(gameBoard,drawFood)
    drawFood(gameBoard)
}