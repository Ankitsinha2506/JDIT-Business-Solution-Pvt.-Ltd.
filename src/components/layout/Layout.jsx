import { Outlet } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';
import WhatsAppStickyIcon from './WhatsAppStickyIcon';

const Layout = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow pt-20">
        <Outlet />
      </main>
      {/* ✅ Sticky WhatsApp icon on all pages */}
      <WhatsAppStickyIcon />
      <Footer />
    </div>
  );
};

export default Layout;