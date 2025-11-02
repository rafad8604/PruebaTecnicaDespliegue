'use client';
import React from 'react';
import { useRouter } from 'next/navigation';
import { HomeIcon, UserCircleIcon, BellIcon, QueueListIcon } from '@heroicons/react/24/outline';

const Header = () => {
  const router = useRouter();
  return (
    <header className="bg-orange-100 ml-10 mr-2">
      <div className="flex justify-end items-center h-20 px-4 gap-4">
        <div className="flex items-center justify-center h-full" onClick={() => router.push('/module_list_user')}>
          <QueueListIcon className="w-10 h-10 text-black cursor-pointer hover:text-orange-600 transition-colors" />
        </div>
        <div className="flex items-center justify-center h-full" onClick={() => router.push('/')}>
          <HomeIcon className="w-10 h-10 text-black cursor-pointer hover:text-orange-600 transition-colors" />
        </div>
        <div className="flex items-center justify-center h-full">
          <BellIcon className="w-10 h-10 text-black cursor-pointer hover:text-orange-600 transition-colors" />
        </div>
        <div className="flex items-center justify-center h-full" onClick={() => router.push('/module_info_user')}>
          <UserCircleIcon className="w-10 h-10 text-black cursor-pointer hover:text-orange-600 transition-colors" />
        </div>
      </div>
    </header>
  );
};

export default Header;