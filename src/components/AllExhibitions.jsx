import React from 'react';

import ExhibitionIntro from './ExhibitionIntro';

import './AllExhibitions.css';

function AllExhibitions() {
    return (
        <div id="exhibitions-container">

            <div className='online-exhibitions'>
                <h2>online</h2>
                <h1>exhibitions</h1>
            </div>

            <ExhibitionIntro 
                type="NASA Archive Photo Gallery" 
                details="Archive photographs from the heroic era of space exploration. The collection features iconic images from the times with little or no technology in digital photography." 
                exhibitionLink="/exhibitions/nasa"
                imageURL="https://images.metmuseum.org/CRDImages/ph/web-large/DP-15797-029.jpg"
                //https://collectionapi.metmuseum.org/public/collection/v1/search?q=nasa
            />

            <ExhibitionIntro 
                type="The Art of Calligraphy" 
                details="Calligraphy, the art of beautiful writing, was long considered the supreme art form in China, Japan, and Korea. This elevated status reflects the importance of the written word in East Asian cultures. In ancient China, early emperors asserted their power by engraving edicts or pronouncements on stone in their own calligraphic script." 
                exhibitionLink="/exhibitions/calligraphy"
                imageURL="https://images.metmuseum.org/CRDImages/as/original/DP204660_CRD.jpg"
                //https://collectionapi.metmuseum.org/public/collection/v1/search?departmentId=6&q=calligraphy
            />

            <ExhibitionIntro 
                type="Cats in Egyptian Art" 
                details="Bastet was a powerful goddess of Lower Egypt, one who was protective and could bring about great prosperity. In zoomorphic form, she was represented as a cat and cats were considered sacred to her." 
                exhibitionLink="/exhibitions/cats"
                imageURL="https://images.metmuseum.org/CRDImages/eg/original/LC-04_2_471_EGDP031183.jpg"
                //https://collectionapi.metmuseum.org/public/collection/v1/search?departmentId=10&q=cat
            />
        </div>
    )
}

export default AllExhibitions;