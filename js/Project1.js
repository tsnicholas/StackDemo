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

    display() {
        if(this.isEmpty()) {
            console.log("Stack is Empty.");
            return;
        }
        var current = this.top;
        var output = "Stack Elements: ";
        while(current !== null) {
            output = output.concat([`${current.data} `]);
            current = current.next;
        }
        console.log(output);
        return output;
    }
}

const stack = new StackNode();

document.getElementById("pushButton").addEventListener("click", () => {
    const input = document.querySelector("#inputNumber").value;
    console.log(input);
    log(`Pushing ${input} to stack...`);
    stack.push(Number(input));
    printToStack();
});

document.getElementById("popButton").addEventListener("click", () => {
    const poppedValue = stack.pop();
    log(`Popped ${poppedValue} from the stack.`);
    printToStack();
});

document.getElementById("peekButton").addEventListener("click", () => {
    const peekedValue = stack.peek();
    log(`${peekedValue} is on the top of the stack.`);
});

document.getElementById("sizeButton").addEventListener("click", () => {
    log(`There are ${stack.size} values on the stack.`);
});

document.getElementById("emptyButton").addEventListener("click", () => {
    log(`The stack is ${stack.isEmpty() ? "" : "not "}empty`);
});

function log(line) {
    const logs = document.getElementById("logs");
    logs.textContent = logs.value += `\n${line}`;
}

function printToStack() {
    document.querySelector("#stack").textContent = stack.display();
}
