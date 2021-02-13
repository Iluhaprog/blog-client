import homeReducer from '../HomeReducer';
import { 
    setHome,
    setHomeFetch,
} from '../../actoins/home';

const initHomeState = {
    title: '',
    preview: '',
    isFetch: false,
};

describe('Test home reducer', () => {
    test('Should return default state', () => {
        expect(homeReducer(undefined, {})).toEqual(initHomeState);
    });

    test('Should handel SET_HOME action', () => {
        const home = { 
            id: 1, 
            title: 'title',
            ...initHomeState,
        };
        expect(homeReducer(initHomeState, setHome(home))).toEqual(home);
    });
    test('Should handel SET_HOME action', () => {
        expect(homeReducer(initHomeState, setHomeFetch(true))).toEqual({
            ...initHomeState,
            isFetch: true,
        });
    });
});