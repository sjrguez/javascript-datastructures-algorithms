class Stack { // Using the LIFO principle, the last in is the first out
    constructor() {
        this.items = []; // {1}
    }


    push(element) {
        this.items.push(element);
    }

    pop() {
        return this.items.pop();
    }

    
    peek() { // This method will return the item from the top of the stack
        return this.items[this.items.length - 1];
    }

    isEmpty() {
        return this.items.length === 0;
    }

    size() {
        return this.items.length;
    }
    
    clear() {
        this.items = [];
    }
}


const stack = new Stack();
console.log('is empty?\n',stack.isEmpty()); // output true

stack.push(5);
stack.push(8);

console.log('The item in the top is: ',stack.peek());

stack.push(11);

console.log(`Stack's size is: `,stack.size()); 
console.log('is now empty?\n',stack.isEmpty());

stack.push(15);


stack.pop();
stack.pop();
console.log(`The new stack's size is: `,stack.size());
