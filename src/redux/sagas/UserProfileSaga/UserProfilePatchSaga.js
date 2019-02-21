import { call, put, takeEvery } from 'redux-saga/effects';
import axios from 'axios';
import * as types from '../../actions/userProfileActions/types';

function* userProfilePatchSaga({ payload }) {
  console.log(payload.token);
  const { username, token, data } = payload;

// test option
  const newDataNoImage = {};
  newDataNoImage.bio = data.bio;
  console.log(newDataNoImage, token);


  const config = {
    headers: {
      Authorization: `token ${token}`,
    },
  };
  try {
    const response = yield call(axios.patch, `https://ah-robotics-staging.herokuapp.com/api/v1/profiles/${username}/`, newDataNoImage, config);
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
