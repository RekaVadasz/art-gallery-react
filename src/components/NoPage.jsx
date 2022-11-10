import React from 'react';
import Layout from './Layout';
import './NoPage.css';
import image from '../assets/astronaut-helmet.png'

function NoPage() {

    return (
        <Layout >
            <>
            <div className="no-page">
                <p>4</p>
                <img src={image} alt="helmet"/>
                <p>4</p>
            </div>
            <p className="no-page-par">Ooops... Nothing here. Please try another URL or go</p>
            <a href={"/"}><button className='no-page-button'>Home</button></a>
            </>
        </Layout>
    )
}

export default NoPage