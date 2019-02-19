import {
    PROFILE_DATA,
    PROFILE_ERROR,
    PROFILE_PATCH,
    PROFILE_LOADING,
    PROFILE_STATUS,
    PROFILE_FOLLOWING,
    PROFILE_FOLLOWERS,
  } from './types';
  
    export const profileData = payload => ({
        type: PROFILE_DATA,
        payload,
    });
    
    export const profileError = payload => ({
        type: PROFILE_ERROR,
        payload,
    });
    
    export const profileUpdate = payload => ({
        type: PROFILE_PATCH,
        payload,
    });
    
    export const profileLoading = payload => ({
        type: PROFILE_LOADING,
        payload,
    });
    
    export const profileApiRequest = payload => ({
        type: PROFILE_STATUS,
        payload,
      });

    export const profileFollow = payload => ({
        type: PROFILE_FOLLOWING,
        payload,
    });

    export const profileFollowers = payload => ({
        type: PROFILE_FOLLOWERS,
        payload,
      });
