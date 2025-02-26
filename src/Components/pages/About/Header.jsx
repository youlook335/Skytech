import React from 'react'
import "./Header.css"

const Header = () => {
  return (
    <>
        <div className="header">
            <div className="container">
                <img src="https://www.skytech.com.pk/wp-content/uploads/2023/08/cropped-Skytech_Pre-Loader.png.webp" alt="" />
                <div className="nav">
                    <ul>
                        <li>Home</li>
                        <li>About</li>
                        <li>Projects</li>
                        <li>Sevices</li>
                        <li>Career</li>
                        <li>Contact</li>
                    </ul>
                </div>
                <button></button>
            </div>
        </div>
    </>
  )
}

export default Header;