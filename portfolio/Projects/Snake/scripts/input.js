let inputDirection = { x: 0, y: 0 }
let lastDirection = { x: 0, y: 0 };
window.addEventListener('keydown', e => {
    switch (e.key) {
        case 'ArrowUp':
            if (lastDirection.y != 0) break
            inputDirection = { x: 0, y: 1 }
            break
        case 'ArrowDown':
            if (lastDirection.y != 0) break
            inputDirection = { x: 0, y: -1 } 
            break
        case 'ArrowLeft':
            if (lastDirection.x != 0) break
            inputDirection = { x: -1, y: 0 }
            break
        case 'ArrowRight':
            if (lastDirection.x != 0) break
            inputDirection = { x: 1, y: 0 } 
            break
    }
})
phoneInput();
function phoneInput () {
    let arrows = Array.from(document.getElementsByClassName('controls')[0].children);
    arrows.forEach(item => {
        item.addEventListener('click', (event) => {
            console.log(event.target.innerHTML);
            switch(event.target.innerHTML) {
                case '/' + '\\' :
                    if (lastDirection.y != 0) break
                    inputDirection = { x: 0, y: 1 }
                    break
                case '\\' + '/' :
                    if (lastDirection.y != 0) break
                    inputDirection = { x: 0, y: -1 } 
                    break
                case '&lt;' :
                    if (lastDirection.x != 0) break
                    inputDirection = { x: -1, y: 0 }
                    break
                case '&gt;' :
                    if (lastDirection.x != 0) break
                    inputDirection = { x: 1, y: 0 } 
                    break
            }
        })
    })
}

export function getInputDirection () {
    lastDirection = inputDirection;
    return inputDirection
}