import { getInputDirection } from './input.js'
import { food , draw, update as updateFood } from './food.js'
export let snakeSpeed = 5;
const snakeBody = [
    {x: 11, y: 11},
]

export function update (gameBoard) {
    const inputDirection = getInputDirection()
    for(let i = snakeBody.length - 2; i >= 0; i--){
        snakeBody[i + 1] = {...snakeBody[i]}
    }
    snakeBody[0].x += inputDirection.x;
    snakeBody[0].y -= inputDirection.y;
    if(food.x == snakeBody[0].x && food.y == snakeBody[0].y){
        snakeBody.push(food);
        updateFood(true);
    }
    for (let i = 1; i < snakeBody.length; i ++){
        if ( snakeBody[0].x == snakeBody[i].x && snakeBody[0].y == snakeBody[i].y )
        window.location.reload();
    }
    if(snakeBody[0].x < 1 || snakeBody[0].x > 21 || snakeBody[0].y < 1 || snakeBody[0].y > 21)
    window.location.reload();
}

export function drawSnake (gameBoard) {
    snakeBody.forEach(segment =>{
        const snakeElement = document.createElement('div')
        snakeElement.style.gridRowStart = segment.y
        snakeElement.style.gridColumnStart = segment.x
        snakeElement.classList.add('snake')
        gameBoard.append(snakeElement)
    })
}