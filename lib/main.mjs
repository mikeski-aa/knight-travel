import { createBoard } from "./board.mjs";
import { possibleMoves, checkValidMoves } from "./moves.mjs";
import { newNode, addChildren } from "./node.mjs";

let testRoot = newNode([3,3]);
// testRoot.children = checkValidMoves(possibleMoves(0,0));
// addChildren(testRoot, checkValidMoves(possibleMoves(7,7)));
// console.log('////////////')
// console.log(testRoot.value);
// console.log(testRoot.parents);
// console.log(testRoot.children);

const graph = () => {
    let list = {};
    
    const addNode = (node) => {
        list[node] = [];
    }

    const addEdge = (fromNode, toNode) => {
        list[fromNode].push(toNode);
    }

    return {
        list,
        addNode,
        addEdge
    }

}

let testgraph = graph();

testgraph.addNode(testRoot.value);
let testgraphchildren = checkValidMoves(possibleMoves(testRoot.value[0],testRoot.value[1]));

for (let x of testgraphchildren) {
    testgraph.addEdge(testRoot.value, x);
}

function testingAddingToList(input) {
    let tempChildren = checkValidMoves(possibleMoves(testgraph.list['3,3'][0][0],testgraph.list['3,3'][0][1]));
    let target = testgraph.addNode(testgraph.list['3,3'][0]);
    console.log(target);
    testgraph.addNode(target);
    for (let y of tempChildren) {
        testgraph.addEdge(target, y);
    }
}

testingAddingToList();
console.log(testgraph.list);



// Testing
// console.log(createBoard());
// console.log(createBoard().length);