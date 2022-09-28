import { capitalize, string } from './index';

test('Capitalize first letter of string', () => {
    expect(capitalize(string)).toBe('I want to win.');
})