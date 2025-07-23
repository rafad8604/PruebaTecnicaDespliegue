// Header.tsx
import React from 'react';
import { HomeIcon, UserCircleIcon } from '@heroicons/react/24/outline';

const Header = () => (
 <header>
  <div>
    <div>
      <HomeIcon style={{ width: 32, height: 32, color: '#1a2947', cursor: 'pointer' }} />
    </div>
    <div>
      <UserCircleIcon style={{ width: 32, height: 32, color: '#1a2947', cursor: 'pointer' }} />
    </div>
  </div>
 </header>
);

export default Header;

