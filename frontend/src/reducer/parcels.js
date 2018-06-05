import { validateParcel } from '../utils';

const emptyState = [];

export default (state = emptyState, { type, payload }) => {
  // this is also const { type, payload } = action;
  // const test = { type: action.type, payload: action.payload }
  switch (type) {
    case 'PARCELS_FETCH':
      return payload;
    case 'PARCEL_CREATE':
      validateParcel(payload);
      return [payload, ...state];
    case 'PARCEL_UPDATE':
      validateParcel(payload);
      return state.map(item => (item._id === payload._id ? payload : item));

    case 'PARCEL_DELETE':
      validateParcel(payload);
      return state.filter(item => item._id !== payload._id);
    default: 
      return state;
  }
};
