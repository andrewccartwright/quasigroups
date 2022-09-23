type Loop= number[][];
type LoopArray = number[][][];

const loop1Order1 = [
    [0]
]

const loopsOrder1 = [
    loop1Order1
]

const loop1Order2 = [
    [0,1],
    [1,0]
]

const loopsOrder2 = [
    loop1Order2
]

const loop1Order3 = [
    [0,1,2],
    [1,2,0],
    [2,0,1]
]

const loopsOrder3 = [
    loop1Order3
]

const loop1Order4 = [
    [0,1,2,3],
    [1,3,0,2],
    [2,0,3,1],
    [3,2,1,0]
]

const loop2Order4 = [
    [0,1,2,3],
    [1,0,3,2],
    [2,3,0,1],
    [3,2,0,1]
]

const loopsOrder4 = [
    loop1Order4,
    loop2Order4
]

const loop1: Loop = [
    [0,1,2,3,4],
    [1,0,3,4,2],
    [2,3,4,0,1],
    [3,4,1,2,0],
    [4,2,0,1,3]
]
const loop2: Loop = [
    [0,1,2,3,4],
    [1,0,3,4,2],
    [2,3,4,1,0],
    [3,4,0,2,1],
    [4,2,1,0,3]
]
const loop3: Loop = [
    [0,1,2,3,4],
    [1,0,3,4,2],
    [2,4,0,1,3],
    [3,2,4,0,1],
    [4,3,1,2,0]
]
const loop4: Loop = [
    [0,1,2,3,4],
    [1,0,3,4,2],
    [2,4,1,0,3],
    [3,2,4,1,0],
    [4,3,0,2,1]
]
const loop5: Loop = [
    [0,1,2,3,4],
    [1,2,0,4,3],
    [2,3,4,0,1],
    [3,4,1,2,0],
    [4,0,3,1,2]
]
const loop6: Loop = [
    [0,1,2,3,4],
    [1,2,3,4,0],
    [2,3,4,0,1],
    [3,4,0,1,2],
    [4,0,1,2,3]
]

const loopsOrder5: LoopArray = [
    loop1,
    loop2,
    loop3,
    loop4,
    loop5,
    loop6
]

const getLoops = (size: number): LoopArray => {
    switch(size) {
        case 1:
            return loopsOrder1;
        case 2:
            return loopsOrder2;
        case 3:
            return loopsOrder3;
        case 4:
            return loopsOrder4;
        case 5:
            return loopsOrder5;
        default:
            return loopsOrder5;
    }
}

export { getLoops }
export type {Loop, LoopArray}