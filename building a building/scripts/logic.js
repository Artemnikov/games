import { blockData } from './block.js'
import { blockElement } from './game.js';

let blockPar = {
    curLeft: 0,
    curRight: 0,
    lasLeft: 0,
    lasRight: 0,
}

export function update () {
    getEdge()
}

export function gameDraw () {
    blockData.draw()
}

function getEdge () {
    let block = document.getElementsByClassName('block');
    let blockArr = Array.from(block)
    let curBlock = blockArr[blockArr.length - 1]
    let lasBlock = blockArr[blockArr.length - 2]

    if (curBlock){
        blockPar.curLeft = parseInt( window.getComputedStyle(curBlock).getPropertyValue('left') )
        blockPar.curRight = parseInt( window.getComputedStyle(curBlock).getPropertyValue('left') + blockData.width)
        let width = parseInt(window.getComputedStyle(curBlock).getPropertyValue('width'))
        if (lasBlock){
            lasBlock.id = 'stop'
            blockPar.lasLeft = parseInt( window.getComputedStyle(lasBlock).getPropertyValue('left') )
            blockPar.lasRight = parseInt( window.getComputedStyle(lasBlock).getPropertyValue('left') + blockData.width)
            
            let deltaRight = blockPar.curRight - blockPar.lasRight
            console.log(width);
            console.log(deltaRight);
            curBlock.style.width = (width - deltaRight) + 'px'
        }
    }
}
