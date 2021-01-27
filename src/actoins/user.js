import UserApi from '../api/UserApi';

export const LOGIN = 'LOGIN';
export const SET_USER = 'SET_USER';
export const CLEAR = 'CLEAR';
export const LOGIN_ERROR = 'LOGIN_ERROR';

export const setUser = user => ({
    type: SET_USER,
    user,
});

export const clearUser = () => ({ type: CLEAR });

export const login = (authorized) => ({
    type: LOGIN,
    authorized,
});

export const loginError = (status, errorData) => ({
    type: LOGIN_ERROR,
    errorData, 
    status,
});

export const loginFetch = (username, password) => (dispatch) => (
    UserApi.login(username, password).then(responce => {
        const { status, data } = responce;
        if (status === 200) {
            dispatch(setUser(data));
            dispatch(login(true));
        } else {
            console.warn(status);
        }
    }).catch(error => {
        const { status, statusText } = error.request;
        dispatch(loginError(status, { msg: statusText }));
    })
);

export const createFetch = user => dispatch => (
    UserApi.create(user).then(responce => {
        const { status, data } = responce;
        if (status === 200) {
            dispatch(setUser(data));
        }
    }).catch(error => {
        console.log(error);
    })
);
export const updateFetch = user => dispatch => (
    UserApi.update(user).then(responce => {
        const { status, data } = responce;
        if (status === 200) {
            dispatch(setUser(data));
        }
    }).catch(error => {
        console.log(error);
    })
);

export const logoutFetch = (dispatch) => (
    UserApi.logout().then(responce => {
        const { status } = responce;
        if (status === 204) {
            dispatch(clearUser());
        }
    }).catch(error => {
        console.error(error);
    })
);