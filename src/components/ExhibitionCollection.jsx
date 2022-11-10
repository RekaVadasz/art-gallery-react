import React from 'react';

import ArtCard from './ArtCard';
import Layout from './Layout';
import './ExhibitionCollection.css'
import Loader from './Loader'
import UseFetch from './services/UseFetch'
import { useParams } from 'react-router-dom'

function ExhibitionCollection() {

    const params = useParams()

    // ALERT nagyon proli megoldás lesz
    let url = '';
    let title ='';
    if (params.name === 'cats') {
        url = "https://collectionapi.metmuseum.org/public/collection/v1/search?departmentId=10&q=cat";
        title = "Cats in Egyptian Art"
    } else if (params.name === 'nasa') {
        url = "https://collectionapi.metmuseum.org/public/collection/v1/search?q=nasa";
        title = "NASA Archive Gallery"
    } else if (params.name === 'calligraphy') {
        url = "https://collectionapi.metmuseum.org/public/collection/v1/search?departmentId=6&q=calligraphy";
        title = "Calligraphy in Asian Art"
    }

    
    const { status, data } = UseFetch(url);
    //data: all object numbers we need for the exhibition
    console.log("This is data: ", data)
    

    

    return (
        <Layout>

        {
        status !== 'fetched'
        ?
        <Loader />
        :
        <div className='exhibitionCollection-container'>

            <h1 className='exhibition-name'>{title}</h1>
           
            {data.objectIDs.slice(0, 30).map((object) => {
            
                const url = `https://collectionapi.metmuseum.org/public/collection/v1/objects/${object}` 

                return (
                <ArtCard 
                    key={object} 
                    url={url} 
                />)
            
            })} 
           
        
        </div>
        }

        </Layout>
    )
}

export default ExhibitionCollection


            /* 
            https://collectionapi.metmuseum.org/public/collection/v1/objects/${data[0]}
            const separateURLs = () => {
                let allDataUrl = []

                for(let i = 0; i<data.length; i++) {
                    allDataUrl.push( `https://collectionapi.metmuseum.org/public/collection/v1/objects/${data[i]}` )
                }

                return allDataUrl
            }

            data.map((artworkURL) => 

                    

                    <ArtCard 
                                key={artworkURL.objectID}
                                link={"/artwork/" + artwork.objectID}
                                title={artwork.title}
                                details={artwork.medium}
                                imageURL={artwork.primaryImageSmall}
                            />
            )
      */
               