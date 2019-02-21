import userProfileReducer from './userProfileReducer';
import {
    PROFILE_ERROR,
    PROFILE_PATCH_START,
    PROFILE_PATCH_SUCCESS,
    PROFILE_PATCH_ERROR,
    PROFILE_DATA_SUCCESS,
  } from '../../actions/userProfileActions/types';

describe('userProfileReducer tests', () => {
  it('it should have an initial state', () => {
    expect(userProfileReducer(userProfileReducer.initialState, {})).toEqual({
        profileData: {},
        error: {},
        profileUpdate: false,
        isLoading: false,
        Followers: 0,
        Following: 0,
});
  });
  it('it should show isloading on profile submit', () => {
    expect(userProfileReducer(null, {
      type: PROFILE_DATA_SUCCESS,
      payload: {},
    })).toEqual({ isLoading: false });
  });
  it('it should show error on profile submit', () => {
    expect(userProfileReducer(null, {
      type: PROFILE_ERROR,
      payload: {},
    })).toEqual({ isLoading: true, errors: {} });
  });
  it('it should show error on profile submit', () => {
    expect(userProfileReducer(null, {
      type: PROFILE_PATCH_START,
      payload: {},
    })).toEqual({ isLoading: true, profileData: {} });
  });
  it('it should show error on profile submit', () => {
    expect(userProfileReducer(null, {
      type: PROFILE_PATCH_SUCCESS,
      payload: {},
    })).toEqual({ isLoading: false });
  });
  it('it should show error on profile submit', () => {
    expect(userProfileReducer(null, {
      type: PROFILE_PATCH_ERROR,
      payload: {},
    })).toEqual({ isLoading: true, errors: {} });
  });
});
