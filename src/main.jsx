import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "animate.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import { BrowserRouter } from "react-router-dom";
import TopNav from "./Components/TopNav.jsx";
import Translater from "./Translater.jsx"; 
import SocialIcons from "./Components/Socialicon.jsx";
import Navbar from "./Components/Navbar.jsx";
import Footer from "./Components/Footer.jsx";
createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <TopNav />
    <Navbar />
    <SocialIcons />
    <App />
    <Footer />
    <Translater />
  </BrowserRouter>
);
