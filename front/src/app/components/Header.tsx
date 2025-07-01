// Header.tsx
import React from 'react';
import { HomeIcon, UserCircleIcon } from '@heroicons/react/24/outline';

const Header: React.FC = () => (
  <header
    className="dashboard-header"
    style={{
      display: 'flex',
      justifyContent: 'flex-end',
      alignItems: 'center',
      padding: '16px 32px',
      background: 'linear-gradient(90deg, #fff7f0 0%, #ffe0c3 100%)',
      borderBottom: '1px solid #eee',
      minHeight: 60,
      gap: 24,
    }}
  >
    {/* Home */}
    <span
      style={{
        background: '#fff',
        borderRadius: '50%',
        boxShadow: '0 2px 6px #0001',
        padding: 6,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <HomeIcon style={{ width: 32, height: 32, color: '#1a2947', cursor: 'pointer' }} />
    </span>
    {/* Bell */}
    <span
      style={{
        background: '#fff',
        borderRadius: '50%',
        boxShadow: '0 2px 6px #0001',
        padding: 6,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="#1a2947"
        style={{ width: 32, height: 32, cursor: 'pointer' }}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M14.857 17.082a23.848 23.848 0 0 0 5.454-1.31A8.967 8.967 0 0 1 18 9.75V9A6 6 0 0 0 6 9v.75a8.967 8.967 0 0 1-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 0 1-5.714 0m5.714 0a3 3 0 1 1-5.714 0"
        />
      </svg>
    </span>
    {/* User */}
    <span
      style={{
        background: '#fff',
        borderRadius: '50%',
        boxShadow: '0 2px 6px #0001',
        padding: 6,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <UserCircleIcon style={{ width: 32, height: 32, color: '#1a2947', cursor: 'pointer' }} />
    </span>
  </header>
);

export default Header;