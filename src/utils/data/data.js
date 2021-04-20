export function getEntityDataByLang(entity, lang, field) {
  const data = entity[field];
  const currentData = data.find((el) => el.locale.name === lang);
  const tmp = {};
  Object.keys(entity).forEach((key) => {
    if (key !== field) {
      tmp[key] = entity[key];
    }
  });
  return Object.assign({}, {
    ...tmp,
    ...currentData,
  });
}
