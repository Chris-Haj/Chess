class Board {
    constructor(size,context) {
        this.size = size;
        this.context = context;
        this.ranks = this.setRanks();

    }

    setRanks() {
        return Array.from({length: 8}, (_, rowIndex) =>
            Array.from({length: 8}, (_, colIndex) =>
                (rowIndex + colIndex) % 2 === 0 ? 'light' : 'dark'
            )
        );
    }

    draw() {
        let x = 0,y = 0;
        let darkTile = '#b88b4a'
        let lightTile = '#e3c16f'
        let tile = false;
        let tileSize = Math.floor(this.size/8);
        for(let i = 0;i<8;i++){
            for(let j = 0 ;j<8;j++){
                this.context.beginPath();
                this.context.rect(x,y,tileSize,tileSize);
                this.context.fillStyle = tile ? darkTile : lightTile;
                this.context.fill();
                tile = !tile;
                x+=tileSize
            }
            tile = !tile;
            x=0;
            y+=tileSize;
        }
    }
}

$(document).ready(() => {
    const canvas = $('.game')[0];
    const context = canvas.getContext('2d');

    canvas.width = Math.floor(window.innerHeight/1.125);
    canvas.height = Math.floor(window.innerHeight/1.125);
    const board = new Board(canvas.height,context);

    // console.log(canvas.height,canvas.width);
    board.draw();
    // console  .log(board.ranks);
})

