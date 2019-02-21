
import { fork, all } from 'redux-saga/effects';
import loginWatcher from './LoginSaga/loginSaga';
import watchRegister from './RegisterSaga/RegisterSaga';
import watchVerify from './VerifyRegistrationSaga/VerifyRegistrationSaga';
import watchuserProfile from './UserProfileSaga/UserProfileSaga';
import watchuserProfilePatch from './UserProfileSaga/UserProfilePatchSaga';

export default function* rootSaga() {
  yield all([
    fork(loginWatcher),
    fork(watchRegister),
    fork(watchVerify),
    fork(watchuserProfile),
    fork(watchuserProfilePatch),
  ]);
}
