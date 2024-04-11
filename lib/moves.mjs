import { createBoard } from "./board.mjs";
// functions to deal with moves

// possible knight moves
// valid moves list kinda ugly, probably there is a better way of writing that code
// alternatively, validation check could be done here, but I want function to only do one thing

function possibleMoves(xInput, yInput){
    if ((xInput > 7 || xInput < 0) || (yInput > 7 || yInput < 0)) {
        throw new Error('Invalid coordinate provided. Coordinates cannot be less than 0 or more than 7');
    }

    let allMoves = [];
    allMoves.push([xInput + 1, yInput + 2]);
    allMoves.push([xInput + 1, yInput - 2]);
    allMoves.push([xInput - 1, yInput + 2]);
    allMoves.push([xInput - 1, yInput - 2]);

    allMoves.push([xInput + 2, yInput + 1]);
    allMoves.push([xInput + 2, yInput - 1]);
    allMoves.push([xInput - 2, yInput + 1]);
    allMoves.push([xInput - 2, yInput - 1]);

    return allMoves;
};

// check validity of potential moves

function checkValidMoves(array, currentBoard){
    let validMoves = [];
    let reValidate = []
    for (let x of array) {
        if ((x[0] > 7 || x[0] < 0) || (x[1] > 7 || x[1] < 0)) {
            console.log('Ignoring invalid coordinate!')
        } else {
            validMoves.push(x);
        };
    };

    if (currentBoard) {
        console.log('test');
        for (let y of validMoves) {
            for (let z of currentBoard) {
                if (y[0] === z[0] && y[1] === z[1]) {
                    console.log('move ok');
                    reValidate.push(y);
                } 
            }
        }
        return (reValidate);
    } else {
        return validMoves
    }
    //     for (let y of validMoves) {
    //         if (currentBoard.includes(y)) {
    //             console.log('move OK');
    //         } else {
    //             validMoves = validMoves.filter((filtBoard) => filtBoard != y)
    //         };
    //     };
    // };
    

    
};

// re-validate moves v.s ban list

function reValidate(array, validmove){
    for (let x of array) {

    }
};


// testing
// checkValidMoves(possibleMoves(1,1));

export { possibleMoves, checkValidMoves }
