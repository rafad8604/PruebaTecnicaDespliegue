// hooks/useIdentificationForm.ts
import { getByDocument } from '../adapters/getByDocument.adapter';

export function useGetByDocument() {
  const fetchData = async (numeroDocumento: string) => {
    try {
      const response = await getByDocument(numeroDocumento);
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