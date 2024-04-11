import { createBoard } from "./board.mjs";
import { possibleMoves, checkValidMoves, matchCheck } from "./moves.mjs";
import { newNode, addChildren, addParent } from "./node.mjs";

// testRoot.children = checkValidMoves(possibleMoves(0,0));
// addChildren(testRoot, checkValidMoves(possibleMoves(7,7)));
// console.log('////////////')
// console.log(testRoot.value);
// console.log(testRoot.parents);
// console.log(testRoot.children);

// remove move done
function removeMove(xInput, yInput) {
  for (let x of board) {
    if (x[0] === xInput && x[1] === yInput) {
      // console.log("found");
      board = board.filter((filtBoard) => filtBoard != x);
    }
  }
  return board;
}

// function to track visited moves
let visited = [];
function trackVisited(input) {
  visited.push(input);
  return visited;
}

const graph = () => {
  let list = {};

  const addNode = (node) => {
    list[node] = [];
  };

  const addEdge = (fromNode, toNode) => {
    list[fromNode].push(toNode);
  };

  return {
    list,
    addNode,
    addEdge,
  };
};

let testgraph = graph();
// console.log(board);
// testgraph.addNode(testRoot.value);

// console.log(testgraph.list);

let board = createBoard();

// removeMove(3, 3);
// removeMove(0, 0);
// removeMove(1, 1);
// console.log(board.length);

let testRoot = newNode([0, 0]);
console.log(testRoot);
// let possMoves = possibleMoves(0,0);
// let validmove = checkValidMoves(possMoves);
// addChildren(testRoot, validmove);
// console.log(testRoot);
// console.log(testRoot.children[0]);
// trackVisited(testRoot.value);
// removeMove(testRoot.value[0], testRoot.value[1]);

let tar = [3, 3];

let moveCount = 0;

function knightMoves(start, target, moveCount) {
  if (start.value[0] === target[0] && start.value[1] === target[1]) {
    console.log("VALUE FOUND!!!!!");
    return start;
  } else {
    let tempMoves = possibleMoves(start.value[0], start.value[1]);

    let tempValid = checkValidMoves(tempMoves, board);

    console.log(tempValid);

    addChildren(start, tempValid);
    addParent(testRoot, start);

    trackVisited(start.value);
    console.log("ARRAY OF VISITED:   " + visited);
    removeMove(start.value[0], start.value[1]);
    console.log(board.length + " BOARD LENGTH IS");
    console.log(start.value + " START VALUE");
    moveCount += 1;
    console.log(`CURRENT MOVE COUNT IS ${moveCount}`);

    return knightMoves(start.children[0], target, moveCount);
  }
}

let tempMoves = possibleMoves(0, 0);

let tempValid = checkValidMoves(tempMoves, board);

console.log(tempValid);
let moveVisted = [[0, 0], [2,0]];
let newStuff = checkValidMoves(possibleMoves(1, 2), board);
let tempArr = []
console.log(moveVisted);
console.log(newStuff);

for (let z of newStuff) {
    for (let o of moveVisted) {
        if (o[0] == z[0] && o[1] == z[1]) {
            console.log('Duplicate found');
            newStuff = newStuff.filter((filt) => filt === o);
        } 
    }
}
console.log(newStuff);



// knightMoves(testRoot, tar, moveCount);
// console.log(testRoot.value);
// console.log(tar);

// console.log(board);
// console.log(board.length);
// removeMove(0,0);
// console.log(checkValidMoves([0,1], board));
// console.log(board);
// console.log(board.length);
// removeMove(0,1);
// console.log(board);
// console.log(board.length);
// removeMove(0,2);
// console.log(board);
// console.log(board.length);
// removeMove(0,3);
// console.log(board);
// console.log(board.length);
// removeMove(0,4);
// console.log(board);
// console.log(board.length);

// for (let x of testRoot.children) {
//     let tempMoves = possibleMoves(x.value[0], x.value[1]);

//     let tempValid = checkValidMoves(tempMoves, board);
//     console.log(tempValid);
//     matchCheck(tar, tempValid)
//     addChildren(x, tempValid);
//     addParent(testRoot, x);

// };
// removeMove(testRoot.children[0].value[0], testRoot.children[0].value[1]);

// for (let x of testRoot.children[0].children) {
//     let tempMoves = possibleMoves(x.value[0], x.value[1]);

//     let tempValid = checkValidMoves(tempMoves, board);
//     console.log(tempValid);
//     addChildren(x, tempValid);
//     addParent(testRoot.children[0], x);
// };

// removeMove(testRoot.children[0].children[0].value[0], testRoot.children[0].children[0].value[1]);
// for (let x of testRoot.children[0].children[0].children) {
//     let tempMoves = possibleMoves(x.value[0], x.value[1]);

//     let tempValid = checkValidMoves(tempMoves, board);
//     console.log(tempValid);
//     addChildren(x, tempValid);
//     addParent(testRoot.children[0].children[0], x);
// };

// console.log(board.length);

// console.log(testRoot);
// console.log(testRoot.children[0]);
// console.log(testRoot.children[0].children[0]);
// console.log(testRoot.children[0].children[0].children[0]);

// console.log(testRoot.children[0]);

// maybe im doing too many things at the same time....
// first i should write something that goes deep on just one value

// let testgraphchildren = checkValidMoves(possibleMoves(testRoot.value[0],testRoot.value[1]));

// for (let x of testgraphchildren) {
//     testgraph.addEdge(testRoot.value, x);
// }

// function testingAddingToList(input) {
//     let tempChildren = checkValidMoves(possibleMoves(testgraph.list['3,3'][0][0],testgraph.list['3,3'][0][1]));
//     let target = testgraph.addNode(testgraph.list['3,3'][0]);
//     console.log(target);
//     testgraph.addNode(target);
//     for (let y of tempChildren) {
//         testgraph.addEdge(target, y);
//     }
// }

// testingAddingToList();

// Testing
// console.log(createBoard());
// console.log(createBoard().length);
