import React from 'react';
import Head from 'next/head';
import { createClient } from "../prismicio";
import * as prismic from "@prismicio/client"

import HomepageHeader from '../components/homepage/HomepageHeader';
import HomepageEvents from '../components/homepage/HomepageEvents';
import HomepageNews from '../components/homepage/HomepageNews';

const HomePage = ({intro,attributes, events, news}) => (
    <>
        <Head>
            <title>Narativ</title>
            <meta property="og:title" content="Narativ" key="title" />
        </Head>

        <HomepageHeader intro={intro} attributes={attributes}/>
        <HomepageEvents events={events}/>
        <HomepageNews news={news}/>

    </>
);

export default HomePage;

export async function getStaticProps({ previewData }) {
    const client = createClient({ previewData });
    const intro = await client.getSingle('homepage');
    const attributes = await client.getAllByType('homepage_attribute', {
        orderings: [
            { field: "document.data.order", direction: "asc" },
          ]
    });
    const events = await client.getAllByType('event', {
        //NOT WORKING FOR SOME REASON :/
        //asked on SO https://stackoverflow.com/questions/75573159/prismic-query-predicates-misinterpreting-timestamp-field-type
        // predicates : [
        //     prismic.predicate.dateAfter("document.data.end_date", new Date()) 
        // ],
        orderings: [
            {field :"document.data.start_date", direction: "asc"}
        ]
    });
    const news = await client.getAllByType('news', {
        orderings: [
            { field: "document.last_publication_date", direction: "desc" },
          ],
    });

    //TODO: this needs to be somehow passed down to the Footer component
    const footerLeft = await client.getSingle('footer_column_left');
    console.log(footerLeft)
    const footerCenter = await client.getSingle('footer_column_center');
    console.log(footerCenter)
    const footerRight = await client.getSingle('footer_column_right');
    console.log(footerRight)

    return {
        props: {
            intro,
            attributes,
            events,
            news
        },
    };
}
