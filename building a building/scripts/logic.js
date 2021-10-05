import { block } from './block.js'
import { blockElement } from './game.js';

let BP = {
    lastLeft: 0,
    lastRight: 0,
    currenctLeft: 0,
    currentRight: 0,
}

export function update () {

    let blocElement = document.getElementsByClassName('block');
    let lastBlock = blocElement[blocElement.length - 3];
    let currentBlock = blocElement[blocElement.length - 2];
    block.stop(lastBlock);
    blockEdge(currentBlock, lastBlock);
    if (blockElement.length < 1){
        block.draw();
        return
    } 
}

function blockEdge (currentBlock, lastBlock) {
    console.log(lastBlock);
    console.log(currentBlock);
    BP.lastLeft  = parseInt(window.getComputedStyle(lastBlock).getPropertyValue('left'));
    BP.lastRight = parseInt(window.getComputedStyle(lastBlock).getPropertyValue('right'));

    BP.currenctLeft = parseInt(window.getComputedStyle(currentBlock).getPropertyValue('left'));
    BP.currentRight = parseInt(window.getComputedStyle(currentBlock).getPropertyValue('right'));

    console.log('last: ' + BP.lastLeft + ' right: ' + BP.lastRight);
    console.log('current: ' + BP.currenctLeft + ' right: ' + BP.currentRight);

    calculateNextBlock ();
}

function calculateNextBlock() {
    
}