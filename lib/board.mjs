// create game board - game board is 8x8 grid

function createBoard(){
    let board = [];

    for (let i = 0; i < 8; i++) {
        for (let j = 0; j < 8; j++) {
            board.push([i, j]);
        }
    }

    return board;
}

export { createBoard }