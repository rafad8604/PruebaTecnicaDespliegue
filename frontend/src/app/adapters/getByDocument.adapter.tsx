import axios from 'axios';
import config from '../config';

export const getByDocument = async (numeroDocumento: string) => {
  return axios.get(`${config.apiUrl}/api/personas/?numero_documento=${numeroDocumento}`);
};