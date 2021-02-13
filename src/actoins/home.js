import HomeApi from '../api/HomeApi';

export const SET_HOME = 'SET_HOME';
export const SET_HOME_FETCH = 'SET_HOME_FETCH';

export const setHome = home => ({
    type: SET_HOME,
    home,
});

export const setHomeFetch = isFetch => ({
    type: SET_HOME_FETCH,
    isFetch,
});

export const getHomeFetch = () => dispatch => (
    HomeApi.get().then(response => {
        const { status, data } = response;
        if (status === 200) {
            dispatch(setHome(data));
        }
    }).catch(error => console.error(error))
);

export const update = home => dispatch => {
    dispatch(setHomeFetch(true));
    return HomeApi.update(home).then(response => {
        const { status, data } = response;
        if (status === 200) {
            dispatch(setHome(data));
            dispatch(setHomeFetch(false));
        }
    });
};

export const updatePreview = formData => dispatch => {
    dispatch(setHomeFetch(true));
    return HomeApi.updatePreview(formData).then(response => {
        const { status, data } = response;
        if (status === 200) {
            dispatch(setHome(data));
            dispatch(setHomeFetch(false));
        }
    });
};