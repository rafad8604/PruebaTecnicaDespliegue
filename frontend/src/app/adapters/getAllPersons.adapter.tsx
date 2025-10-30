import axios from 'axios';
import config from '../config';

export const getAllPersons = async () => {
  return axios.get(`${config.apiUrl}/api/personas/`);
};