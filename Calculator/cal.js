let input = document.getElementById("inputbox");
let buttons = document.querySelectorAll("button");

let string = "";
let arr = Array.from(buttons);
let keyPressed = {};

arr.forEach(button => {
    button.addEventListener('click', (e) => {
        handleInput(e.target.innerHTML);
    });
});

document.addEventListener('keydown', (e) => {
    if (keyPressed[e.key]) return; // Ignore repeated key presses
    keyPressed[e.key] = true;
    if ((e.key >= '0' && e.key <= '9') || e.key === '.' || e.key === '+' || e.key === '-' || e.key === '*' || e.key === '/') {
        handleInput(e.key);
    } else if (e.key === 'Enter' || e.key === '=') {
        handleInput('=');
    } else if (e.key === 'Backspace') {
        handleInput('DEL');
    } else if (e.key.toLowerCase() === 'a' && e.ctrlKey) { 
        handleInput('AC');
        e.preventDefault();
    }
});

document.addEventListener('keyup', (e) => {
    keyPressed[e.key] = false; 
});
document.addEventListener('keyup', (e) => {
    keyPressed[e.key] = false; 
});

function handleInput(value) {
    if (value == '=') {
        try {
            string = eval(string);
            input.value = string;
        } catch {
            input.value = "Error";
            string = "";
        }
    } else if (value == 'AC') {
        string = '';
        input.value = string;
    } else if (value == 'DEL') {
        string = string.substring(0, string.length - 1);
        input.value = string;
    } else if (value == '√') {
        try {
            string = Math.sqrt(eval(string)).toString();
            input.value = string;
        } catch {
            input.value = "Error";
            string = "";
        }
    } else if (value == 'X**2') {
        try {
            string = Math.pow(eval(string), 2).toString();
            input.value = string;
        } catch {
            input.value = "Error";
            string = "";
        }
    } else {
        string += value;
        input.value = string;
    }
}
