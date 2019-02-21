import { combineReducers } from 'redux';
import loginReducer from './LoginReducer/loginReducer';
import registerReducer from './RegisterReducer/registerReducer';
import verifyReducer from './VerifyRegristrationReducer/verifyRegistrationReducer';
import userProfileReducer from './userProfileReducer/userProfileReducer';
import editProfileReducer from './editProfileReducer/editProfileReducer';

const rootReducer = combineReducers({
  login: loginReducer,
  register: registerReducer,
  verifyUser: verifyReducer,
  userProfile: userProfileReducer,
  editProfile: editProfileReducer,
});

export default rootReducer;
