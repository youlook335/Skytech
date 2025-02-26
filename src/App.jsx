import React, { useEffect } from "react";
import "./index.css";

import { Route, Routes, useLocation } from "react-router-dom";
import Websites from "./Components/Websites";
import Home from "./Components/pages/Home";
import Designing from "./Components/pages/Projects/Designing";
import DigitalMarketing from "./Components/pages/Projects/DigitalMarketing";
import Projects from "./Components/Projects2";
import Ecommerce from "./Components/pages/Projects/Ecommerce";
import Contact from "./Components/Contact";
import About from "./Components/pages/About/MainAbout";
import SoftwareDevelopment from "./Components/pages/Services/Softwerdevelopment";
import Webdevelopment from "./Components/pages/Services/Webdevelopment";
import Degitalmarkiting from "./Components/pages/Services/Degitalmrkiting";
import UIUX from "./Components/pages/Services/UIUX";
import Graphic from "./Components/pages/Services/Graphic";
import ContentWritning from "./Components/pages/Services/ContentWriting";
import DesigningServices from "./Components/pages/Services/DesignServices";
import Career from "./Components/pages/Career/Career";
import Digital from "./Components/DigitalPartner-Events.jsx";
import DataScience from "./Components/DataScience.jsx";
import Seo from "./Components/Seo.jsx";
import NotFound from "./Components/NotFound.jsx";
import TopNav from "./Components/TopNav.jsx";
import ServicesOffers from "./Components/pages/Services/Offer.jsx";
import Packages from "./Components/pages/Services/Packages.jsx";
import Table from "./Components/pages/Services/Table.jsx";
import Policy from "./Components/Policy.jsx";
import Quote from "./Components/pages/Contact/Quote.jsx";
import Vedio from "./Components/pages/Services/Vedio.jsx";
const App = () => {
  const location = useLocation();

  // Scroll to the hero section when a new route is loaded
  useEffect(() => {
    const heroSection = document.querySelector('.hero');  // Add the class for your hero section
    if (heroSection) {
      heroSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
    } else {
      window.scrollTo(0, 0);  // Default scroll to top if hero section doesn't exist
    }
  }, [location]);

  useEffect(() => {
    const scrollFn = () => {
      const header = document.querySelector('.navbar');
      if (window.scrollY > 50) {
        header.style.position = 'fixed';
      } else {
        header.style.position = 'static';
      }
    };

    window.addEventListener('scroll', scrollFn);
    return () => {
      window.removeEventListener('scroll', scrollFn); // Clean up event listener
    };
  }, []);
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Websites" element={<Websites />} />
        <Route path="/Designing" element={<Designing />} />
        <Route path="/DigitalMarketing" element={<DigitalMarketing />} />
        <Route path="/Projects" element={<Projects />} />
        <Route path="/Ecommerce" element={<Ecommerce />} />
        <Route path="/SoftwareDevelopment" element={<SoftwareDevelopment />} />
        <Route path="/Contact" element={<Contact />} />
        <Route path="/About" element={<About />} />
        <Route path="/SoftwareDevelopment" element={<SoftwareDevelopment />} />
        <Route path="/Webdevelopment" element={<Webdevelopment />} />
        <Route path="/Degitalmrkiting" element={<Degitalmarkiting />} />
        <Route path="/UIUX" element={<UIUX />} />
        <Route path="/GraphicDesignings" element={<Graphic />} />
        <Route path="/ContentWriting" element={<ContentWritning />} />
        <Route path="/DesigningServices" element={<DesigningServices />} />
        <Route path="/Career" element={<Career />} />
        <Route path="/Digital" element={<Digital />} />
        <Route path="/DataScience" element={<DataScience />} />
        <Route path="/Seo" element={<Seo />} />
        <Route path="*" element={<NotFound />} />
        <Route path="/TopNav" element={<TopNav />} />
        <Route path="/ServicesOffer" element={<ServicesOffers />} />
        <Route path="/Packages" element={<Packages />} />
        <Route path="Table" element={<Table />} />
        <Route path="Policy" element={<Policy />} />
        <Route path="/Quote" element={<Quote/>}/>
        <Route path="/Vedio" element={<Vedio />} />
      </Routes>
    </div>
  );
};

export default App;
