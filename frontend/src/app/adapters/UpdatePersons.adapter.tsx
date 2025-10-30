import axios from 'axios';
import config from '../config';

export interface PersonaUpdateData {
  titulo: string;
  descripcion: string;
  fecha_limite: string;
  numero_documento: string;
  tipo_persona: string;
  digito_verificacion?: string | null;
  razon_social?: string | null;
  nombre_comercial?: string | null;
  direccion?: string | null;
  tipo_empresa?: string | null;
  correo_electronico?: string | null;
  numero_celular?: string | null;
  quien_diligencia?: string | null;
  cargo?: string | null;
  area?: string | null;
  nombre_pais?: number | null;
  tipo_de_documento?: number | null;
}

export const updatePersona = async (personaId: number, personaData: PersonaUpdateData) => {
  return axios.put(`${config.apiUrl}/api/personas/${personaId}/`, personaData, {
    headers: {
      'Content-Type': 'application/json',
    }
  });
};