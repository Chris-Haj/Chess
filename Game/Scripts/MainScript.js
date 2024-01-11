function drawBoard(length,tileSize,context){
    const board = new Board(length,context);
    board.draw(tileSize);
}

function drawRanks(tileSize,context){

}

$(document).ready(() => {
    const canvas = $('.game')[0];
    const context = canvas.getContext('2d');
    const length = Math.floor(window.innerHeight/1.125);
    canvas.width = canvas.height = length;
    const tileSize = Math.floor(length/8);
    drawBoard(length,tileSize,context);


})

