// Sidebar.tsx
import React from 'react';
import { UserIcon } from '@heroicons/react/24/outline';
import Button from './Button';
import Title from './Title';


const Sidebar = () => {
  return(
    <div>
      <div className="flex items-center justify-center h-16 bg-gradient-to-r from-orange-100 to-orange-300">
      <UserIcon className="w-8 h-8 text-orange-500"/>
      <Title title="Usuario interno"/>
      <Button text="Cerrar sesión"/>
      <Title title="Gestor de recaudo"/>
      <Button text="Identificacion de usuario"/>
      </div>
    </div>
  )

  
};

export default Sidebar;