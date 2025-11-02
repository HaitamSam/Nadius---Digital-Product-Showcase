import React from 'react';

interface SidebarProps {
  children: React.ReactNode;
}

const Sidebar: React.FC<SidebarProps> = ({ children }) => {
  return (
    <aside className="sticky top-28 space-y-8">
      {children}
    </aside>
  );
};

export default Sidebar;
