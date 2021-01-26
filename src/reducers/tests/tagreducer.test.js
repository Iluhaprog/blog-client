import tagReducer from '../TagReducer';
import { setTags, addTag } from '../../actoins/tag';

describe('Test tag reducer', () => {
    test('Should return init state', () => {
        expect(tagReducer(undefined, {})).toEqual({ tags: [] });
    });

    test('Should handle ADD_TAG action', () => {
        const tag = { id: 1, title: 'TEST TITLE' };
        const beginState = { tags: [] };
        expect(tagReducer(beginState, addTag(tag))).toEqual({
            tags: [tag],
        });
    });

    test('Should handle SET_TAGS action', () => {
        const tags = [
            { id: 1, title: 'TEST TITLE 1' },
            { id: 2, title: 'TEST TITLE 2' }
        ];
        const beginState = { tags: [] };
        expect(tagReducer(beginState, setTags(tags))).toEqual({
            tags,
        });
    });
});