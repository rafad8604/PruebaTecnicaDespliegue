import axios from 'axios';

export const getAllPersonas = async () => {
  return axios.get(`http://localhost:8000/api/personas`);
};