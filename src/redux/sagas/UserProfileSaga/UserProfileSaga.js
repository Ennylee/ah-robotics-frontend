import { call, put, takeEvery } from 'redux-saga/effects';
import axios from 'axios';
import * as types from '../../actions/userProfileActions/types';

function* userProfileSaga (payload) {
  const payloadData = payload.payload
  const { username } = payloadData
  const { token } = payloadData
  let config = {
    headers: {
      'Authorization': 'token ' + token
    }
  }
  try {
    const response = yield call(axios.get, `https://ah-robotics-staging.herokuapp.com/api/v1/profiles/${username}/`, config);
    yield put({
      type: types.PROFILE_DATA_SUCCESS,
      payload: response.data,
    });
  } catch (err) {
    yield put({
      type: types.PROFILE_ERROR,
      payload: { errors: err.response },
    });
  }
}

function* watchuserProfile() {
  yield takeEvery(
    types.PROFILE_DATA, userProfileSaga,
);
}

export default watchuserProfile;
