class Rank {
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }
}

class King extends Rank {
    constructor(x, y, moves) {
        super(x, y);
    }

}

class Queen extends Rank {
    constructor(x, y, moves) {
        super(x, y);
    }

}

class Bishop extends Rank {
    constructor(x, y) {
        super(x, y);
    }

}

class Knight extends Rank {
    constructor(x, y) {
        super(x, y);
    }

}

class Rook extends Rank {
    constructor(x, y) {
        super(x, y);
    }

}

class Pawn extends Rank {
    constructor(x, y) {
        super(x, y);
    }

}
