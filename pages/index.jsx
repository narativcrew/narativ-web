import React from 'react';
import PropTypes from 'prop-types';
import Head from 'next/head';
import * as prismic from '@prismicio/client';

import { createClient } from '../prismicio';
import HomepageHeader from '../components/homepage/HomepageHeader';
import HomepageEvents from '../components/homepage/HomepageEvents';
import HomepageNews from '../components/homepage/HomepageNews';

const HomePage = ({ intro, attributes, events, news }) => (
    <>
        <Head>
            <title>Narativ</title>
            <meta property="og:title" content="Narativ" key="title" />
        </Head>

        <HomepageHeader intro={intro} attributes={attributes} />
        <HomepageEvents events={events} />
        <HomepageNews news={news} />
    </>
);

HomePage.propTypes = {
    intro: PropTypes.shape({
        data: PropTypes.shape({
            title: PropTypes.arrayOf(PropTypes.object).isRequired,
            description: PropTypes.arrayOf(PropTypes.object).isRequired,
            image: PropTypes.shape({
                url: PropTypes.string.isRequired,
            }).isRequired,
        }).isRequired,
    }).isRequired,
    attributes: PropTypes.arrayOf(
        PropTypes.shape({
            data: PropTypes.shape({
                title: PropTypes.arrayOf(PropTypes.object).isRequired,
                description: PropTypes.arrayOf(PropTypes.object).isRequired,
                image: PropTypes.shape({
                    url: PropTypes.string.isRequired,
                }).isRequired,
            }).isRequired,
        }).isRequired
    ).isRequired,
    events: PropTypes.arrayOf(
        PropTypes.shape({
            data: PropTypes.shape({
                title: PropTypes.arrayOf(PropTypes.object).isRequired,
                description: PropTypes.arrayOf(PropTypes.object).isRequired,
                image: PropTypes.shape({
                    url: PropTypes.string.isRequired,
                }).isRequired,
                start_date: PropTypes.string.isRequired,
                end_date: PropTypes.string.isRequired,
            }).isRequired,
        }).isRequired
    ).isRequired,
    news: PropTypes.arrayOf(
        PropTypes.shape({
            data: PropTypes.shape({
                title: PropTypes.arrayOf(PropTypes.object).isRequired,
                description: PropTypes.arrayOf(PropTypes.object).isRequired,
                image: PropTypes.shape({
                    url: PropTypes.string.isRequired,
                }).isRequired,
            }).isRequired,
        }).isRequired
    ).isRequired,
};

export default HomePage;

export async function getStaticProps({ previewData }) {
    const client = createClient({ previewData });
    const intro = await client.getSingle('homepage');
    const attributes = await client.getAllByType('homepage_attribute', {
        orderings: [{ field: 'document.data.order', direction: 'asc' }],
    });
    const events = await client.getAllByType('event', {
        predicates: [prismic.predicate.dateAfter('my.event.end_date', new Date())],
        orderings: [{ field: 'my.event.start_date', direction: 'asc' }],
    });
    const news = await client.getAllByType('news', {
        orderings: [{ field: 'document.last_publication_date', direction: 'desc' }],
    });

    // TODO: this needs to be somehow passed down to the Footer component
    /*
    const footerLeft = await client.getSingle('footer_column_left');
    console.log(footerLeft);
    const footerCenter = await client.getSingle('footer_column_center');
    console.log(footerCenter);
    const footerRight = await client.getSingle('footer_column_right');
    console.log(footerRight);
    */

    return {
        props: {
            intro,
            attributes,
            events,
            news,
        },
    };
}
