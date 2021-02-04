import { INSERT_TAGS, ADD_TAG } from '../actoins/tag';

const initTagState = {
    tags: [],
}

const tagReducer = (state = initTagState, action) => {
    switch(action.type) {
        case INSERT_TAGS:
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

export default tagReducer;