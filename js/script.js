//function to switch between light and dark theme
function toggleTheme() {
    const metaColorScheme = document.querySelector('meta[name="color-scheme"]');
    const themeSwitch = document.getElementById('themeSwitch');

    if (themeSwitch.checked) {
        metaColorScheme.content = 'dark';
    } else {
        metaColorScheme.content = 'light';
    }
}

// Input

let input = document.getElementById("input");
let output = document.getElementById("output");
let inputType = document.getElementById("inputType");
let outputType = document.getElementById("outputType");
let inputTypeValue = inputType.value;
let outputTypeValue = outputType.value;
const resetBtn=document.getElementById("reset");


function reset(){
    inputTypeValue = 0;
    outputTypeValue = 0;
}

function conversion() {

    inputTypeValue = inputType.value;
    outputTypeValue = outputType.value;


    if (inputTypeValue === "meter") {
        if (outputTypeValue === "meter") {
            output.value = input.value;
        } else if (outputTypeValue === "kilometer") {
            output.value = input.value / 1000;
        } else if (outputTypeValue === "centimeter") {
            output.value = input.value * 100;
        } else if (outputTypeValue === "foot") {
            output.value = input.value * 3.28084;
        } else if (outputTypeValue === "inch") {
            output.value = input.value * 39.37;
        }
    } else if (inputTypeValue === "kilometer") {
        if (outputTypeValue === "meter") {
            output.value = input.value * 1000;
        } else if (outputTypeValue === "kilometer") {
            output.value = input.value;
        } else if (outputTypeValue === "centimeter") {
            output.value = input.value * 100000;
        } else if (outputTypeValue === "foot") {
            output.value = input.value * 3280.84;
        } else if (outputTypeValue === "inch") {
            output.value = input.value * 39370.1;
        }
    } else if (inputTypeValue === "centimeter") {
        if (outputTypeValue === "meter") {
            output.value = input.value / 100;
        } else if (outputTypeValue === "kilometer") {
            output.value = input.value / 100000;
        } else if (outputTypeValue === "centimeter") {
            output.value = input.value;
        } else if (outputTypeValue === "foot") {
            output.value = input.value / 30.48;
        } else if (outputTypeValue === "inch") {
            output.value = input.value / 2.54;
        }
    } else if (inputTypeValue === "foot") {
        if (outputTypeValue === "meter") {
            output.value = input.value / 3.28084;
        } else if (outputTypeValue === "kilometer") {
            output.value = input.value / 3280.84;
        } else if (outputTypeValue === "centimeter") {
            output.value = input.value * 30.48;
        } else if (outputTypeValue === "foot") {
            output.value = input.value;
        } else if (outputTypeValue === "inch") {
            output.value = input.value * 12;
        }
    } else if (inputTypeValue === "inch") {
        if (outputTypeValue === "meter") {
            output.value = input.value / 39.37;
        } else if (outputTypeValue === "kilometer") {
            output.value = input.value / 39370.1;
        } else if (outputTypeValue === "centimeter") {
            output.value = input.value * 2.54;
        } else if (outputTypeValue === "foot") {
            output.value = input.value / 12;
        } else if (outputTypeValue === "inch") {
            output.value = input.value;
        }
    }
}
