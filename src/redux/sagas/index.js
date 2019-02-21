
import { fork, all } from 'redux-saga/effects';
import loginWatcher from './LoginSaga/loginSaga';
import watchRegister from './RegisterSaga/RegisterSaga';
import watchVerify from './VerifyRegistrationSaga/VerifyRegistrationSaga';
import watchuserProfile from './UserProfileSaga/UserProfileSaga';
import watchNewPassword from './newPasswordSaga/newPassword';
import watchResetPassword from './resetPasswordSaga/resetPassword';

export default function* rootSaga() {
  yield all([
    fork(loginWatcher),
    fork(watchRegister),
    fork(watchVerify),
    fork(watchResetPassword),
    fork(watchNewPassword),
    fork(watchuserProfile),
  ]);
}
