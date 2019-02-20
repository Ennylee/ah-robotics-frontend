
import { fork, all } from 'redux-saga/effects';
import loginWatcher from './LoginSaga/loginSaga';
import watchRegister from './RegisterSaga/RegisterSaga';
import watchVerify from './VerifyRegistrationSaga/VerifyRegistrationSaga';
import watchResetPassword from './resetPasswordSaga/resetPassword';
import watchNewPassword from './newPasswordSaga/newPassword';
import addCommentWatcher from './CommentSaga/addCommentSaga';
import getCommentsWatcher from './CommentSaga/getCommentsSaga';
// import updateCommentsWatcher from './CommentSaga/updateCommentS  aga';
// import deleteCommentsWatcher from './CommentSaga/deleteCommentSaga';
export default function* rootSaga() {
  yield all([
    fork(loginWatcher),
    fork(watchRegister),
    fork(watchVerify),
    fork(watchResetPassword),
    fork(watchNewPassword),
    fork(addCommentWatcher),
    fork(getCommentsWatcher),
    // fork(updateCommentsWatcher),
    // fork(deleteCommentsWatcher),
  ]);
}
