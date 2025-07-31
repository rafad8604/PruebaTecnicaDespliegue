import { useState } from 'react';
import { updatePersona } from '../adapters/UpdatePersons.adapter';

interface UseUpdatePersons {
  loading: boolean;
  error: string | null;
  success: boolean;
  updatePersonaData: (personaId: number, formData: any) => Promise<any>;
  clearMessages: () => void;
}

export function useUpdatePersons(): UseUpdatePersons {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState(false);

  const clearMessages = () => {
    setError(null);
    setSuccess(false);
  };

const updatePersonaData = async (personaId: number, formData: any) => {
    setLoading(true);
    setError(null);
    setSuccess(false);

    try {
      console.log('Actualizando persona:', personaId, formData);
      const response = await updatePersona(personaId, formData);
      console.log('Persona actualizada exitosamente:', response.data);
      setSuccess(true);
      return response.data;
    } catch (error: any) {
      console.error('Error al actualizar persona:', error);
      if (error.response?.data) {
        const errorMessages = Object.values(error.response.data).flat();
        setError(`Error al actualizar: ${errorMessages.join(', ')}`);
      } else {
        setError('Error al actualizar los datos. Intenta nuevamente.');
      }
      throw error;
    } finally {
      setLoading(false);
    }
  };

  return {
    loading,
    error,
    success,
    updatePersonaData,
    clearMessages
  };
}