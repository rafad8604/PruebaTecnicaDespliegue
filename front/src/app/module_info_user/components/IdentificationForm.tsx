"use client";
import React, { useState, useMemo } from 'react';
import Title from '../../components/ui/Title';
import InputNormal from '../../components/ui/InputNormal';
import Button from '../../components/ui/Button';
import InputSelect from '../../components/ui/InputSelect';
import { tipoPersonaOptions } from '../models/tipoPersonaOptions';
import { tipoDocumentoOptions } from '../models/tipoDocumentoOptions';
import { useGetByDocument } from '../../hooks/useGetByDocument';
import { useGetAllPersons } from '../../hooks/useGetAllPersons';


interface IdentificationFormProps {
  onFound: (persona: any) => void;
}

const IdentificationForm: React.FC<IdentificationFormProps> = ({ onFound }) => {
  const [tipoPersona, setTipoPersona] = useState('');
  const [tipoDocumento, setTipoDocumento] = useState('');
  const [numeroDocumento, setNumeroDocumento] = useState('');
  const [error, setError] = useState('');
  const { personas, loading, error: hookError, searchByDocument, showAllPersonas, refetch } = useGetAllPersons();
  const { fetchData } = useGetByDocument();

  // Filtrar opciones de documento según el tipo de persona
  const filteredDocumentOptions = useMemo(() => {

    if (tipoPersona === 'NATURAL') {
      // Persona Natural: CC, CE, PA
      return [
        { value: '', label: 'Tipo de Documento' },
        { value: 'CC', label: 'Cédula de Ciudadanía' },
        { value: 'CE', label: 'Cédula de Extranjería' },
        { value: 'PA', label: 'Pasaporte' }
      ];
    }

    if (tipoPersona === 'JURIDICA') {
      // Persona Jurídica: solo NIT
      return [
        { value: '', label: 'Tipo de Documento' },
        { value: 'NIT', label: 'NIT' }
      ];
    }

    // Fallback - no debería llegar aquí
    return [{ value: '', label: 'Tipo de Documento' }];
  }, [tipoPersona]);

  // Manejar cambio de tipo de persona
  const handleTipoPersonaChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const newTipoPersona = e.target.value;
    setTipoPersona(newTipoPersona);
    
    // Resetear tipo de documento cuando cambie tipo de persona
    setTipoDocumento('');
    
    // Limpiar errores
    setError('');
    
    console.log('Tipo de persona cambiado a:', newTipoPersona);
  };

  // Manejar cambio de tipo de documento
  const handleTipoDocumentoChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setTipoDocumento(e.target.value);
    setError('');
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError('');
    if (!tipoPersona || !tipoDocumento) {
      setError('Debes seleccionar tipo de persona y tipo de documento antes de buscar.');
      return;
    }
    if(tipoPersona === 'NATURAL' && tipoDocumento === 'NIT') {
      setError('No puedes buscar una persona natural con NIT.');
      return;
    }
    if (tipoPersona === 'JURIDICA' && tipoDocumento === 'CC') {
      setError('No puedes buscar una persona jurídica con Cédula de Ciudadanía.');
      return;
    }

    if (tipoPersona === 'JURIDICA' && (tipoDocumento === 'CE' || tipoDocumento === 'PA')) {
      setError('Una persona jurídica solo puede tener NIT.');
      return;
    }
    if (!numeroDocumento) {
      setError('Debes ingresar el número de documento.');
      return;
    }
    const data = await fetchData(numeroDocumento);
    console.log(data);
    // fetchData podría no retornar nada, así que solo llama onFound si data no es undefined/null
    if (data !== undefined && data !== null) {
      onFound(data);
    }
  };

  const isReady = tipoPersona && tipoDocumento;

  return (
    <div className="ml-20 mt-10 mr-15">
      <Title title="Identificación de usuarios recaudadores" />
      <div >
        <form onSubmit={handleSubmit} className="grid grid-cols-3 gap-3 mt-1">
          <InputSelect
            value={tipoPersona}
            onChange={handleTipoPersonaChange}
            options={tipoPersonaOptions}
          />
          <InputSelect
            value={tipoDocumento}
            onChange={handleTipoDocumentoChange}
            options={filteredDocumentOptions}
            disabled={!tipoPersona}
          />
          <InputNormal
            placeholder="Número de documento"
            value={numeroDocumento}
            onChange={e => setNumeroDocumento(e.target.value)}
            disabled={!isReady}
          />
          <div className="col-span-3 flex justify-end">
            <Button 
              text="Buscar" 
              type="submit" 
              disabled={!isReady || !numeroDocumento}
              className="rounded-full px-20 py-2 text-lg hover:bg-orange-500 transition-colors shadow-lg"
            />
          </div>
          {error && <div className="col-span-3 text-red-500 mt-2 text-right">{error}</div>}
        </form>
      </div>
    </div>
  );
};

export default IdentificationForm;