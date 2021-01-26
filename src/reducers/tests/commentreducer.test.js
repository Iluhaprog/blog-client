import commentReducer from '../CommentReducer';
import { addComment, setComments, deleteComment } from '../../actoins/comment';

describe('Test for comment reducer', () => {
    test('Should return init state', () => {
        expect(commentReducer(undefined, {})).toEqual({ comments: [] });
    });

    test('Should handle ADD_COMMENT action', () => {
        const beginState = {
            comments: [],
        };
        const comment = { text: 'TEST TEXT' };
        expect(commentReducer(beginState, addComment(comment))).toEqual({
            comments: [comment],
        });
    });

    test('Should handle SET_COMMENTS action', () => {
        const beginState = {
            comments: [],
        };
        const comments = [{ text: 'TEST TEXT' }];
        expect(commentReducer(beginState, setComments(comments))).toEqual({
            comments,
        });
    });

    test('Should handle DELETE_COMMENT action', () => {
        const comments = [{ id: 1, text: 'TEST TEXT' }];
        const beginState = { comments };
        expect(commentReducer(beginState, deleteComment(1))).toEqual({
            comments: [],
        });
    });
});