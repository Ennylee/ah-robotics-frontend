import * as types from './types';
import * as actions from './actions';

describe('Add Comment Actions Tests', () => {
  it('should dispatch ADD_COMMENT_START', () => {
    expect(actions.addArticleComment({}).type).toEqual(types.ADD_COMMENT_START);
  });
  it('should dispatch ADD_COMMENT_SUCCESS', () => {
    expect(actions.addCommentSuccess({}).type).toEqual(types.ADD_COMMENT_SUCCESS);
  });
  it('should dispatch ADD_COMMENT_FAIL', () => {
    expect(actions.addCommentFail({}).type).toEqual(types.ADD_COMMENT_FAIL);
  });
});


describe('Get Comments Actions Tests', () => {
  it('should dispatch GET_COMMENTS_START', () => {
    expect(actions.getArticleComments({}).type).toEqual(types.GET_COMMENTS_START);
  });
  it('should dispatch GET_COMMENTS_SUCCESS', () => {
    expect(actions.getCommentsSuccess({}).type).toEqual(types.GET_COMMENTS_SUCCESS);
  });
  it('should dispatch GET_COMMENTS_FAIL', () => {
    expect(actions.getCommentsFail({}).type).toEqual(types.GET_COMMENTS_FAIL);
  });
});


describe('Delete Comments Actions Tests', () => {
  it('should dispatch DELETE_COMMENT_START', () => {
    expect(actions.deleteComment({}).type).toEqual(types.DELETE_COMMENT_START);
  });
  it('should dispatch LOGIN_ERROR', () => {
    expect(actions.deleteCommentSuccess({}).type).toEqual(types.DELETE_COMMENT_SUCCESS);
  });
  it('should dispatch LOGIN_SUCCESS', () => {
    expect(actions.deleteCommentFail({}).type).toEqual(types.DELETE_COMMENT_FAIL);
  });
});