import React from 'react'
import './serviceData.css'

const Servicesdata = ({heading,description}) => {
  return (
    <>
    <div className="main-heading mt-5">
        <h4 className='heads text-primary '>{heading}</h4>
        <p className='descriptionPara' >{description}</p>
    </div>
    </>
  )
}

export default Servicesdata