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
        let tileSize = Math.floor(this.size/9);
        for (let i = 1; i <= 8; i++) {
            for (let j = 1; j <= 8; j++) {
                let x = j * tileSize;
                let y = i * tileSize;

                this.context.beginPath(); // Start a new path for each tile
                this.context.rect(x, y, tileSize, tileSize);
                this.context.fillStyle = tile ? darkTile : lightTile;
                this.context.fill();

                tile = !tile; // Toggle tile color for next tile
            }
            tile = !tile; // Toggle tile color for start of next row
        }
    }

}

$(document).ready(() => {
    const canvas = $('.boardCan')[0];
    canvas.width = Math.floor(window.innerHeight/1.1);
    canvas.height = Math.floor(window.innerHeight/1.1);

    const context = canvas.getContext('2d');
    const board = new Board(canvas.height,context);
    board.draw();
    console.log(board.ranks);
})

