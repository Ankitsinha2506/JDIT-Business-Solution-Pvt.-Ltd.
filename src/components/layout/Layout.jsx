import { Outlet } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';
import WhatsAppStickyIcon from './WhatsAppStickyIcon';
import ChatbotWidget from './ChatbotWidget';

const Layout = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow pt-20">
        <Outlet />
      </main>
      {/* ✅ Sticky WhatsApp icon on all pages */}
      {/* <WhatsAppStickyIcon /> */}

      {/* Chatbot widget loaded globally */}
      <ChatbotWidget />
      <Footer />
    </div>
  );
};

export default Layout;