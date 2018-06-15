import superagent from 'superagent';
import * as routes from '../routes';


// sync actions
const setProfile = profile => ({ // this is object, async is function
  type: 'CLIENT_PROFILE_SET',
  payload: profile,
});


// async actions we do it with thunk, use functions not objects

const createRequest = profile => (store) => {
  const { token } = store.getState('token');

  return superagent.post(`${API_URL}${routes.PROFILE_ROUTE}`)
    .set('Authorization', `Bearer ${token}`) // http header string
    .set('Content-Type', 'application/json') // sending json most of the time
    .send(profile)
    .then((response) => {
      return store.dispatch(setProfile(response.body));
      // need to send the change tot he store, might be response.profile or response.value
    });
};

const updateRequest = profile => (store) => {
  // const { token } = store.getState(); 
  const token = localStorage.getItem('token');
  return superagent.put(`${API_URL}${routes.PROFILE_ROUTE}/${profile._id}`)
    .set('Authorization', `Bearer ${token}`) // http header string
    .set('Content-Type', 'application/json') // sending json most of the time
    .send(profile)
    .then((response) => {
      return store.dispatch(setProfile(response.body));
    });
};

const fetchRequest = () => (store) => {
  const { token } = store.getState(); 

  return superagent.get(`${API_URL}/profile/me`)
    .set('Authorization', `Bearer ${token}`) // http header string
    .then((response) => {
      return store.dispatch(setProfile(response.body));
    });
};
export { setProfile, createRequest, updateRequest, fetchRequest };

