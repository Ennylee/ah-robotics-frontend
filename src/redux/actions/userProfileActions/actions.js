import {
    PROFILE_DATA,
    PROFILE_ERROR,
    PROFILE_PATCH,
    PROFILE_FOLLOWING,
    PROFILE_FOLLOWERS,
  } from './types';

    export const profileData = payload => {
        return {type: PROFILE_DATA,
        payload,}
    };

    export const Error = payload => ({
        type: PROFILE_ERROR,
        payload,
    });

    export const profileUpdate = payload => ({
        type: PROFILE_PATCH,
        payload,
    });

    export const Following = payload => ({
        type: PROFILE_FOLLOWING,
        payload,
    });

    export const Followers = payload => ({
        type: PROFILE_FOLLOWERS,
        payload,
      });
