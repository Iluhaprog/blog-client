export function getEntityDataByLang(
    entity = {},
    lang = '',
    field = '',
) {
  const data = entity[field];
  if (entity && data) {
    const currentData = data.find((el) => el.locale.name === lang);
    const tmp = {};
    Object.keys(entity).forEach((key) => {
      if (key !== field) {
        tmp[key] = entity[key];
      }
    });
    return Object.assign({}, {
      ...currentData,
      ...tmp,
    });
  }
  return entity;
}

export function updateEntityByLang({
  entity = {},
  data = {},
  lang = '',
  field = '',
  getFields = () => {},
}) {
  if (entity && data) {
    const updatedData = getFields(data);
    const updatedEntityData = entity[field].map((data) => {
      if (data.locale.name === lang) {
        return {
          ...data,
          ...updatedData,
        };
      }
      return data;
    });
    return {
      ...entity,
      [field]: updatedEntityData,
    };
  }
  return entity;
}
