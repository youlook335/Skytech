import React from 'react'
import './Readytowork.css'
 import { Link } from 'react-router-dom'

const Readytowork = () => {
  return (
    <>
<div className='last'>
  <h2 className='lastheadinf'>Ready to work with us?</h2>
  <button className='btn btn-outline-light text-white '><Link to="/Contact">Contact Us</Link></button>
</div>

    </>
 )
}

export default Readytowork