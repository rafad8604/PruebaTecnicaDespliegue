import axios from 'axios';

export const getAllPersonas = () => {
    return axios.get('http://localhost:8000/api/personas/?numero_documento')


}

