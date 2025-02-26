 import React, { useEffect } from 'react'
import './Components/Styles/Translator.css'
import img from './assets/translate.png'

const Translater = () => {
    useEffect(() => {
        if (navigator.onLine){
            window.googleTranslator = new window.google.translate.TranslateElement(
                {pageLanguage: 'en'},
                "translatorId"
            );
      }
    }, [])
    

    const openMenu = () => {
        const menu = document.querySelector(".lang-menu");
        if (menu.style.display === "block") {
            menu.style.display = "none";
        } else {
            menu.style.display = "block";
        }
    }
    
    const translateto = (lang) => {
        const combo = document.querySelector(".goog-te-combo");
        
        if (combo) {
            combo.value = lang;
            combo.dispatchEvent(new Event("change"));
        }
    }
    
  return (
    <div id='translatorId'>
        {/* <img onClick={()=>translateto('es')} src={img} alt="" /> */}
        <div className="lang-menu">
            <div onClick={()=>translateto('en')}>English</div>
            <div onClick={()=>translateto('ur')}>Urdu</div>
            <div onClick={()=>translateto('ar')}>Arabic</div>
            <div onClick={()=>translateto('es')}>Spanish</div>
            <div onClick={()=>translateto('fr')}>French</div>
            <div onClick={()=>translateto('de')}>German</div>
            <div onClick={()=>translateto('it')}>Italic</div>
            <div onClick={()=>translateto('zh-CN')}>Chinese</div>
        </div>

        <img className='lang-img' onClick={openMenu} src={img} alt="" />
    </div>
  )
}

export default Translater