import React from 'react';
import Layout from './Layout';

import Newsletter from './Newsletter';

import "./Home.css";
import Carousel from './Carousel';
import Exhibitions from './Exhibitions'
import Loader from './Loader'

function Home() {
  return (
    <Layout>
      <Loader />
        <Carousel />
        <Exhibitions />
        <Newsletter />
    </Layout>
  )
}

export default Home