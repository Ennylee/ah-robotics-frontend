import { put, call, takeEvery } from 'redux-saga/effects';
import * as types from '../../actions/socialAuth/types';
import { api } from '../../../utils/auth';

const apiUrl = '/login/social/';

export const apiClient = {
  fetchSocialLoginOptions: (payload) => {
    const { authData } = payload;
    return api.post(apiUrl, authData);
  },
};
export function* SocialAuthSaga({ payload }) {
  try {
    const { userDetails } = payload;
    const user = {};
    const response = yield call(apiClient.fetchSocialLoginOptions, payload);
    yield put({
      type: types.SOCIAL_LOGIN_SUCCESS,
      payload: { user: response.data.user },
    });
    const { token } = response.data;
    user.email = userDetails.email;
    user.username = userDetails.name;
    localStorage.setItem('accessToken', JSON.stringify(token));
    localStorage.setItem('user', JSON.stringify(user));
  } catch (error) {
    yield put({
      type: types.SOCIAL_LOGIN_ERROR,
      payload: { errors: error.response.data.errors },
    });
  }
}

function* socialAuthWatcher() {
  yield takeEvery(types.SOCIAL_LOGIN_START, SocialAuthSaga);
}

export default socialAuthWatcher;
