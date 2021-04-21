import {getEntityDataByLang, updateEntityByLang} from '../data';

test('Should get data from entity', () => {
  const [title1, title2] = ['t1', 't2'];
  const [en, ru] = ['en', 'ru'];
  const id = 1;
  const object = {
    id,
    data: [
      { title: title1, locale: { name: ru }},
      { title: title2, locale: { name: en }},
    ],
  };

  const enData = getEntityDataByLang(object, en, 'data');
  const ruData = getEntityDataByLang(object, ru, 'data');

  expect(ruData.title).toBe(title1);
  expect(enData.title).toBe(title2);
});

test('Should update entity data', () => {
  const [en, ru] = ['en', 'ru'];
  const entity = {
    data: [
      {
        title: '',
        locale: { name: ru },
      },
      {
        title: '',
        locale: { name: en },
      },
    ]
  };
  const data = {
    id: 1,
    title: 'updatedTitle',
  };
  const updatedEntity = updateEntityByLang({
    entity,
    data,
    lang: ru,
    field: 'data',
    getFields: (data) => ({
      title: data.title,
    })
  });

  expect(updatedEntity.data[0].title).toBe(data.title);
  expect(updatedEntity.data[1].title).toBe('');
});
