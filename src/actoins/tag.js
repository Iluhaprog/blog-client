import TagApi from '../api/TagApi';

export const SET_TAGS = 'SET_TAGS';
export const ADD_TAG = 'ADD_TAG';

export const setTags = tags => ({
    type: SET_TAGS,
    tags,
});

export const addTag = tag => ({
    type: ADD_TAG,
    tag,
});

export const addTagFetch = tag => dispatch => (
    TagApi.create(tag).then(responce => {
        const { status, data } = responce;
        if (status === 200) {
            dispatch(addTag(data));
        }
    }).catch(error => console.error(error))
);

export const getAllFetch = () => dispatch => (
    TagApi.getAll().then(responce => {
        const { status, data } = responce;
        if (status === 200) {
            dispatch(setTags(data));
        }
    }).catch(error => console.error(error))
);