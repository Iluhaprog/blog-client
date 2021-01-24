import * as array from '../array';

describe('Test array util', () => {
    test('Should search object by id in array', () => {
        const arr = [
            { id: 1, name: 'name1' },
            { id: 2, name: 'name2' },
            { id: 3, name: 'name3' },
        ];
        const el = array.search(2, arr);
        
    });

    test('Should concat two arrays', () => {
        const arr1 = [1, 2, 3];
        const arr2 = [4, 5, 6];
        const newArr = array.concat(arr1, arr2);
    });

    test('Should replace element by id', () => {
        const arr = [
            { id: 1, name: 'name1' },
            { id: 2, name: 'name2' },
            { id: 3, name: 'name3' },
        ];
        const newArr = array.replace({id: 1, name: 'New name'}, arr);
    });

    test('Should delete object by id', () => {
        const arr = [
            { id: 1, name: 'name1' },
            { id: 2, name: 'name2' },
            { id: 3, name: 'name3' },
        ];
        const newArr = array.deleteEl(1, arr);
    });
});