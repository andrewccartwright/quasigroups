import { getLoops } from './Loops';
import type {Loop, LoopArray} from './Loops';

type Quasigroup = number[][];
type Permutation = number[];
type PermutationArray = number[][];

//Helper functions
const generateAllPermutations = (arr: Permutation = [0,1,2,3,4]): PermutationArray => {
    
    let results = [];

    if(arr.length === 1) {
        results.push(arr);
    }

    for(let i = 0; i < arr.length; i++) {
        let firstNum = arr[i];
        let numsLeft = arr.slice(0,i).concat(arr.slice(i+1));
        let innerPermutations = generateAllPermutations(numsLeft);
        for(let j = 0; j < innerPermutations.length; j++) {
            results.push([firstNum, ...innerPermutations[j]]);
        }
    }
    return results;
}

const check = (loop: Loop, quasigroup: Quasigroup, permuts: PermutationArray): [boolean, Permutation] => {
    let same = false;

    let isomorphicPermut: Permutation = [1,1,1,1,1];

    permuts.forEach((permut, index) => {
        let test = QuasigroupController.performTranslation(quasigroup, permut);

        let results = test.filter((row, rowIndex) => {
            return row.filter((item, index) => {
                return item == loop[rowIndex][index];
            })
        })


        if (results && checkEquality(results, loop)) {
            same = true;
            isomorphicPermut = permut;
            // console.log('The quasigroup entered is isomorphic to loop', loop);
        }
    })

    return [same, isomorphicPermut];
}

const checkEquality = (permutedQuasigroup: Quasigroup, loop: Loop): boolean => {
    let equality = true;

    permutedQuasigroup.forEach((row, rowIndex) => {
        row.forEach((elem, index) => {
            if(elem !== loop[rowIndex][index]) {
                equality =  false;
            }
        })
    })

    return equality;
}

class QuasigroupController {
    quasigroup: Quasigroup;
    permut?: Permutation;
    static permutations: PermutationArray = generateAllPermutations();

    constructor(quasigroup: Quasigroup, permut?: Permutation) {
        this.quasigroup = quasigroup;
        if (permut != null) {
            this.permut = permut;
        }
    }

    static performTranslation(quasigroup: Quasigroup, permut: Permutation): Quasigroup {
        // console.log(new Array(5).fill(new Array(5).fill(1)));

        let temp: Quasigroup = quasigroup.map((row, index) => {
            return row.map((item, index) => {
                if(item === 0) {
                    return permut[0];
                }
                else if(item === 1) {
                    return permut[1];
                }
                else if(item === 2) {
                    return permut[2];
                }
                else if(item === 3) {
                    return permut[3];
                }
                else if(item === 4) {
                    return permut[4];
                }
            })
        }) as Quasigroup;

        if (temp != undefined) {
            return temp;
        }
        else {
            return [[]];
        }
    }

    checkIsomorphism(quasigroup: Quasigroup, size: number): [boolean, Loop, Permutation] {
        let elements = new Array(size).fill(1);

        elements = elements.map((item, index) => {
            return index;
        });

        const permuts = generateAllPermutations(elements);

        let loops = getLoops(size);

        let isomorphicLoop: Loop;
        let isomorphicPermut: Permutation;

        for (let i = 0; i < loops.length; i++) {
            let isoResult = check(loops[i], quasigroup, permuts);
            if(isoResult[0]) {
                isomorphicLoop = loops[i];
                isomorphicPermut = isoResult[1];
                return [true, isomorphicLoop, isomorphicPermut];
            }
        }

        return [false, loops[0], permuts[0]];
    }

}

export { QuasigroupController }

export type {Quasigroup, Loop, Permutation, LoopArray, PermutationArray}