class Stack { // Using object for the stack
	constructor() {
		this.count = 0;
		this.items = {};
	}
// methods
	push(element) {
		this.items[this.count] = element;
		this.count++;
	}

	size() {
		return this.count;
	}

	isEmpty() {
		return this.count === 0;
	}

	pop() {
		if (this.isEmpty()) { // 
			return undefined;
		}
		this.count--; // 
		const result = this.items[this.count]; // 
		delete this.items[this.count]; //
		return result; //
	}

	peek() {
		if (this.isEmpty()) {
			return undefined;
		}
		return this.items[this.count - 1];
	}
	clear() {
		this.items = {};
		this.count = 0;
	}


	toString() {
		if (this.isEmpty()) {
			return '';
		}
		let objString = `${this.items[0]}`; // Convert to string
		for (let i = 1; i < this.count; i++) { // 
			objString = `${objString},${this.items[i]}`; // concat by comma the next item
		}
		return objString;
	}
}
	const stack = new Stack();
	stack.push(5);
	stack.push(8);

	console.log(stack.toString(), "ẗo string method");
	

console.log(Object.getOwnPropertyNames(stack)); // 
console.log(Object.keys(stack)); // 
console.log(stack.items); //
