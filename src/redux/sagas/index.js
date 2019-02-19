import { fork, all } from 'redux-saga/effects';
import loginWatcher from './LoginSaga/loginSaga';
import socialAuthWatcher from './SocialAuth/SocialAuthSaga';

export default function* rootSaga() {
  yield all([
    fork(loginWatcher),
    fork(socialAuthWatcher),
  ]);
}
