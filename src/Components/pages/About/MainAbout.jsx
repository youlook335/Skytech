// import './App.css'

import Journey from "../About/Journey";
// import Navbar from "../../Navbar";
import Banner2 from "../../Banner2";
import Faq from "../../FAQ";
import Form from "../Contact/Form";
import Happyclint from "../marque/Happyclint";
import Turstedpatners from "../marque/Turstedpatners";
// import Services from "../../Services";
// import abot from "../../../../public/assets/heros/heroabout.jpg";
import AboutHero from "./Aboutvideo";
import Impact from "./Impact";
import TextSection from "./Textsection";
import Goals from "./Goals";
import Difference from "./Difference";

function App() {
  return (
    <>
      <AboutHero />
      <TextSection />
      <Impact/>
      <Journey />
      <Goals/>
      <Difference/>
      <Happyclint />
      <Turstedpatners />
      {/* <Services/> */}
      <Banner2 />
      <Faq />
      <Form />
 
      {/* <Footer /> */}
    </>
  );
}

export default App;
