import Hero from "./Hero";
import Form from "./pages/Contact/Form";
import Map from "./pages/Contact/Map";

function Contact() {
  return (
    <>
      <Hero
        img="/assets/BannerDownloaded/contact.avif"
        heading="Skytech - Technology & IT Solutions"
        desc="At SKYTech. we are more than a development firm we are your partners in turning ideas into powerful solutions. With a team of dedicated professionals, we combine cutting-edge technology with creative expertise to craft software that drives growth and transforms industries."
      />
      <Form />
      <Map />
    </>
  );
}

export default Contact;
