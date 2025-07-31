import axios from 'axios';

export const getByDocument = async (numeroDocumento: string) => {
  return axios.get(`http://localhost:8000/api/personas/?numero_documento=${numeroDocumento}`);
};