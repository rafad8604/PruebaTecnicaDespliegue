"use client";
import React, { useState } from 'react';
import IdentificationForm from './IdentificationForm';
import InfoForm from './InfoForm';

const UserFound: React.FC = () => {
  const [persona, setPersona] = useState(null);

  return (
    <>
      <IdentificationForm onFound={setPersona} />
      <InfoForm persona={persona} />
    </>
  );
};

export default UserFound;