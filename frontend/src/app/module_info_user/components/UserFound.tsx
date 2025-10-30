"use client";
import React, { useState } from 'react';
import IdentificationForm from './IdentificationForm';
import InfoForm from './InfoForm';
import { Persona } from '../models/types';

const UserFound: React.FC = () => {
  const [persona, setPersona] = useState<Persona | null>(null);

  return (
    <>
      <IdentificationForm onFound={setPersona} />
      {persona && <InfoForm persona={persona} />}
    </>
  );
};

export default UserFound;