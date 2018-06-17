import superagent from 'superagent';
import * as routes from '../routes';


// sync actions
const setPlant = plant => ({ 
  type: 'PLANT_SET',
  payload: plant,
});

const getAllPlants = plants => ({
  type: 'FETCH_ALL_PLANTS',
  payload: plants,
});

const updatePlants = plants => ({
  type: 'UPDATE_PLANTS',
  payload: plants,
});


// async actions we do it with thunk, use functions not objects

const createPlantRequest = plant => (store) => {
  const { token } = store.getState('token');
  return superagent.post(`${API_URL}${routes.PLANT_ROUTE}`)
    .set('Authorization', `Bearer ${token}`) 
    .set('Content-Type', 'application/json') 
    .send(plant)
    .then((response) => {
      return store.dispatch(setPlant(response.body));
    });
};

const updatePlantRequest = plant => (store) => {
  const token = localStorage.getItem('token');
  return superagent.put(`${API_URL}${routes.PLANT_ROUTE}/${plant._id}`)
    .set('Authorization', `Bearer ${token}`) 
    .set('Content-Type', 'application/json') 
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
      return store.dispatch(getAllPlants(response.body));
    });
};
export { setPlant, updatePlants, createPlantRequest, updatePlantRequest, fetchPlantRequest };

