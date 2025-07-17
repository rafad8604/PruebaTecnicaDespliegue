"use client";
import React, { useState } from 'react';
import Input from './Input';
import Button from './Button';
import InputSelect from './InputSelect';
import { getAllPersonas } from '../adapters/back.api';


//Crearlos en los models
const tipoPersonaOptions = [
  { value: 'NATURAL', label: 'Natural' },
  { value: 'JURIDICA', label: 'Jurídica' },
];

const tipoDocumentoOptions = [
  { value: 'CC', label: 'Cédula de Ciudadanía' },
  { value: 'NIT', label: 'NIT' },
];

const IdentificationForm = () => {
  const [tipoPersona, setTipoPersona] = useState('');
  const [tipoDocumento, setTipoDocumento] = useState('');
  const [numeroDocumento, setNumeroDocumento] = useState('');
  const [obtenerPersona, setObtenerPersona] = useState<any>(null);
  const [error, setError] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
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
    // Solo busca por número de documento
    const resAllPersonas = await getAllPersonas(numeroDocumento);
    setObtenerPersona(resAllPersonas.data);

    console.log(resAllPersonas.numeroDocumento); //crearlo en un hook
  };

  const isReady = tipoPersona && tipoDocumento;

  return (
    <form onSubmit={handleSubmit}>
      <InputSelect
        label="Tipo de persona"
        value={tipoPersona}
        onChange={e => setTipoPersona(e.target.value)}
        options={tipoPersonaOptions}
      />
      <InputSelect
        label="Tipo de documento"
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