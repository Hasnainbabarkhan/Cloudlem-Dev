import React from "react";
import { Outlet, useLocation } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";
import Main from './Main';
import About from './AboutHome';
import Services from './Services';
import TechStack from './Stacks';
import Carousel from './Reviews';
<<<<<<< HEAD
=======
import ContactForm from "./Contact";
>>>>>>> 1428cb6 (developing)

const Layout = () => {
  const location = useLocation();

  return (
    <div className="flex flex-col min-h-screen">
      <header>
        <Navbar />
      </header>

<<<<<<< HEAD
      <main className="flex-grow p-4">
=======
      <main className="flex-grow ">
>>>>>>> 1428cb6 (developing)
        <Outlet />
  
        {location.pathname === '/' && <Main />}
        {location.pathname === '/' && <About />}
        {location.pathname === '/' && <Services />}
        {location.pathname === '/' && <TechStack />}
        {location.pathname === '/' && <Carousel />}
<<<<<<< HEAD
=======
        {location.pathname === '/' && <ContactForm />}
>>>>>>> 1428cb6 (developing)
      </main>

      <footer>
        <Footer />
      </footer>
    </div>
  );
};

export default Layout;
