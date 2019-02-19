import { combineReducers } from 'redux';
import loginReducer from './LoginReducer/login.reducer';
import socialReducer from './SocialAuth/social.reducer';

const rootReducer = combineReducers({
  login: loginReducer,
  socialAuth: socialReducer,
});

export default rootReducer;
