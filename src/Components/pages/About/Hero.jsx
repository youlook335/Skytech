import React from 'react'
import './Hero.css'

const Hero = () => {
  return (
    <>
    <div className="hero">
        <div className="hero-top">
            <img src="https://www.skytech.com.pk/wp-content/uploads/2023/08/cropped-Skytech_Pre-Loader.png.webp" alt="" />
            <button className="courses">Courses
            <i className="fa-solid fa-angles-down"></i>
            </button>
            <button className="career">Careers
            <i className="fa-solid fa-angle-down"></i>
            </button>
        </div>
        <div className="container">
            <div className="text-box">
                <h1>Delivering Excellence To <br />  Our Clients</h1>
                <p>At SKYTech. we are more than a development firm we are your partners in turning ideas into powerful solutions. With a team of dedicated professionals, we combine cutting-edge technology with creative expertise to craft software that drives growth and transforms industries.</p>
                <br />
                <button className='exp'>Explore</button>
                <button className='cus'>Contact Us</button>
            </div>
        </div>
    </div>
    </>
  )
}

export default Hero