class Node {
    data;
    next;
    
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}

class StackNode {
    top;
    size;

    constructor() {
        this.top = null;
        this.size = 0;
    }

    push(data) {
        if(typeof data !== "number") {
            throw new TypeError("input should be number.");
        }
        var newNode = new Node(data);
        newNode.next = this.top;
        this.top = newNode;
        this.size++;
    }

    pop() {
        if(this.isEmpty()) {
            console.log("Stack is Empty.");
            return -1;
        }
        var poppedElement = this.top.data;
        this.top = this.top.next;
        this.size--;
        return poppedElement;
    }

    isEmpty() {
        return this.top === null;
    }

    peek() {
        if(this.isEmpty()) {
            console.log("Stack is Empty.");
            return -1;
        }
        return this.top.data;
    }
}

module.exports = {Node, StackNode};
