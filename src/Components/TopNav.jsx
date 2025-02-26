import React from 'react'
import { FaClock, FaFacebook, FaFlag, FaLinkedinIn, FaPhoneAlt } from 'react-icons/fa';
import "./navtop.css"
import { MdEmail } from 'react-icons/md';
import { FaEnvelope, FaInstagram, FaPinterest, FaSquareThreads, FaYoutube } from 'react-icons/fa6';

const TopNav = () => {
    const NavtopData =[
        {
        name : "Karachi pakistan",
        icon : <FaFlag/>
        },
        {
            name : "Monday to Saturday",
            icon:<FaClock/>
        },
        {
            name : "info@skytech.com.pk",
            
            icon:<MdEmail />},
        {
            name : "+9233-5673810",
            icon:<FaPhoneAlt />}
    ]
  return (
<>
<div className="navTop d-flex ">
{NavtopData.map((item,index)=>(
    <div className='navTopIndex d-flex ' key={index}>
        <div className='navTopIcons text-sm '>{item.icon}</div>
        <div className='navTopName text-sm '>{item.name}</div>
    </div>
))}
<div className="socialicons ">   
    <div className='fb'>
    <a
                href="https://www.facebook.com/people/Skytech/61551669712091/"
                target="_blank"
                rel="noopener noreferrer"
              >
    <FaFacebook />
   </a>
    </div>  
    <div  className='INSYT'>
    <a
                href="https://www.instagram.com/sky_techdot/"
                target="_blank"
                rel="noopener noreferrer"
              >
              
        <FaInstagram/>
    </a>
    </div>  
    <div  className='Linkedin'>  
    <a
                href="https://www.linkedin.com/company/sky-tech-dot/"
                target="_blank"
                rel="noopener noreferrer"
              >
    <FaLinkedinIn />
    </a>
    </div>
   
    <div  className='INSYT'>
        <a href="https://www.youtube.com/channel/UC6B3bIIbojskLZCEaLCgqlg"
        target='blank'
        rel="noopener noreferrer"
        >
        <FaYoutube/>
        </a>
    </div>
    <div  className='PIN'>
        <a
        href="https://www.pinterest.com/skytechdot/"
        target='blank'
        rel="noopener noreferrer"
        
        >
            <FaPinterest />
        </a>
    </div> <div  className='Thread'>
        <a
                href="https://www.threads.net/?hl=en"
        target='blank'
        rel="noopener noreferrer"
        >
      <FaSquareThreads />
      </a>
    </div> <div  className='Mail'>
        <a 
        href="mailto:info@skytech.com.pk"
          target='blank'
        rel="noopener noreferrer"
        >
<FaEnvelope />
        </a>
    </div>
      </div>

      </div>
</>  
)
}

export default TopNav