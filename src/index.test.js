import { 
    capitalize, 
    string, 
    reverseString,
    calculator,
    caesar,
    analyzeArray
 } from './index';

test('Capitalize first letter of string', () => {
    expect(capitalize(string)).toBe('I want to win.');
})
test('Reverse string!', () => {
    expect(reverseString(string)).toBe('.niw ot tnaw i');
})
test('Calculator functions', () => {
    expect(calculator.add(2, 3)).toEqual(5);
    expect(calculator.sub(5, 6)).toEqual(-1);
    expect(calculator.mul(5, 5)).toEqual(25);
    expect(calculator.div(9, 3)).toEqual(3);
})
test('Caesar cipher attempt', () => {
    expect(caesar('turn', 3)).toBe('wxuq');
    expect(caesar('zero', 5)).toBe('ejwt');
    expect(caesar('ab.c', 3)).toBe('de.f')
})
test('Array analysis', () => {
    expect(analyzeArray([3,9,4,1,8]).average).toEqual(5);
    expect(analyzeArray([3,9,4,1,8]).min).toEqual(1);
    expect(analyzeArray([3,9,4,1,8]).max).toEqual(9);
    expect(analyzeArray([3,9,4,1,8]).length).toEqual(5);
})