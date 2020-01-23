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


    toString() {
	if (this.isEmpty()) {
		return '';
	}
	return this.items.toString()

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
console.log(`The new stack's size is: `,stack.size());

console.log(stack.toString(), "toString method")

// Converting from decimal to binary 
const decimalToBinary = (decimalNumber) => {
	const stack = new Stack();
	let decimalNum = decimalNumber;
	binaryString = ''
	while(decimalNum > 0 ) {

		const floorNumber = Math.floor(decimalNum % 2);
		stack.push(floorNumber);
		decimalNum =  Math.floor(decimalNum / 2);
	}

	while(!stack.isEmpty()) {
		binaryString += stack.pop()
	}

	return binaryString;
}




const binary = decimalToBinary(20)
const binary2 = decimalToBinary(233)
const binary3 = decimalToBinary(1000)

console.log(`20 to binary is: ${binary}`)
console.log(`233 to binary is: ${binary2}`)
console.log(`1000 to binary is: ${binary3}`)
