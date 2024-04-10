import { createBoard } from "./board.mjs";
import { possibleMoves, checkValidMoves } from "./moves.mjs";
import { newNode } from "./game.mjs";

let testRoot = newNode([0,0]);
testRoot.children = checkValidMoves(possibleMoves(0,0));
console.log(testRoot);




// Testing
// console.log(createBoard());
// console.log(createBoard().length);