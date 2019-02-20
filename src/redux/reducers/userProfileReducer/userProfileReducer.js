import {
  PROFILE_DATA,
  PROFILE_ERROR,
  PROFILE_PATCH,
  PROFILE_LOADING,
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
      return { ...state, profileLoading: true };
    }
    default:
      return state;
  }
};

export default userProfileReducer;
