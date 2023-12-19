import Sidebar from './sidebar';
import Navbar from './navbar';
import { ReactNode } from 'react';

interface LayoutAdminProps {
  children: ReactNode;
}

const Layout: React.FC<LayoutAdminProps> = ({ children }) => {
  return (
    <div className="flex">
      <div className="flex shadow-lg flex-col">
        <Sidebar />
      </div>
      <div className="w-full flex flex-col">
        <Navbar />
        <div className="flex-1 flex-grow overflow-y-auto h-full w-full bg-sky-100">
          {children}
        </div>
      </div>
    </div>
  );
};

export default Layout;
