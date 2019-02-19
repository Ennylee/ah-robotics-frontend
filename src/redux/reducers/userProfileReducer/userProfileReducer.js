import {
  PROFILE_DATA,
  PROFILE_ERROR,
  PROFILE_PATCH,
  PROFILE_LOADING,
  PROFILE_STATUS,
  PROFILE_FOLLOWING,
  PROFILE_FOLLOWERS,
} from './actions/userProfileActions/types';

const initialState = {
    profileData: {},
    profileError: {},
    profileUpdate: false,
    profileLoading: false,
    profileFollow: 0,
    profileFollowing: 0,
    profileStatus: {},
};
