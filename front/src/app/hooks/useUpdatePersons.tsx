import { useState } from 'react';
import { updatePersona } from '../adapters/UpdatePersons.adapter';
import { useAlert } from './useAlert';

interface UseUpdatePersons {
  loading: boolean;
  updatePersonaData: (personaId: number, formData: any) => Promise<any>;
}

export function useUpdatePersons(): UseUpdatePersons {
  const [loading, setLoading] = useState(false);
  const { showSuccess, showError, showLoading, closeLoading } = useAlert();

  const updatePersonaData = async (personaId: number, formData: any) => {
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
    } catch (error: any) {
      console.error('Error al actualizar persona:', error);
      
      // Cerrar loading y mostrar error
      closeLoading();
      
      if (error.response?.data) {
        const errorMessages = Object.values(error.response.data).flat();
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