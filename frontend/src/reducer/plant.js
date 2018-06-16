const D23_001 = 'Plant is required';
const D23_002 = 'Invalid Plant';

const validatePlant = (plant) => {
  if (!plant) {
    throw new Error(D23_001); 
  }
  const { 
    commonName, placement, 
  } = plant;
  if (!commonName || !placement) {
    throw new Error(D23_002);
  }
  return undefined;
};

export default (state = null, action) => {
  const { type, payload } = action;
  
  switch (type) {
    case 'PLANT_SET':
      validatePlant(payload);
      return payload;
    case 'TOKEN_REMOVE': 
      return null;
    case 'FETCH_ALL_PLANTS':
      return [payload]; 
    default:
      return state;
  }
};
