import { getUniqueName } from '../string';

test('Get unique name should return unique name', () => {
    const name = 'name.ext'
    const s1 = getUniqueName(name);
    const s2 = getUniqueName(name);
    expect(s1).not.toBe(expect.stringMatching(s2));
});