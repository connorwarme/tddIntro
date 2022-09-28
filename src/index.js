const capitalize = (inputString) => {
    let letter = inputString.charAt(0).toUpperCase();;
    let copy = inputString.slice(1);
    let result = letter.concat(copy);
    return result;
}
const string = 'i want to win.';

export { capitalize, string };