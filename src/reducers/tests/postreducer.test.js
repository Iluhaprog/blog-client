import PostReducer from '../PostReducer';
import { 
    selectPostById, 
    clearSelectedPost, 
    deletePostById, 
    setTags,
    addPosts, 
    addPost, 
    clearPosts, 
    updatePost,
    addFiles,
    addFile, 
    deleteFile, 
    setTotal
} from '../../actoins/post';

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
    files: [],
    array: [],
    total: 0,
};

describe('Test for post reduser', () => {
    test('Should return init state', () => {
        expect(PostReducer(undefined, {})).toEqual(initPostState);
    });

    test('Should handle SET_TAGS action', () => {
        const tags = [{ id: 1, title: 'test'}];
        expect(PostReducer(initPostState, setTags(tags))).toEqual({
            ...initPostState,
            selected: {
                ...initPostState.selected,
                Tags: [...tags]
            }
        });
    });

    test('Should handle SELECT_POST action', () => {
        const post = {...initPostState.selected, title: 'Init post', id: 1};
        const beginState = {
            ...initPostState,
            array: [post],
        }
        expect(PostReducer(beginState, selectPostById(1))).toEqual({
            ...beginState,
            selected: {...post},
            array: [post]
        });
    });

    test('Should handle CLEAR_SELECTED_POST action', () => {
        const post = {...initPostState.selected, title: 'Init post', id: 1};
        const expectedState = {
            ...initPostState,
            array: [post],
        };
        const beginState = {
            selected: {...post},
            files: [],
            array: [post],
            total: 0,
        };
        expect(PostReducer(beginState, clearSelectedPost())).toEqual(expectedState);
    });

    test('Should handle ADD_POSTS action', () => {
        const posts = [{...initPostState.selected, title: 'In array'}];
        expect(PostReducer(initPostState, addPosts(posts))).toEqual({
            ...initPostState,
            array: posts,
        });
    });

    test('Should handle ADD_POST action', () => {
        const post = {...initPostState.selected, title: 'Added post', id: 1};
        expect(PostReducer(initPostState, addPost(post))).toEqual({
            ...initPostState,
            array: [post],
        });
    });

    test('Should handle CLEAR_POSTS action', () => {
        const post = {...initPostState.selected, title: 'Added post', id: 1};
        const beginState = {
            ...initPostState,
            array: [post],
        }
        expect(PostReducer(beginState, clearPosts())).toEqual(initPostState);
    });

    test('Should handle UPDATE_POST action', () => {
        const post = {...initPostState.selected, title: 'Added post', id: 1};
        const updatedPost = {...post, title: 'Updated post'};
        const beginState = {
            selected: post,
            array: [post],
        };
        const expectedState = {
            selected: updatedPost,
            array: [updatedPost],
        };
        expect(PostReducer(beginState, updatePost(updatedPost))).toEqual(expectedState);
    });

    test('Should handle DELETE_POST_FROM_ARRAY action', () => {
        const post = {...initPostState.selected, title: 'Added post', id: 1};
        const beginState = {
            ...initPostState,
            array: [post],
        };
        expect(PostReducer(beginState, deletePostById(1))).toEqual(initPostState);
    });

    test('Should handle ADD_FILES action', () => {
        const files = [{ name: 'file.ext' }];
        expect(PostReducer(initPostState, addFiles(files))).toEqual({
            ...initPostState,
            files,
        });
    });

    test('Should handle ADD_FILE action', () => {
        const file = { name: 'file.ext' };
        expect(PostReducer(initPostState, addFile(file))).toEqual({
            ...initPostState,
            files: [file],
        });
    });

    test('Should handle DELETE_FILE action', () => {
        const file = { id: 1, name: 'file.ext'};
        const beginState = {
            ...initPostState,
            files: [file],
        };
        expect(PostReducer(beginState, deleteFile(1))).toEqual(initPostState);
    });

    test('Should handle SET_TOTAL action', () => {
        const beginState = {
            ...initPostState,
        };
        expect(PostReducer(beginState, setTotal(10))).toEqual({
            ...beginState,
            total: 10,
        });
    });
});
