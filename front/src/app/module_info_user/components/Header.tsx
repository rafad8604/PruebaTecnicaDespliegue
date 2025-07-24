// Header.tsx
import React from 'react';
import { HomeIcon, UserCircleIcon, BellIcon } from '@heroicons/react/24/outline';

const Header = () => (
 <header className="bg-orange-100 ml-10 mr-2">
  <div className="flex justify-end items-center h-20 px-4 gap-4">
    <div className="flex items-center justify-center h-full">
      <HomeIcon className="w-10 h-10 text-black cursor-pointer hover:text-orange-600 transition-colors" />
    </div>
    <div className="flex items-center justify-center h-full">
      <BellIcon className="w-10 h-10 text-black cursor-pointer hover:text-orange-600 transition-colors" />
    </div>
    <div className="flex items-center justify-center h-full">
      <UserCircleIcon className="w-10 h-10 text-black cursor-pointer hover:text-orange-600 transition-colors" />
    </div>
  </div>
 </header>
);

export default Header;

