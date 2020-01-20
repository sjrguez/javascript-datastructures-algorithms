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
		if (this.isEmpty()) { // {1}
			return undefined;
		}
		this.count--; // {2}
		const result = this.items[this.count]; // {3}
		delete this.items[this.count]; // {4}
		return result; // {5}
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
}
	const stack = new Stack();
	stack.push(5);
	stack.push(8);

