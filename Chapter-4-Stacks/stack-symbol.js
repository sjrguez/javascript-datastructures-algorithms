const _items = Symbol('stackItems'); //{1}
class Stack {
	constructor () {
		this[_items] = []; //{2}
	}
//Stack methods

push(element) {
    this[_items].push(element);
  }

  pop() {
    return this[_items].pop();
  }

  peek() {
    return this[_items][this[_items].length - 1];
  }

  isEmpty() {
    return this[_items].length === 0;
  }

  size() {
    return this[_items].length;
  }

  clear() {
    this[_items] = [];
  }

  print() {
    console.log(this.toString());
  }

  toString() {
    return this[_items].toString();
  }
}
const stack = new Stack();
stack.push(5);
stack.push(8);


let objectSymbols = Object.getOwnPropertySymbols(stack);
console.log('Resultado', objectSymbols.length); // Resultado 1
console.log('Resultado', objectSymbols); // Resultado = [Symbol()]
console.log('Resultado', objectSymbols[0]); // Resultado =  Symbol()
stack[objectSymbols[0]].push(1);
stack.print(); //Resultado = 5, 8, 1