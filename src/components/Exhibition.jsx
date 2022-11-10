import React from 'react'
import { NavLink } from 'react-router-dom';

import './Exhibition.css'

function Exhibition({type, details, exhibitionLink, imageURL}) {

  return (

    <div className="exhibition-container">
        
        <div className="exhibition-details">
            <h4>{type}</h4>
            <p>{details}</p>

            <button>
              <NavLink 
                className='explore-btn' 
                to={exhibitionLink} 
/*                 target="_blank"
 */              >
                <div></div>
                EXPLORE
              </NavLink>
            </button>

        </div>

        <div className="exhibition-image-container">
            
            <img 
                src={imageURL} alt="" />
        </div>

    </div>
  )
}

export default Exhibition