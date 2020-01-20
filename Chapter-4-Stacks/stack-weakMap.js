const items = new WeakMap(); // {1}
class Stack {
    constructor () {
        items.set(this, []); // {2}
    }
    // Methods
    push(element){
        
        const itemsData = items.get(this); // {3}
        itemsData.push(element);
        console.log(this);
    }
    pop(){
        const itemsData = items.get(this);
        const itemRemoved = s.pop();
        return itemRemoved;
    }
}

const stack = new Stack();
stack.push(5)
stack.push(5)