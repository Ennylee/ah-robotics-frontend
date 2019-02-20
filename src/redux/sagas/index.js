
import { fork, all } from 'redux-saga/effects';
import loginWatcher from './LoginSaga/loginSaga';
import watchRegister from './RegisterSaga/RegisterSaga';
import watchVerify from './VerifyRegistrationSaga/VerifyRegistrationSaga';
<<<<<<< HEAD
import watchResetPassword from './resetPasswordSaga/resetPassword';
import watchNewPassword from './newPasswordSaga/newPassword';
=======
import watchuserProfile from './UserProfileSaga/UserProfileSaga';
>>>>>>> be489e0... feat(profile): implement user profile saga

export default function* rootSaga() {
  yield all([
    fork(loginWatcher),
    fork(watchRegister),
    fork(watchVerify),
<<<<<<< HEAD
    fork(watchResetPassword),
    fork(watchNewPassword),
=======
    fork(watchuserProfile)
>>>>>>> be489e0... feat(profile): implement user profile saga
  ]);
}
