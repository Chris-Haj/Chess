class Rank {
    constructor(x, y,moves,img,context) {
        this.x = x;
        this.y = y;
        this.moves = moves;
        this.img = img;
        this.context = context;
    }

    draw(){

    }
}

class King extends Rank {
    constructor(x, y, moves,img,context) {
        super(x,y,moves,img,context);
    }

}

class Queen extends Rank {
    constructor(x, y, moves,img,context) {
        super(x,y,moves,img,context);
    }

}

class Bishop extends Rank {
    constructor(x, y,moves,img,context) {
        super(x,y,moves,img,context);
    }

}

class Knight extends Rank {
    constructor(x, y,moves,img,context) {
        super(x,y,moves,img,context);
    }

}

class Rook extends Rank {
    constructor(x, y,moves,img,context) {
        super(x,y,moves,img,context);
    }

}

class Pawn extends Rank {
    constructor(x, y,moves,img,context) {
        super(x,y,moves,img,context);
    }

}

$(document).ready(() => {
    const canvas = $('.game')[0];
    const context = canvas.getContext('2d');
    canvas.width = Math.floor(window.innerHeight/1.125);
    canvas.height = Math.floor(window.innerHeight/1.125);


})