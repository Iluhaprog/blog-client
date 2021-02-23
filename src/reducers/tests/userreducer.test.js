import UserReducer from '../UserReducer';
import { 
    login, 
    setUser, 
    clearUser, 
    loginError, 
    setFetch,
    setAdminInfo,
} from '../../actoins/user';

const initUserState = {
    avatarImage: '',
    firstName: '',
    lastName: '',
    username: '',
    bio: '',
    email: '',
    password: '',
    skills: '',
    confirmed: false,
    authorized: false,
    status: 0,
    isFetch: false,
    errorData: {},
    adminInfo: {},
}

describe('Test for user reduser', () => {
    test('Should return init state', () => {
        expect(UserReducer(undefined, {})).toEqual(initUserState);
    });

    test('Should handle SET_ADMIN_INFO action', () => {
        expect(UserReducer(initUserState, setAdminInfo({ id: 1 }))).toEqual({
            ...initUserState,
            adminInfo: {
                id: 1,
            },
        })
    });

    test('Should handle SET_USER', () => {
        const user = {
            ...initUserState,
            username: 'ilyaprog',
            confirmed: true,
        };
        expect(UserReducer(initUserState, setUser(user))).toEqual(user);
    });

    test('Should handle LOGIN', () => {
        const user = {
            ...initUserState,
            authorized: true,
        };
        expect(UserReducer(initUserState, login(true))).toEqual(user);
    });

    test('Should handle CLEAR', () => {
        expect(UserReducer(initUserState, clearUser())).toEqual(initUserState);
    });

    test('Should handle LOGIN_ERROR', () => {
        expect(UserReducer(initUserState, loginError(403, {msg: ''}))).toEqual({
            ...initUserState,
            status: 403,
            errorData: {msg: ''},
        });
    });

    test('Should handle SET_USER_FETCH', () => {
        expect(UserReducer(initUserState, setFetch(true))).toEqual({
            ...initUserState,
            isFetch: true,
        });
    });
});