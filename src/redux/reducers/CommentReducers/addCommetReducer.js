import {
  ADD_COMMENT_START,
  ADD_COMMENT_SUCCESS,
  ADD_COMMENT_FAIL, GET_COMMENTS_SUCCESS, GET_COMMENTS_FAIL,
} from '../../actions/CommentActions/types';

const initialState = {
  comment: {},
  errors: {},
  isCommenting: false,
};


const addCommentReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_COMMENT_START: {
      return {
        ...state, isCommenting: true,
      };
    }
    case ADD_COMMENT_SUCCESS: {
      return {
        ...state, isCommenting: false,
      };
    }
    case ADD_COMMENT_FAIL: {
      return {
        ...state, isCommenting: false,
      };
    }
    default:
      return state;
  }
};

export default addCommentReducer;
