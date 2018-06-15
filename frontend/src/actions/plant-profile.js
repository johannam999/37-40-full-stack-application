import superagent from 'superagent';
import * as routes from '../routes';


// sync actions
const setPlant = plant => ({ // this is object, async is function
  type: 'PLANT_SET',
  payload: plant,
});


// async actions we do it with thunk, use functions not objects

const createPlantRequest = plant => (store) => {
  const { token } = store.getState('token');

  return superagent.post(`${API_URL}${routes.PLANT_ROUTE}`)
    .set('Authorization', `Bearer ${token}`) // http header string
    .set('Content-Type', 'application/json') // sending json most of the time
    .send(plant)
    .then((response) => {
      console.log(response.body);
      return store.dispatch(setPlant(response.body));
      // need to send the change tot he store, might be response.profile or response.value
    });
};

const updatePlantRequest = plant => (store) => {
  // const { token } = store.getState(); 
  const token = localStorage.getItem('token');
  return superagent.put(`${API_URL}${routes.PLANT_ROUTE}/${plant._id}`)
    .set('Authorization', `Bearer ${token}`) 
    .set('Content-Type', 'application/json') // sending json most of the time
    .send(plant)
    .then((response) => {
      return store.dispatch(setPlant(response.body));
    });
};

const fetchPlantRequest = () => (store) => {
  const { token } = store.getState(); 

  return superagent.get(`${API_URL}/plants`)
    .set('Authorization', `Bearer ${token}`) 
    .then((response) => {
      return store.dispatch(setPlant(response.body));
    });
};
export { setPlant, createPlantRequest, updatePlantRequest, fetchPlantRequest };

