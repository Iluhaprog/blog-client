import { base64Encode } from '../base64';

test('Encode string to base64', () => {
    const encodedString = 'dXNlcm5hbWU6cGFzc3dvcmQ=';
    const string = 'username:password';
    expect(base64Encode(string)).toBe(encodedString);
});