import React from "react";

const inputCheck = (inputs: HTMLInputElement[]): boolean => {
    let isValid: boolean = true;
    let regex = /[01234]{1}/;

    for (let i = 0; i < inputs.length; i++) {
        let value = inputs[i].value;
        if (value === '' || !value.match(regex)) {
            isValid = false;
            break;
        }
    }

    return isValid;
}


export {inputCheck};