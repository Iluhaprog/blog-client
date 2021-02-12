import { 
    LOGIN, 
    SET_USER, 
    CLEAR, 
    LOGIN_ERROR,
    SET_USER_FETCH,
} from '../actoins/user';

const defaultUserState = {
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
};

const userReduser = (state = defaultUserState, action) => {
    switch(action.type) {
        case SET_USER:
            return {
                ...state,
                ...action.user,
            };
        case LOGIN:
            return {
                ...state,
                authorized: action.authorized,
            };
        case CLEAR:
            return {
                ...defaultUserState,
            };
        case LOGIN_ERROR:
            return {
                ...state,
                status: action.status,
                errorData: action.errorData,
            };
        case SET_USER_FETCH:
            return {
                ...state,
                isFetch: action.isFetch,
            };
        default:
            return state;
    }
}

export default userReduser;