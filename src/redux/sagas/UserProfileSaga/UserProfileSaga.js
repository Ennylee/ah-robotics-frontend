import { call, put, takeEvery } from 'redux-saga/effects';
import axios from 'axios';
import * as types from '../../actions/userProfileActions/types';

function* userProfileSaga({ username }) {
  try {
    const response = yield call(axios.get, `https://ah-robotics-staging.herokuapp.com/api/v1/profile/${username.username}/`);
    console.log(response.data)
    yield put({
      type: types.PROFILE_DATA,
      payload: { profile: response.data.profile },
    });
  } catch (err) {
    yield put({
      type: types.PROFILE_ERROR,
      payload: { errors: err.response.data.errors },
    });
  }
}

function* watchuserProfile() {
  yield takeEvery(
    types.PROFILE_LOADING, userProfileSaga,
);
}

export default watchuserProfile;
