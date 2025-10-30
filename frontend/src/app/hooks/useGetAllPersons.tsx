import { useState, useEffect } from 'react';
import { getAllPersons } from '../adapters/getAllPersons.adapter';
import { getByDocument } from '../adapters/getByDocument.adapter';

interface Persona {
  id: number;
  titulo: string;
  descripcion: string;
  fecha_limite: string;
  numero_documento: string;
  tipo_persona: string;
  digito_verificacion?: string;
  razon_social?: string;
  nombre_comercial?: string;
  direccion?: string;
  tipo_empresa?: string;
  correo_electronico?: string;
  numero_celular?: string;
  quien_diligencia?: string;
  cargo?: string;
  area?: string;
  nombre_pais?: number;
  tipo_de_documento?: number;
}

export function useGetAllPersons() {
  const [personas, setPersonas] = useState<Persona[]>([]);
  const [personasOriginales, setPersonasOriginales] = useState<Persona[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  // Función para cargar TODAS las personas (por defecto)
  const fetchAllPersonas = async () => {
    setLoading(true);
    setError(null);
    try {
      const response = await getAllPersons();
      console.log('Todas las personas:', response.data);
      setPersonas(response.data);
      setPersonasOriginales(response.data); // Guardamos copia original para filtros
    } catch (error) {
      console.error('Error al obtener personas:', error);
      setError('Error al cargar los datos');
      setPersonas([]);
      setPersonasOriginales([]);
    } finally {
      setLoading(false);
    }
  };

  // Función para buscar por número de documento
  const searchByDocument = async (numeroDocumento: string) => {
    if (!numeroDocumento.trim()) {
      // Si no hay número de documento, mostrar todas
      setPersonas(personasOriginales);
      return;
    }

    setLoading(true);
    setError(null);
    try {
      const response = await getByDocument(numeroDocumento);
      console.log('Persona encontrada:', response.data);
      
      // El backend puede devolver un objeto o un array
      let personaEncontrada = response.data;
      if (personaEncontrada.persona) {
        personaEncontrada = personaEncontrada.persona;
      }
      
      // Convertir a array para la tabla
      const resultados = personaEncontrada ? [personaEncontrada] : [];
      setPersonas(resultados);
    } catch (error) {
      console.error('Error al buscar persona:', error);
      setPersonas([]); // No encontrada
    } finally {
      setLoading(false);
    }
  };

  // Función para resetear y mostrar todas las personas
  const showAllPersonas = () => {
    setPersonas(personasOriginales);
  };

  // Cargar todas las personas al inicio
  useEffect(() => {
    fetchAllPersonas();
  }, []);

  return { 
    personas, 
    loading, 
    error, 
    searchByDocument,
    showAllPersonas,
    refetch: fetchAllPersonas 
  };
}