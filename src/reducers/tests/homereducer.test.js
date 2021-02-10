import homeReducer from '../HomeReducer';
import { setHome } from '../../actoins/home';

const initHomeState = {
    title: '',
    preview: '',
};

describe('Test home reducer', () => {
    test('Should return default state', () => {
        expect(homeReducer(undefined, {})).toEqual(initHomeState);
    });

    test('Should handel SET_HOME action', () => {
        const home = { id: 1, title: 'title', preview: ''};
        expect(homeReducer(initHomeState, setHome(home))).toEqual(home);
    });
});