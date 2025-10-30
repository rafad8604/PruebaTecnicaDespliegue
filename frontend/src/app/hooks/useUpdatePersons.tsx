import { useState } from 'react';
import { updatePersona } from '../adapters/UpdatePersons.adapter';
import { useAlert } from './useAlert';
import { PersonaUpdateData } from '../adapters/UpdatePersons.adapter';
import { AxiosError } from 'axios';

interface ApiErrorResponse {
  data: Record<string, string[]>;
}

interface UseUpdatePersons {
  loading: boolean;
  updatePersonaData: (personaId: number, formData: PersonaUpdateData) => Promise<void>;
}

export function useUpdatePersons(): UseUpdatePersons {
  const [loading, setLoading] = useState(false);
  const { showSuccess, showError, showLoading, closeLoading } = useAlert();

  const updatePersonaData = async (personaId: number, formData: PersonaUpdateData) => {
    setLoading(true);
    
    // Mostrar loading
    showLoading("Actualizando persona...", "Por favor espera mientras guardamos los cambios");

    try {
      console.log('Actualizando persona:', personaId, formData);
      const response = await updatePersona(personaId, formData);
      console.log('Persona actualizada exitosamente:', response.data);
      
      // Cerrar loading y mostrar éxito
      closeLoading();
      await showSuccess("¡Persona actualizada!", "Los datos se han guardado correctamente");
      
      return response.data;
    } catch (error) {
      console.error('Error al actualizar persona:', error);
      
      // Cerrar loading y mostrar error
      closeLoading();
      
      if (error instanceof AxiosError && error.response?.data) {
        const errorData = error.response.data as ApiErrorResponse['data'];
        const errorMessages = Object.values(errorData).flat();
        await showError("Error al actualizar", `${errorMessages.join(', ')}`);
      } else {
        await showError("Error de conexión", "No se pudo conectar con el servidor. Intenta nuevamente.");
      }
      
      throw error;
    } finally {
      setLoading(false);
    }
  };

  return {
    loading,
    updatePersonaData
  };
}