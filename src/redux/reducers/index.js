import { combineReducers } from 'redux';
import loginReducer from './LoginReducer/loginReducer';
import registerReducer from './RegisterReducer/registerReducer';
import verifyReducer from './VerifyRegristrationReducer/verifyRegistrationReducer';
import resetPasswordReducer from './resetPasswordReducer/resetpasswordreducer';
import newPasswordReducer from './newPasswordReducer/newPasswordreducer';
import addCommentReducer from './CommentReducers/addCommentReducer';
import allCommentsReducer from './CommentReducers/allCommentsReducer';

const rootReducer = combineReducers({
  login: loginReducer,
  register: registerReducer,
  verifyUser: verifyReducer,
  resetPassword: resetPasswordReducer,
  newPassword: newPasswordReducer,
  addComment: addCommentReducer,
  getComments: allCommentsReducer,
});

export default rootReducer;
