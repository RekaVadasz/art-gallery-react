import React from 'react';
import { useParams } from 'react-router-dom';

import './ExhibitionCollection.css';

import UseFetch from './services/UseFetch';
import Layout from './Layout';
import Loader from './Loader';
import ArtCard from './ArtCard';

function ExhibitionCollection() {

    const params = useParams();

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

    return (
        <Layout>
            {status !== 'fetched'
            ?
            <Loader />
            :
            <div className='exhibitionCollection-container'>
                <h1 className='exhibition-name'>{title}</h1>
                {data.objectIDs
                    .slice(0, 30)
                    .map((object) => {
                        const url = `https://collectionapi.metmuseum.org/public/collection/v1/objects/${object}` 
                        return (<ArtCard key={object} url={url} />)
                    })} 
            </div>}
        </Layout>
    )
}

export default ExhibitionCollection;