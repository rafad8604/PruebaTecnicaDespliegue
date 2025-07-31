import axios from 'axios';

export const updatePersona = async (personaId: number, personaData: any) => {
  return axios.put(`http://localhost:8000/api/personas/${personaId}/`, personaData, {
    headers: {
      'Content-Type': 'application/json',
    }
  });
};