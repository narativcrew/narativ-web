import React from 'react';
import Head from 'next/head';
import { createClient } from "../prismicio";

import HomepageHeader from '../components/homepage/HomepageHeader';
import HomepageEvents from '../components/homepage/HomepageEvents';
import HomepageNews from '../components/homepage/HomepageNews';

const HomePage = ({intro}) => (
    <>
        <Head>
            <title>Narativ</title>
            <meta property="og:title" content="Narativ" key="title" />
        </Head>

        <HomepageHeader intro={intro}/>
        <HomepageEvents />
        <HomepageNews />

    </>
);

export default HomePage;

export async function getStaticProps({ previewData }) {
    const client = createClient({ previewData });
    const intro = await client.getSingle('homepage');
    return {
        props: {
            intro
        },
    };
}
