import {
  ADD_COMMENT_START,
  ADD_COMMENT_SUCCESS,
  ADD_COMMENT_FAIL,
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
        ...state, ...action.payload, isCommenting: true,
      };
    }
    case ADD_COMMENT_SUCCESS: {
      return {
        ...state, ...action.payload, isCommenting: false,
      };
    }
    case ADD_COMMENT_FAIL: {
      return {
        ...state, ...action.payload, isCommenting: false,
      };
    }
    default:
      return state;
  }
};

export default addCommentReducer;
