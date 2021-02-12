import * as array from '../util/array';
import { 
    SELECT_POST, 
    CLEAR_SELECTED_POST, 
    ADD_POST, 
    ADD_POSTS,
    CLEAR_POSTS, 
    UPDATE_POST, 
    DELETE_POST_FROM_ARRAY,
    ADD_FILES, 
    ADD_FILE, 
    DELETE_FILE, 
    SET_TOTAL,
    SET_TAGS,
    SET_DIR,
    SET_POST_FETCH,
} from '../actoins/post';

const initPostState = {
    selected: {
        title: '',
        description: '',
        text: '',
        preview: '',
        visible: false,
        date: '',
        directoryId: 0,
        Tags: [],
    },
    isFetch: false,
    dir: {},
    files: [],
    array: [],
    total: 0,
};

const postReduser = (state = initPostState, action) => {
    switch(action.type) {
        case SELECT_POST:
            const post = array.search(action.id, state.array);
            return {
                ...state,
                selected: post ? {...post} : {...state.selected},
            };
        case SET_DIR: 
            return {
                ...state,
                dir: {...action.dir},
            };
        case SET_TAGS:
            return {
                ...state,
                selected: {
                    ...state.selected,
                    Tags: [...state.selected.Tags, ...action.Tags],
                },
            };
        case SET_TOTAL:
            return {
                ...state,
                total: action.total,
            };
        case ADD_FILES:
            return {
                ...state,
                files: [...action.files],
            };
        case DELETE_FILE:
            return {
                ...state,
                files: array.deleteEl(action.id, state.files),
            };
        case ADD_FILE :
            return {
                ...state,
                files: state.files ? [...state.files, action.file] : [action.file],
            };
        case CLEAR_SELECTED_POST:
            return {
                ...state,
                selected: {...initPostState.selected}
            };
        case ADD_POSTS: {
            return {
                ...state,
                array: action.posts,
            };
        }
        case ADD_POST: {
            return {
                ...state,
                array: [...state.array, action.post],
            };
        }
        case CLEAR_POSTS:
            return {
                ...state,
                array: [],
            };
        case UPDATE_POST:
            return {
                selected: action.post,
                array: array.replace(action.post, state.array),
            };
        case DELETE_POST_FROM_ARRAY:
            return {
                ...state,
                array: array.deleteEl(action.id, state.array),
            };
        case SET_POST_FETCH:
            return {
                ...state,
                isFetch: action.isFetch,
            };
        default:
            return state;
    }
}

export default postReduser;