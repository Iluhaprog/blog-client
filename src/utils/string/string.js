export function getNameAndExt(name) {
  const subs = name.split('.');
  return [
    subs.slice(0, subs.length - 1).join('.'),
    subs[subs.length - 1],
  ];
}
