import React from 'react'
import './Styles/sidebanner.css'

const SideBanner = (props) => {
  return (
    <div className='banner container mt-4'>
        <div className="sidebanner row mb-5 d-flex align-item-center">
            <div className="left col-md-6 ">
                <h2>{props.heading}</h2>
                <p>{props.paragraph}</p>
            </div>

            <div className="right col-md-6 d-flex justify-content-center align-item-center">
                    <img className='my-auto' src={props.img} alt="" />
            </div>
        </div>
    </div>
  )
}

export default SideBanner