import React from "react";
import Hero from "./Hero";
import { LuTextSearch } from "react-icons/lu";
import { MdContentPasteSearch } from "react-icons/md";
import Services from "./Services";
import seo from '../../public/assets/heros/seo.png'
import SkytehName from "./pages/About/SkytehName";
const Seo = () => {
  const ServicesData = [
        
    {
        heading: "SEO Audit",
        Description: "A comprehensive analysis of a website’s current SEO status to identify areas of improvement, strengths, weaknesses, and potential opportunities.",
        icon: 'fa fa-chart-line',
        btn: 'Learn more',
        appLink : '/WebDevelopment'
    },
    {
        heading: "Keyword Research",
        Description: "Researching and identifying relevant keywords and phrases that users are searching for to optimize website content and improve rankings",
        icon: 'fa-solid fa-magnifying-glass',
         btn: 'Learn more',
         appLink: '/DigitalMarketing'
    },
    {
        heading: "Content Creation",
        Description: "Developing high-quality and engaging content, including blog posts, articles, infographics, videos, and other types of media to improve website authority, user engagement, and search engine rankings.",
        img: '/assets/designing.png',
         btn: 'Learn more',
         appLink: '/GraphicDesignings'
    },
    {
        heading: "Link Building",
        Description: "Acquiring high-quality backlinks from reputable sources to improve website authority, visibility, and search engine rankings.",
        icon: 'fa fa-people-arrows',
        btn: 'Learn more',
        appLink: '/Ecommerce'
      },
      {
        heading: "Analytics and Reporting",
        Description: "Analyzing website traffic and user behavior to monitor and measure the effectiveness of SEO strategies, identify trends, and make data-driven decisions.",
        icon: 'fa fa-list-alt',
        btn: 'Learn more',
        appLink: '/DataScience'
      },
      {
        heading: "Reputation management",
        Description: "Monitoring and managing a company’s online reputation to ensure positive customer sentiment and minimize negative reviews or feedback.",
        icon: 'fa fa-user-shield',
        btn: 'Learn more',
        appLink : '/UIUX'
      },
      {
        heading: "Penalty recovery",
        Description: "Identifying and addressing any penalties or drops in search engine rankings due to algorithm updates or other factors, and developing a recovery plan to regain visibility.",
        icon: 'fa fa-hands',
         btn: 'Learn more',
         appLink : '/UIUX'
    },
]

  return (
    <>
      {/* <Navbar /> */}
      {/* <Hero img={seo} heading="Boosting Your Visibility with Proven SEO Strategies" desc="Our SEO experts at SkyTech optimize your online presence to rank higher in search engines, drive organic traffic, and improve your website’s visibility. We implement best practices to ensure long-term success and sustainable growth"/> */}
<Hero img={seo}/>
      <div className="container py-5">
        <h2 className="text-center ">
          Prepare your website for search engines
          <br />
          Common Types of Services <SkytehName/> Offered
        </h2>

      </div>
        <Services data={ServicesData}/>

    </>
  );
};

export default Seo;
