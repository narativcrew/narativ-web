import React from 'react';
import Head from 'next/head';

import HomepageHeader from '../components/homepage/HomepageHeader';
import HomepageEvents from '../components/homepage/HomepageEvents';
import HomepageNews from '../components/homepage/HomepageNews';

const HomePage = () => (
    <>
        <Head>
            <title>Narativ</title>
            <meta property="og:title" content="Narativ" key="title" />
        </Head>

        <HomepageHeader/>
        <HomepageEvents />
        <HomepageNews />

        
                
           
    </>
);

export default HomePage;
