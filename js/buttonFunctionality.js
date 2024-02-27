import $ from "jQuery";
import { StackNode } from "./nodeModel";

const stack = new StackNode();

$("#pushButton").on("click", () => {
    const input = $("#inputNumber").val();
    log(`Pushing ${input} to stack...`);
    stack.push(Number(input));
    printToStack();
});

$("#popButton").on("click", () => {
    const poppedValue = stack.pop();
    log(`Popped ${poppedValue} from the stack.`);
    printToStack();
});

$("#peekButton").on("click", () => {
    const peekedValue = stack.peek();
    log(`${peekedValue} is on the top of the stack.`);
});

$("#sizeButton").on("click", () => {
    log(`There are ${stack.size} values on the stack.`);
});

$("#emptyButton").on("click", () => {
    log(`The stack is ${stack.isEmpty() ? "" : "not "}empty`);
});

function log(line) {
    var previousLogs = $("#logs").val();
    $("#logs").val(`${previousLogs}\n${line}`);
}

function printToStack() {
    $("#stack").val(stack.display());
}
