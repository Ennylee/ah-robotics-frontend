import {
  UPDATE_COMMENT_START,
  UPDATE_COMMENT_SUCCESS,
  UPDATE_COMMENT_FAIL,
} from '../../actions/CommentActions/types';

const initialState = {
  comment: {},
  errors: {},
  isUpdating: false,
};


const updateCommentReducer = (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_COMMENT_START: {
      return {
        ...state, isUpdating: true,
      };
    }
    case UPDATE_COMMENT_SUCCESS: {
      return {
        ...state, isUpdating: false,
      };
    }
    case UPDATE_COMMENT_FAIL: {
      return {
        ...state, isUpdating: false,
      };
    }
    default:
      return state;
  }
};

export default updateCommentReducer;
