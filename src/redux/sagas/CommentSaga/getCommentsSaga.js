import { put, call, takeEvery } from 'redux-saga/effects';
import axios from 'axios';
import {
  GET_COMMENTS_START,
  GET_COMMENTS_SUCCESS,
  GET_COMMENTS_FAIL,
} from '../../actions/CommentActions/types';

function* getCommentsWorker({ payload }) {
  const token = JSON.parse(localStorage.getItem('accessToken'));
  const articleSlug = payload.slug;
  const config = {
    headers: {
      Authorization: `token ${token}`,
    },
  };
  try {
    const response = yield call(
      axios.get,
      `https://ah-robotics-staging.herokuapp.com/api/v1/articles/${articleSlug}/comments/`,
      { comment: payload },
      { headers: config.headers },
);
    yield put({
      type: GET_COMMENTS_SUCCESS,
      payload: { comments: response.data },
    });
  } catch (error) {
    yield put({
      type: GET_COMMENTS_FAIL,
      payload: { errors: error.response.data.errors },
    });
  }
}

function* getCommentsWatcher() {
  yield takeEvery(GET_COMMENTS_START, getCommentsWorker);
}

export default getCommentsWatcher;
