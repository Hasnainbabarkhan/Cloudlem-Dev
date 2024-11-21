import React from "react";
import { Outlet, useLocation } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";
import Main from './Main';
import About from './AboutHome';
import Services from './Services';
import TechStack from './Stacks';
import Carousel from './Reviews';

const Layout = () => {
  const location = useLocation();

  return (
    <div className="flex flex-col min-h-screen">
      <header>
        <Navbar />
      </header>

      <main className="flex-grow p-4">
        <Outlet />
  
        {location.pathname === '/' && <Main />}
        {location.pathname === '/' && <About />}
        {location.pathname === '/' && <Services />}
        {location.pathname === '/' && <TechStack />}
        {location.pathname === '/' && <Carousel />}
      </main>

      <footer>
        <Footer />
      </footer>
    </div>
  );
};

export default Layout;
