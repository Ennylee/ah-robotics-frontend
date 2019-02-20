import {
    PROFILE_DATA,
    PROFILE_ERROR,
    PROFILE_PATCH_START,
  } from './types';
import { profileData , Error, profileUpdate } from './actions';

describe('Profile action creator', () => {
  it('should dispatch PROFILE_DATA', () => {
    expect(profileData ({}).type).toEqual(PROFILE_DATA);
  });
  it('should dispatch PROFILE_ERROR', () => {
    expect(Error({}).type).toEqual(PROFILE_ERROR);
  });
  it('should dispatch PROFILE_PATCH', () => {
    expect(profileUpdate({}).type).toEqual(PROFILE_PATCH_START);
  });
});
