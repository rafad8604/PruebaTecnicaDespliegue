// Layout.tsx
import React from 'react';
import Sidebar from './Sidebar';
import Header from './Header';

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <div className="dashboard-layout" style={{ display: 'flex', minHeight: '100vh' }}>
    <div>
      <Sidebar />
    </div>
    <div style={{ flex: 1 }}>
      <Header />
      {children}
    </div>
  </div>
);

export default Layout;