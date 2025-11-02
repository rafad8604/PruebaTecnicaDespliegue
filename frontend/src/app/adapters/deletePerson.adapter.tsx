import axios from 'axios';
import config from '../config';

export const deletePerson = async (id: number) => {
  return axios.delete(`${config.apiUrl}/api/personas/${id}/`);
};
