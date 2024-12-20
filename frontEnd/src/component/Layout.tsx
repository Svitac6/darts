import React from 'react';

interface LayoutProps {
  children: React.ReactNode; // Permet de passer les enfants (pages ou composants)
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="min-h-screen flex flex-col bg-white dark:bg-gray-900 text-black dark:text-white">
      {children}
    </div>
  );
};

export default Layout;
