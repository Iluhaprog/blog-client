export function getNameAndExt(name) {
  const subs = name.split('.');
  return [
    subs.slice(0, subs.length - 1).join('.'),
    subs[subs.length - 1],
  ];
}

export function getDateAndTime(string) {
  const stringArr = string.split('T');
  const date = stringArr[0];
  const time = stringArr[1]?.split('.')[0];
  return [date, time];
}
