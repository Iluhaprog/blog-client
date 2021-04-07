import {getNameAndExt, getDateAndTime} from './string';

test('should return name and ext for string name.ext', () => {
  const name = 'TEST_NAME.TEST';
  const ext = 'TEST_EXT';
  const fullName = `${name}.${ext}`;
  const [resName, resExt] = getNameAndExt(fullName);

  expect(resName).toBe(name);
  expect(resExt).toBe(ext);
});

test('should return date and time for string 2020.02.1T1:1:1.2', () => {
  const dateString = '2020-02-01T11:11:11.00Z';
  const [date, time] = getDateAndTime(dateString);

  expect(date).toBe('2020-02-01');
  expect(time).toBe('11:11:11');
});
