import $ from "jQuery";
import { StackNode } from "./nodeModel";
import enData from "../lang/lang-en.json";
import cnData from "../lang/lang-cn.json";
import esData from "../lang/lang-es.json";

const stack = new StackNode();
const logsView = $("#logs");
const stackView = $("#stack");

const altHotKeyMap = new Map();
altHotKeyMap.set("p", pushToStack);
altHotKeyMap.set("o", popFromStack);
altHotKeyMap.set("e", peekFromStack);
altHotKeyMap.set("s", getStackSize);
altHotKeyMap.set("m", checkIsEmpty);
const ctrlHotKeyMap = new Map();
ctrlHotKeyMap.set("c", clearStack);
ctrlHotKeyMap.set("l", clearLogs);

// Buttons
$("#pushButton").on("click", pushToStack);
$("#popButton").on("click", popFromStack);
$("#peekButton").on("click", peekFromStack);
$("#sizeButton").on("click", getStackSize);
$("#emptyButton").on("click", checkIsEmpty);
// Menu Options
$("#pushOption").on("click", pushToStack);
$("#popOption").on("click", popFromStack);
$("#peekOption").on("click", peekFromStack);
$("#sizeOption").on("click", getStackSize);
$("#isEmptyOption").on("click", checkIsEmpty);
$("#clearStackOption").on("click", clearStack);
$("#clearLogOption").on("click", clearLogs);
// Hot Keys
document.addEventListener('keydown', function(event) {
    const keyPressed = event.key;
    if(event.altKey && event.ctrlKey && ctrlHotKeyMap.has(keyPressed)) {
        ctrlHotKeyMap.get(keyPressed)();
        return;
    }

    if(event.altKey && altHotKeyMap.has(keyPressed)) {
        altHotKeyMap.get(keyPressed)();
    }
});

function pushToStack() {
    const input = $("#inputNumber").val();
    const errorText = document.getElementById("errorText");
    if(input === undefined || input === "") {
        $("#inputNumber").addClass("errorInput");
        errorText.hidden = false;
        return;
    }
    errorText.hidden = true;
    try {
        log(`Pushing ${input} to stack...`);
        stack.push(Number(input));
        printStack();
    } catch(error) {
        alert(`Error: ${error}`);
    }
}

function log(line) {
    var previousLogs = logsView.val();
    logsView.val(`${previousLogs}\n${line}`);
}

function printStack() {
    if(stack.isEmpty()) {
        log("Stack is Empty.");
        stackView.val("");
        return;
    }

    var current = stack.top;
    var output = "";
    while(current !== null) {
        output = output.concat([`${current.data}\n`]);
        current = current.next;
    }
    stackView.val(output);
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
        logsView.val("");
    } catch(error) {
        alert(`Error: ${error}`);
    }
}

document.getElementById("enSetting").addEventListener("click", () => {translateWebsite(enData)});
document.getElementById("cnSetting").addEventListener("click", () => {translateWebsite(cnData)});
document.getElementById("esSetting").addEventListener("click", () => {translateWebsite(esData)});

function translateWebsite(translation) {
    try {
        Object.entries(translation.textContent).forEach((element) => {
            const [id, content] = element;
            console.log(`Id: ${id} Content: ${content}`);
            document.getElementById(id).textContent = content;
        });
        Object.entries(translation.dataIntro).forEach((element) => {
            const [id, content] = element;
            document.getElementById(id).setAttribute("data-intro", content);
        });
        Object.entries(translation.placeholder).forEach((element) => {
            const [id, content] = element;
            document.getElementById(id).setAttribute("placeholder", content);
        });
    } catch(error) {
        console.error(error);
    }
}

document.getElementById("boldCheckBox").addEventListener("change", () => {toggleClassOnViews("fw-bold")});
document.getElementById("italicCheckBox").addEventListener("change", () => {toggleClassOnViews("fst-italic")});
document.getElementById("underlineCheckBox").addEventListener("change", () => {toggleClassOnViews("text-decoration-underline")})

function toggleClassOnViews(toggledClass) {
    stackView.toggleClass(toggledClass);
    logsView.toggleClass(toggledClass);
}

document.getElementById("arial").addEventListener("click", () => {document.body.style.fontFamily = "Arial"});
document.getElementById("timesNewRoman").addEventListener("click", () => {document.body.style.fontFamily = "Times New Roman"});
document.getElementById("calibri").addEventListener("click", () => {document.body.style.fontFamily = "Calibri"})
