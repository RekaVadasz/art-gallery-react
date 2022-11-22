import { React, useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useParams } from 'react-router-dom'

import './Artwork.css';

import Layout from './Layout';
import UseFetch from './services/UseFetch';
import Loader from './Loader';

function Artwork() {
    
    const params = useParams();
    
    const url = `https://collectionapi.metmuseum.org/public/collection/v1/objects/${params.name}`;
    
    const navigate = useNavigate();
    const { status, data } = UseFetch(url);
    const [ isBookmarked, setBookmarked ] = useState(false);
    const [ imageSrc, setImageSrc ] = useState();
    const [ isExpanded, setExpanded ] = useState(false);

    useEffect(() => {
        if (status === 'fetched'){
            setImageSrc(data.primaryImage)
        }
     
    }, [status, data.primaryImage])
    
    const handleBookmarked = () => {
        setBookmarked(!isBookmarked)
    };

    const handleExpanded = () => {
        setExpanded(!isExpanded)
    };

    return (
        <>
        {isExpanded 
        && 
        <div className='expanded-image'>
            <img src={imageSrc} alt="artwork"/>  

            <div onClick={handleExpanded} className='close-container'>
                <i className="fa-solid fa-xmark"></i>
            </div>

        </div>}

        {status !== 'fetched'
        ?
        <Loader />
        :
        <Layout>
            <div className='artwork-container'>

                
                <h1>{data.title}</h1>
                
                <h3>{data.objectDate}</h3>

                <section className='artwork-image-container'> 

                    <div className='main-image-container'>
                        <img src={imageSrc} alt="artwork"/>
                        <i 
                            onClick={handleExpanded} 
                            className='fa-solid fa-expand'></i>
                        <i 
                            onClick={handleBookmarked}  
                            className={isBookmarked ? 'fa-solid fa-bookmark' : 'far fa-bookmark'}>
                        </i>
                    </div>

                </section>    
               
                <section className='artwork-data'>

                    <div className='artwork-data-inner'>
                        <div className='artwork-title'> {/* these classnames are not necessary */}
                            <p>Title:</p>
                            <p>{data.title}</p>
                        </div>
                        <div className='artwork-artist'>
                            <p>Artist:</p>
                            {data.artistDisplayName === ''
                            ? <p>Unknown</p>
                            :<p>{data.artistDisplayName}</p>}
                        </div>
                        <div className='artwork-department'>
                            <p>Department:</p>
                            <p>{data.department}</p>
                        </div>
                        <div className='artwork-date'>
                            <p>Date:</p>
                            <p>{data.objectDate}</p>
                        </div>
                    </div>

                    <div className='artwork-data-inner'>
                        <div className='artwork-credit'>
                            <p>Credit Line:</p>
                            <p>{data.creditLine}</p>
                        </div>
                        <div className='artwork-object-type'>
                            <p>Object type:</p>
                            <p>{data.objectName}</p>
                        </div>
                        <div className='artwork-medium'>
                            <p>Medium:</p>
                            <p>{data.medium}</p>
                        </div>
                        <div className='artwork-dimensions'>
                            <p>Dimensions:</p>
                            <p>{data.dimensions}</p>
                        </div>
                    </div>

                </section>
                    
                <button onClick={() => navigate(-1)}>Return to exhibition</button>

            </div>
        </Layout>
        }
        </>
    )
}

export default Artwork;