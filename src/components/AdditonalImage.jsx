//unused component
import React from 'react';
import { useState } from 'react';

export default function AdditionalImage (data) {
    
    const [isDark, setDark] = useState(true);

    const handleClick = () => {
        //something will happen
    };

    const handleMouseOver = () => {
        setDark(false)
    };

    const handleMouseOut = () => {
        setDark(true)
    };

    return (
        <img 
            onClick={handleClick} 
            onMouseOver={handleMouseOver}
            onMouseOut={handleMouseOut}
            src={"https://images.metmuseum.org/CRDImages/eg/original/45.4.6_EGDP014408.jpg"} 
            alt="artwork" 
            className={isDark ? "additional-image-darken" : ""}
        />
    )
}