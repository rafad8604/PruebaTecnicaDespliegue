"use client";
import React, { useState, useEffect } from 'react';
import IdentificationForm from './IdentificationForm';
import InfoForm from './InfoForm';
import { Persona } from '../models/types';

const UserFound: React.FC = () => {
  const [persona, setPersona] = useState<Persona | null>(null);
  const [documentToEdit, setDocumentToEdit] = useState<string | null>(null);

  // Verificar si hay un documento para editar al montar el componente
  useEffect(() => {
    const editDocument = sessionStorage.getItem('editPersonDocument');
    if (editDocument) {
      setDocumentToEdit(editDocument);
      // Limpiar el sessionStorage después de leerlo
      sessionStorage.removeItem('editPersonDocument');
    }
  }, []);

  return (
    <>
      <IdentificationForm 
        onFound={setPersona} 
        initialDocument={documentToEdit}
      />
      {persona && <InfoForm persona={persona} />}
    </>
  );
};

export default UserFound;