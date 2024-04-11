import { createBoard } from "./board.mjs";
import { possibleMoves, checkValidMoves } from "./moves.mjs";
import { newNode, addChildren } from "./node.mjs";


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
        console.log("found");
        board = board.filter((filtBoard) => filtBoard != x);
        
      };
    };
    console.log(board);
    return board;
  };


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
let possMoves = possibleMoves(0,0);
let validmove = checkValidMoves(possMoves);
addChildren(testRoot, validmove);
console.log(testRoot);
console.log(testRoot.children[0]);
removeMove(testRoot.value[0], testRoot.value[1]);

for (let x of testRoot.children) {
    let tempMoves = possibleMoves(x.value[0], x.value[1]);
    
    let tempValid = checkValidMoves(tempMoves, board);
    console.log(tempValid);
    addChildren(x, tempValid);
    x.parents.push(testRoot.value);
};
removeMove(testRoot.children[0].value[0], testRoot.children[0].value[1]);

for (let x of testRoot.children[0].children) {
    let tempMoves = possibleMoves(x.value[0], x.value[1]);
    
    let tempValid = checkValidMoves(tempMoves, board);
    console.log(tempValid);
    addChildren(x, tempValid);
    x.parents.push(testRoot.children[0].parents);
};

removeMove(testRoot.children[0].children[0].value[0], testRoot.children[0].children[0].value[1]);
for (let x of testRoot.children[0].children[0].children) {
    let tempMoves = possibleMoves(x.value[0], x.value[1]);
    
    let tempValid = checkValidMoves(tempMoves, board);
    console.log(tempValid);
    addChildren(x, tempValid);
    x.parents.push(testRoot.children[0].children[0].parents);
};

console.log(board.length);

console.log(testRoot);
console.log(testRoot.children[0]);
console.log(testRoot.children[0].children[0]);
console.log(testRoot.children[0].children[0].children[0]);
console.log(testRoot.children[0].parents);

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
