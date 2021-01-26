import { LOGIN, SET_USER, CLEAR } from '../actoins/user';

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
}

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
        default:
            return state;
    }
}

export default userReduser;