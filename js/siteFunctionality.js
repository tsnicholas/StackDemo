import $ from "jQuery";
import { StackNode } from "./nodeModel";

const stack = new StackNode();
const altHotKeyMap = new Map();
altHotKeyMap.set("o", popFromStack);
altHotKeyMap.set("e", peekFromStack);
altHotKeyMap.set("s", getStackSize);
altHotKeyMap.set("m", checkIsEmpty);
const ctrlHotKeyMap = new Map();
ctrlHotKeyMap.set("c", clearStack);
ctrlHotKeyMap.set("l", clearLogs);

$("#pushButton").on("click", pushToStack);
$("#popButton").on("click", popFromStack);
$("#peekButton").on("click", peekFromStack);
$("#sizeButton").on("click", getStackSize);
$("#emptyButton").on("click", checkIsEmpty);

$("#popOption").on("click", popFromStack);
$("#peekOption").on("click", peekFromStack);
$("#sizeOption").on("click", getStackSize);
$("#isEmptyOption").on("click", checkIsEmpty);
$("#clearStackOption").on("click", clearStack);
$("#clearLogOption").on("click", clearLogs);

document.addEventListener('keydown', function(event) {
    if(event.altKey && event.ctrlKey && ctrlHotKeyMap.has(event.key)) {
        ctrlHotKeyMap.get(event.key)();
    }

    if(event.altKey && altHotKeyMap.has(event.key)) {
        altHotKeyMap.get(event.key)();
    }
});

function pushToStack() {
    try {
        const input = $("#inputNumber").val();
        log(`Pushing ${input} to stack...`);
        stack.push(Number(input));
        printStack();
    } catch(error) {
        alert(`Error: ${error}`);
    }
}

function log(line) {
    var previousLogs = $("#logs").val();
    $("#logs").val(`${previousLogs}\n${line}`);
}

function printStack() {
    const stackContainer = $("#stack");
    if(stack.isEmpty()) {
        log("Stack is Empty.");
        stackContainer.val("");
        return;
    }

    var current = stack.top;
    var output = "";
    while(current !== null) {
        output = output.concat([`${current.data} `]);
        current = current.next;
    }
    stackContainer.val(output);
}

function popFromStack() {
    try {
        const poppedValue = stack.pop();
        log(`Popped ${poppedValue} from the stack.`);
        printStack();
    } catch(error) {
        alert(`Error: ${error}`);
    }
}

function peekFromStack() {
    try {
        const peekedValue = stack.peek();
        log(`${peekedValue} is on the top of the stack.`);
    } catch(error) {
        alert(`Error: ${error}`);
    }
}

function getStackSize() {
    try {
        log(`There are ${stack.size} values on the stack.`);
    } catch(error) {
        alert(`Error: ${error}`);
    }   
}

function checkIsEmpty() {
    try {
        log(`Stack is ${stack.isEmpty() ? "" : "not "}empty`);
    } catch(error) {
        alert(`Error: ${error}`);
    }
}

function clearStack() {
    try {
        log(`Clearing stack...`);
        stack.top = null;
        printStack();
    } catch(error) {
        alert(`Error: ${error}`);
    }
}

function clearLogs() {
    try {
        $("#logs").val("");
    } catch(error) {
        alert(`Error: ${error}`);
    }
}

