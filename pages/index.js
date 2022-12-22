import Head from 'next/head';
// import { SliceZone } from '@prismicio/react'

import { createClient } from '../prismicio';
// import { components } from '../slices'

import HomepageHeader from '/components/homepage/HomepageHeader';
import HomepageEvents from '/components/homepage/HomepageEvents';
import HomepageNews from '../components/homepage/HomepageNews';

export async function getStaticProps({ previewData }) {
    const client = createClient({ previewData });

    const page = await client.getSingle('homepage');

    return {
        props: {
            page,
        },
    };
}

const HomePage = ({ page, navigation, settings }) => (
    <>
        <Head>
            <title>Narativ</title>
            <meta property="og:title" content="Narativ" key="title" />
        </Head>

        <HomepageHeader />
        <HomepageEvents />
        <HomepageNews />

        {/*
                <SliceZone slices={page.data.slices} components={components} />
            */}
    </>
);

export default HomePage;
