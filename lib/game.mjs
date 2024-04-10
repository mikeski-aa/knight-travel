// this is where bulk of the game logic should live?

// create a node
// inputValue = coordinates we are moving to or starting at - i.e 0,0;
// parent value - if present - value of the parent node - maybe store as an array??
// children -

const newNode = (inputValue, parentValue, inputChildren) => {
    let value = inputValue;
    let parents = [];
    let children = inputChildren;
    if (parentValue) {
        parents.push(parentValue);
    }
         
    return {
        value,
        parents,
        children
    }
};

export { newNode }