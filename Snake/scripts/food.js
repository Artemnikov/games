export let food ={ x:12, y:12}
let randomy = 0;
let randomx = 0;

export function update(eaten) {
    if(eaten) {
        randomx = Math.floor(Math.random()*20) + 1
        randomy = Math.floor(Math.random()*20) + 1
        food.x = randomy
        food.y = randomy
    }
}

export function draw (gameBoard) {
    const foodElement = document.createElement('div')
    foodElement.style.gridRowStart = food.y
    foodElement.style.gridColumnStart = food.x
    foodElement.classList.add('food')
    gameBoard.appendChild(foodElement)
}
