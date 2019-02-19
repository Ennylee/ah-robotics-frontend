import { combineReducers } from 'redux';
import loginReducer from './LoginReducer/loginReducer';
import registerReducer from './RegisterReducer/registerReducer';
import verifyReducer from './VerifyRegristrationReducer/verifyRegistrationReducer';
<<<<<<< HEAD
import resetPasswordReducer from './resetPasswordReducer/resetpasswordreducer';
import newPasswordReducer from './newPasswordReducer/newPasswordreducer';
=======
import userProfileReducer from './userProfileReducer/userProfileReducer';
>>>>>>> feb9a00... feat(profile): implement profile to root reducer

const rootReducer = combineReducers({
  login: loginReducer,
  register: registerReducer,
  verifyUser: verifyReducer,
<<<<<<< HEAD
  resetPassword: resetPasswordReducer,
  newPassword: newPasswordReducer,
=======
  userProfile: userProfileReducer,
>>>>>>> feb9a00... feat(profile): implement profile to root reducer
});

export default rootReducer;
