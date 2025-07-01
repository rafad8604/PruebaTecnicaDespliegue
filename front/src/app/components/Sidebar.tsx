// Sidebar.tsx
import React from 'react';
import { UserIcon } from '@heroicons/react/24/outline';

const sidebarBg = 'linear-gradient(90deg, #fff7f0 0%, #ffe0c3 100%)';
const buttonStyle = {
  padding: '8px 0',
  background: '#ff9800',
  color: '#fff',
  border: 'none',
  borderRadius: 4,
  fontWeight: 'bold',
  width: '100%',
  margin: '12px 0',
  fontSize: 16,
  cursor: 'pointer',
};

const Sidebar: React.FC = () => (
  <aside
    className="sidebar"
    style={{
      background: sidebarBg,
      minHeight: '100vh',
      padding: '32px 18px 18px 18px',
      boxSizing: 'border-box',
      width: 270,
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
    }}
  >
    <div className="sidebar-user" style={{ margin: '20px 0', textAlign: 'center' }}>
      <UserIcon
        className="sidebar-avatar"
        style={{ width: 80, height: 80, color: '#bbb', margin: '0 auto' }}
      />
      <h2 style={{ margin: '16px 0 0 0', fontWeight: 400 }}>Usuario Interno</h2>
    </div>
    <nav className="sidebar-nav" style={{ marginTop: 40, width: '100%' }}>
      <div
        style={{
          background: 'linear-gradient(90deg, #ffb347 0%, #ff7f50 100%)',
          color: '#fff',
          borderRadius: 18,
          padding: '10px',
          fontSize: 22,
          fontWeight: 400,
          margin: '16px 0 24px 0px', // margen izquierdo para igualar ambos lados
          boxShadow: '2px 4px 8px #0001',
          width: 'calc(100% - 32px)', // resta el margen izquierdo y derecho
          textAlign: 'center',
        }}
      >
        Perfil
      </div>
      <div style={{ marginBottom: 16 }}>      
      
        <button style={buttonStyle}>Identificación de usuarios</button>
      </div>
    </nav>
  </aside>
);

export default Sidebar;