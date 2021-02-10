import HomeApi from '../api/HomeApi';

export const SET_HOME = 'SET_HOME';

export const setHome = home => ({
    type: SET_HOME,
    home,
});

export const getHomeFetch = () => dispatch => (
    HomeApi.get().then(response => {
        const { status, data } = response;
        if (status === 200) {
            dispatch(setHome(data));
        }
    }).catch(error => console.error(error))
);

export const update = home => dispatch => (
    HomeApi.update(home).then(response => {
        const { status, data } = response;
        if (status === 200) {
            dispatch(setHome(data));
        }
    }).catch(error => console.error(error))
);

export const updatePreview = formData => dispatch => (
    HomeApi.updatePreview(formData).then(response => {
        const { status, data } = response;
        if (status === 200) {
            dispatch(setHome(data));
        }
    }).catch(error => console.error(error))
);