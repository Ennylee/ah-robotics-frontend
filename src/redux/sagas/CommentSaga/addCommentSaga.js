import { put, call, takeEvery } from 'redux-saga/effects';
import axios from 'axios';
import {
  ADD_COMMENT_START,
  ADD_COMMENT_SUCCESS,
  ADD_COMMENT_FAIL,
} from '../../actions/CommentActions/types';


function* addCommentWorker({ payload }) {
  const token = JSON.parse(localStorage.getItem('accessToken'));
  // already exisitng article slug
  const articleSlug = 'dc-comics';
  const config = {
    headers: {
      Authorization: `token ${token}`,
    },
  };
  try {
    const response = yield call(axios.post, `http://localhost:8000/api/v1/articles/${articleSlug}/comments/`,
      { comment: payload },
      { headers: config.headers });
    yield put({
      type: ADD_COMMENT_SUCCESS,
      payload: { comment: response.data },
    });
  } catch (error) {
    yield put({
      type: ADD_COMMENT_FAIL,
      payload: { errors: error.response.data },
    });
  }
}

function* addCommentWatcher() {
  yield takeEvery(ADD_COMMENT_START, addCommentWorker);
}

export default addCommentWatcher;
