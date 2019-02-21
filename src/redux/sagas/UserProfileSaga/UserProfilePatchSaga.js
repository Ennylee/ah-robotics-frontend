import { call, put, takeEvery } from 'redux-saga/effects';
import axios from 'axios';
import * as types from '../../actions/userProfileActions/types';

function* userProfilePatchSaga({ payload }) {
  const { username, token, data } = payload;

  const form = new FormData();
  form.append('image', data.image);
  form.append('bio', data.bio);
  const config = {
    headers: {
      Authorization: `token ${token}`,
    },
  };
  try {
    const response = yield call(axios.patch, `https://ah-robotics-staging.herokuapp.com/api/v1/profiles/${username}/`, form, config);
    yield put({
      type: types.PROFILE_PATCH_SUCCESS,
      payload: response.data,
    });
  } catch (err) {
    yield put({
      type: types.PROFILE_PATCH_ERROR,
      payload: { errors: err.response },
    });
  }
}

function* watchuserProfilePatch() {
  yield takeEvery(
    types.PROFILE_PATCH_START, userProfilePatchSaga,
  );
}

export default watchuserProfilePatch;
