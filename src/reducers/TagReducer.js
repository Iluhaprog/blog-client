import TagApi from '../api/TagApi';

const initTagState = {
    tags: [],
}

const SET_TAGS = 'SET_TAGS';
const ADD_TAG = 'ADD_TAG';

const tagReducer = (state = initTagState, action) => {
    switch(action.type) {
        case SET_TAGS:
            return {
                tags: [...action.tags],
            };
        case ADD_TAG:
            return {
                tags: [...state.tags, action.tag],
            }
        default:
            return state;
    }
}


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


export default tagReducer;