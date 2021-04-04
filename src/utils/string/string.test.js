import {getNameAndExt} from './string';

test('should return name and ext for string name.ext', () => {
  const name = 'TEST_NAME.TEST';
  const ext = 'TEST_EXT';
  const fullName = `${name}.${ext}`;
  const [resName, resExt] = getNameAndExt(fullName);

  expect(resName).toBe(name);
  expect(resExt).toBe(ext);
});
