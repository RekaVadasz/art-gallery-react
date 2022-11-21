import React from 'react';

import Layout from './Layout';
import Newsletter from './Newsletter';
import Carousel from './Carousel';
import AllExhibitions from './AllExhibitions';
import Loader from './Loader';

import "./Home.css";

function Home() {
    return (
        <Layout>
            <Loader />
            <Carousel />
            <AllExhibitions />
            <Newsletter />
        </Layout>
    )
}

export default Home;