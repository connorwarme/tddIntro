const capitalize = (inputString) => {
    let letter = inputString.charAt(0).toUpperCase();;
    let copy = inputString.slice(1);
    let result = letter.concat(copy);
    return result;
}
const string = 'i want to win.';
const reverseString = (input) => {
    let output = [""];
    for (let i = (input.length - 1); i>=0; i--) {
        let letter = input.slice(i, i+1);
        output[0] += letter;
    }
    return output[0].toString();
}
reverseString(string);

const objCreate = () => {
    let add = function(a, b) { return (a+b) };
    let sub = function(a, b) { return (a-b) };
    let mul = function(a, b) { return (a*b) };
    let div = function(a, b) { return (a/b) };
    return {add, sub, mul, div}
}
const calculator = objCreate();

const alpha = "abcdefghijklmnopqrstuvwxyz";

const caesar = (string, shift) => {
    let cipher = [""];
    const find = (letter) => {
        if (alpha.indexOf(letter) == -1) {
            return -1;
        } else {
            return alpha.indexOf(letter);
        }
    }
    const shiftLetter = (letter, index, shift) => {
        if (index != -1) {
            let number = index + shift;
            if (number > 25) {
                number = number - 26;
            }
            return alpha.charAt(number);
        } else {
            return letter;
        }
    }
    for (let i = 0; i<string.length; i++) {
        let single = string.charAt(i);
        let index = find(single);
        console.log(`index: ${index}`);
        let shifted = shiftLetter(single, index, shift);
        console.log(`shifted: ${shifted}`);
        cipher[0] += shifted;
    }
    console.log(cipher[0].toString());
    return cipher[0].toString();
}

console.log(caesar('ab.c', 3));

const avg = (array) => {
    let sum = array.reduce((prev, cur) => prev + cur, 0);
    return Math.floor(sum/array.length);
}
const minimum = (array) => {
    let copy = array.sort((a, b) => a - b);
    return copy[0];
}
const maximum = (array) => {
    let copy = array.sort((a, b) => b - a);
    console.log(copy);
    let copy2 = array.sort((a, b) => a + b);
    console.log(copy2);
    return copy2[0];
}

const analyzeArray = (array) => {
    let average = avg(array);
    let min = minimum(array);
    let max = maximum(array);
    let length = array.length;
    return {average, min, max, length}
}
export { capitalize, string, reverseString, calculator, caesar, analyzeArray };