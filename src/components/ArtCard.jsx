import React, {useState} from 'react'
import { Link } from 'react-router-dom'
import './ArtCard.css'
import Bookmark from './Bookmark';
import UseFetch from './services/UseFetch';
import image from '../assets/astronaut_tool.png'


function ArtCard({ url }) {

    const { status, data} = UseFetch(url)
    console.log(data)

    
    const[isVisible, setVisible] = useState(false)

    if (data.primaryImageSmall === "") return;
    
    const handleMouseOver = () => {
        setVisible(true)
    }
    const handleMouseOut = () => {
        setVisible(false)
    }


    return (
        <>
        {
        status !== 'fetched'
        ?
        <div className="image-section">
            <img src={image} alt="astronaut with tool"/>    
        </div>
        :
        <div className="card-container">

            <div className="image-section">
                <Link 
                    to={"/artwork/" + data.objectID}
                    onMouseOut={handleMouseOut} 
                    className={isVisible ? "darken" : "hidden"}>MORE INFO
                </Link>
                <img 
                    onMouseOver={handleMouseOver} 
                    src={data.primaryImageSmall} alt="Artwork" 
                    /* src="https://images.metmuseum.org/CRDImages/eg/original/LC-04_2_471_EGDP031183.jpg" alt="" */
                />
                <Bookmark />
            </div>

            <h4>{data.title}</h4>
            {/* <h4>Cat with image of Bastet on breast</h4> */}
            <div className="hr"></div>
            <p>{data.medium}</p>
            {/* <p>Metropolitan Museum of Art, New York, NY</p> */}

        </div>
        }
        </>
    )
}

export default ArtCard