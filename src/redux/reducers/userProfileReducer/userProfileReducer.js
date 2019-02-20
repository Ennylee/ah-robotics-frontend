import {
  PROFILE_DATA,
  PROFILE_ERROR,
  PROFILE_PATCH,
  PROFILE_DATA_SUCCESS,
  PROFILE_FOLLOWING,
  PROFILE_FOLLOWERS,
} from '../../actions/userProfileActions/types';

const initialState = {
  profileData: {},
  error: {},
  profileUpdate: false,
  isLoading: false,
  Followers: 0,
  Following: 0,
};

const userProfileReducer = (state = initialState, action) => {
  switch (action.type) {
    case PROFILE_DATA: {
      return { ...state, profileData: action.payload, isLoading: true };
    }
    case PROFILE_DATA_SUCCESS: {
      return { ...action.payload, isLoading: false };
    }
    case PROFILE_ERROR: {
      return { ...state, isLoading: true, errors: action.payload };
    }
    case PROFILE_PATCH: {
      return { ...state, profileUpdate: action.payload };
    }
    case PROFILE_FOLLOWING: {
      return { ...state, Following: action.payload };
    }
    case PROFILE_FOLLOWERS: {
      return { ...state, Followers: action.payload };
    }
    default:
      return state;
  }
};

export default userProfileReducer;
