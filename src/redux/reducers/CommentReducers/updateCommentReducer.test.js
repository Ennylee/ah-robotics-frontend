import reducer from './updateCommentReducer';
import {
  UPDATE_COMMENT_START,
  UPDATE_COMMENT_SUCCESS,
  UPDATE_COMMENT_FAIL,
} from '../../actions/CommentActions/types';

const comment = {
  body: 'This is an article comment',
};

describe('Update Comment Reducer Test', () => {
  it('should return the initial state', () => {
    expect(reducer(undefined, {}))
      .toEqual({
        comment: {},
        errors: {},
        isUpdating: false,
      });
  });

  it('should handle DELETE_COMMENT_START', () => {
    expect(
      reducer([], { type: UPDATE_COMMENT_START, payload: comment }),
    ).toEqual({
      isUpdating: true,
    });
  });

  it('should handle DELETE_COMMENT_SUCCESS', () => {
    expect(
      reducer([], { type: UPDATE_COMMENT_SUCCESS }),
    ).toEqual({
      isUpdating: false,
    });
  });

  it('should handle DELETE_COMMENT_FAIL', () => {
    expect(
      reducer([], { type: UPDATE_COMMENT_FAIL }),
    ).toEqual({
      isUpdating: false,
    });
  });
});
