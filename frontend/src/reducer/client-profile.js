const D23_001 = 'Profile is required';
const D23_002 = 'Invalid Profile';

const validateProfile = (profile) => {
  if (!profile) {
    throw new Error(D23_001); 
  }
  const { 
    firstName, location, 
  } = profile;
  if (!firstName || !location) {
    throw new Error(D23_002);
  }
  return undefined;
};

export default (state = null, action) => {
  const { type, payload } = action;
  
  switch (type) {
    case 'CLIENT_PROFILE_SET': // refactor (smells)
      validateProfile(payload);
      return payload;
    case 'TOKEN_REMOVE': // this means we meant to logout, we dont want to store token
      return null; // remove profile from the store
    default:
      return state;
  }
};
