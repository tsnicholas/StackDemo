import $ from "jQuery";
import { StackNode } from "./nodeModel";

const stack = new StackNode();

$("#pushButton").on("click", () => {
    const input = $("inputNumber").val();
    stack.push(input);
});

$("#popButton").on("click", () => {
    stack.pop();
});

$("#peekButton").on("click", () => {
    stack.peek();
});

$("#sizeButton").on("click", () => {
    console.log(stack.size);
});

$("#emptyButton").on("click", () => {
    console.log(isEmpty());
});
