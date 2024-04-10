// functions to deal with moves

// possible knight moves

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

function checkValidMoves(array){
    let validMoves = [];
    for (let x of array) {
        if ((x[0] > 7 || x[0] < 0) || (x[1] > 7 || x[1] < 0)) {
            console.log('Ignoring invalid coordinate!')
        } else {
            validMoves.push(x);
        }
    }
    console.log(validMoves);
    return validMoves;
}
checkValidMoves(possibleMoves(1,1));

export { possibleMoves, checkValidMoves }
