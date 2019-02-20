import {
    PROFILE_DATA,
    PROFILE_ERROR,
    PROFILE_PATCH_START,
  } from './types';

    export const profileData = payload => ({
 type: PROFILE_DATA,
        payload,
});

    export const Error = payload => ({
        type: PROFILE_ERROR,
        payload,
    });

    export const profileUpdate = payload => ({
        type: PROFILE_PATCH_START,
        payload,
    });
