// Sidebar.tsx
import React from 'react';
import { UserIcon } from '@heroicons/react/24/outline';
import Button from './Button';
import Title from './Title';


const Sidebar = () => {
  return (
      <div className="bg-black">
        <div className="text-center my-5">
          <UserIcon className="w-20 h-20 text-gray-400 mx-auto" />
          <Title title="Usuario interno" />
        </div>
        <Button text="Cerrar sesión" />
        <Title title="Gestor de recaudo" />
        <Button text="Identificacion de usuario" />
      </div>
  );
};

export default Sidebar;