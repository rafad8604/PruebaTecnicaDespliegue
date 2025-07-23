// hooks/useIdentificationForm.ts
import { getAllPersonas } from '../adapters/adapterObtenerPersonas';

export function useIdentificationForm() {
  const fetchData = async (numeroDocumento: string) => {
    try {
      const response = await getAllPersonas(numeroDocumento);
      console.log('Respuesta cruda de la API:', response);
      if (Array.isArray(response.data)) {
        return response.data[0] || null;
      }
      return response.data;
    } catch (error) {
      return null;
    }
  };

  return { fetchData };
}