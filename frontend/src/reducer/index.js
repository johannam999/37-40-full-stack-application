import { combineReducers } from 'redux';
import token from './token';
import clientProfile from './client-profile';
import plant from './plant';

export default combineReducers({ token, clientProfile, plant });
