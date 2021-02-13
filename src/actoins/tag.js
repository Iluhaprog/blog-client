import TagApi from '../api/TagApi';

export const INSERT_TAGS = 'INSERT_TAGS';
export const ADD_TAG = 'ADD_TAG';

export const setTags = tags => ({
    type: INSERT_TAGS,
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
    })
);

export const getAllFetch = () => dispatch => (
    TagApi.getAll().then(responce => {
        const { status, data } = responce;
        if (status === 200) {
            dispatch(setTags(data));
        }
    })
);