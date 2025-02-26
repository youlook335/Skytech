import React, { useEffect, useRef } from 'react'
import './Styles/Navbar.css'
import { Link } from 'react-router-dom'

const Navbar = () => {

  //Logo Animation

  const logo = useRef(null);
  const award = useRef(null);
  const animationCont = useRef(null);

  useEffect(() => {
    const animatedLogo = setInterval(() => {
      if (award.current && logo.current) {
        if (award.current.style.display === 'block') {
          logo.current.style.display = 'block' ;
          award.current.style.display = 'none';
        } else {
          logo.current.style.display = 'none';
          award.current.style.display = 'block';
        }
      }
    }, 3000);
    return () => {
      clearInterval(animatedLogo)
    };
  }, []);

  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light ">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">
            <div className="animation-cont" ref={animationCont}>
              <div className="navbar-brand-logo" ref={logo}>
                <span className='text-primary sky-in-logo'>sky</span>tech<span className='text-primary dot-in-logo'>.</span>
              </div>
              <div className="award-cont" ref={award}>
                <p className='award'>Award-Winning</p><p className='agency'>Agency</p>
              </div>
            </div>
          </Link>
          <button className="navbar-toggler bg-primary outline-none border-none" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon bg-primary"></span>
          </button>
          <div className="collapse navbar-collapse " id="navbarSupportedContent">
            <ul className="navbar-nav m-auto mb-2 mb-lg-0">
              <li className="nav-item d-flex justify-content-start fw-bold ms-3 me-3">
                <Link className="nav-link " aria-current="page" to="/">Home</Link>
              </li>
              <li className="nav-item d-flex justify-content-start fw-bold ms-3 me-3">
                <Link className="nav-link" to="/About">About</Link>
              </li>
              <li className="nav-item d-flex justify-content-start dropdown fw-bold ms-3 me-3">
                <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  Projects
                </a>
                <ul className="dropdown-menu fw-bold">
                  <li><Link className="dropdown-item" to="/Websites">Websites</Link></li>
                  <li><Link className="dropdown-item" to="/Designing">Designing</Link></li>
                  <li><Link className="dropdown-item" to="/DigitalMarketing">Digital Marketing</Link></li>
                  <li><Link className="dropdown-item" to="/digital">Digital Partner-Events</Link></li>
                  <li><Link className="dropdown-item" to="/Ecommerce">E-Commerce</Link></li>
                  <li><Link className="dropdown-item" to="/Seo">SEO</Link></li>
                  {/* <li><Link className="dropdown-item" to="/SoftwareDevelopment">Software Development</Link></li> */}
                </ul>
              </li>
              <li className="nav-item d-flex justify-content-start dropdown fw-bold ms-3 me-3">
                <a className="nav-link dropdown-toggle " href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  Services
                </a>
                <ul className="dropdown-menu fw-bold">
                  <li><Link className="dropdown-item" to="/SoftwareDevelopment">Software Development</Link></li>
                  <li><Link className="dropdown-item" to="/Webdevelopment">Web Development</Link></li>
                  <li><Link className="dropdown-item" to="/Degitalmrkiting">Digital Marketing</Link></li>
                  <li><Link className="dropdown-item" to="/UIUX">UIUX Designings </Link></li>
                  <li><Link className="dropdown-item" to="/GraphicDesignings">Graphic Designings </Link></li>
                  <li><Link className='dropdown-item' to="/Vedio"> Video Editing</Link></li>
                  <li><Link className="dropdown-item" to="/ContentWriting">Content Writing Services</Link></li>
                  <li><Link className="dropdown-item" to="/Table">Woo Commerce</Link></li>
                  {/* <li><Link className="dropdown-item" to="/DesigningServices">Designing Services</Link></li> */}
                </ul>
              </li>
              <li className="nav-item d-flex justify-content-start fw-bold ms-3 me-3">
                <Link className="nav-link " to="/Career">Careers</Link>
              </li>
              <li className="nav-item d-flex justify-content-start fw-bold ms-3 me-3">
                <Link className="nav-link" to="/Contact">Contacts</Link>
              </li>
              
              <li className="nav-item d-flex justify-content-start fw-bold ms-3 me-3">
                <Link className="nav-link" to="/Packages">Packages</Link>
              </li>
            </ul>
            <form className="quote d-flex justify-content-start" role="search">
              <Link className="btn btn-primary d-flex justify-content-center fs-6" to="/Quote" type="submit">Get a Quote</Link>
            </form>
          </div>

        </div>
      </nav>

    </>

  )
}

export default Navbar