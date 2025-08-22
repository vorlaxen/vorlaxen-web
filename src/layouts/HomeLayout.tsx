import React, { memo } from 'react';
import { Outlet } from 'react-router-dom';
import Header from '@/components/Layout/Header/Header';
import Footer from '@/components/Layout/Footer/Footer';

const MainLayout: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <MemoHeader />

      <main
        className="flex-grow container mx-auto"
        role="main"
        aria-label="Main content"
      >
        <Outlet />
      </main>

      <MemoFooter />
    </div>
  );
};

const MemoHeader = memo(Header);
const MemoFooter = memo(Footer);

export default MainLayout;
