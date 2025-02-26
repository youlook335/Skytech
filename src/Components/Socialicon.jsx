import React from 'react'
import "../Components/Styles/SocialIcons.css"
import { BiLogoWhatsappSquare } from 'react-icons/bi'


const SocialIcons = () => {
  return (
<div className='icons-wastapp'>     
<a href="https://wa.me/923335673810" target='blank' rel=''>
<img src="public/assets/watsapp.jpeg" alt="" />
{/* <BiLogoWhatsappSquare /> */}
</a>
    </div>
  )
}

export default SocialIcons
