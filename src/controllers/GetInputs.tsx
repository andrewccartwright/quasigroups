import type { Quasigroup, Permutation } from "./QuasigroupController";

const getInputs = (translation: boolean, size: number) => {
    const quasigroupInputs = Array.from(document.getElementById('quasigroup-table')!.getElementsByTagName('input'));
    const permut = translation ? Array.from(document.getElementById('translation-section')!.getElementsByTagName('input')): undefined;

    let elements: number[][] = [];
    let permutValues: Permutation = [];

    for (let i = 0; i < size * size; i+= size) {
        let row: number[] = [];
        for (let j = 0; j < size; j++) {
            row.push(Number(quasigroupInputs[i+j].value));
        }
        elements.push(row);
    }

    if(translation && permut != null) {
        for (let i = 0; i < size; i++) {
            permutValues.push(Number(permut[i].value));
        }
    }
    
    return [elements, permutValues];
}

export {getInputs}