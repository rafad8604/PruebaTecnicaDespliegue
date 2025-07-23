"use client";
import React, { useState } from 'react';
import Input from './InputNormal';
import Button from './Button';
import InputSelect from './InputSelect';
import { useIdentificationForm } from '../hooks/useIdentificationForm';
import { tipoPersonaOptions } from '../models/tipoPersonaOptions';
import { tipoDocumentoOptions } from '../models/tipoDocumentoOptions';


interface IdentificationFormProps {
  onFound: (persona: any) => void;
}

const IdentificationForm: React.FC<IdentificationFormProps> = ({ onFound }) => {
  const [tipoPersona, setTipoPersona] = useState('');
  const [tipoDocumento, setTipoDocumento] = useState('');
  const [numeroDocumento, setNumeroDocumento] = useState('');
  const [error, setError] = useState('');
  const { fetchData } = useIdentificationForm();

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
    <form onSubmit={handleSubmit}>
      <InputSelect
        value={tipoPersona}
        onChange={e => setTipoPersona(e.target.value)}
        options={tipoPersonaOptions}
      />
      <InputSelect
        value={tipoDocumento}
        onChange={e => setTipoDocumento(e.target.value)}
        options={tipoDocumentoOptions}
      />
      <Input
        placeholder="Número de documento"
        value={numeroDocumento}
        onChange={e => setNumeroDocumento(e.target.value)}
        disabled={!isReady}
      />
      <Button text="Buscar" type="submit" disabled={!isReady || !numeroDocumento} />
      {error && <div style={{ color: 'red' }}>{error}</div>}
    </form>
  );
};

export default IdentificationForm;