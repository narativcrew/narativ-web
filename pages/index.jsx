import React from 'react';
import PropTypes from 'prop-types';
import Head from 'next/head';
import * as prismic from '@prismicio/client';

import { createClient } from '../prismicio';
import HomepageHeader from '../components/homepage/HomepageHeader';
import HomepageEvents from '../components/homepage/HomepageEvents';
import HomepageNews from '../components/homepage/HomepageNews';

const HomePage = ({ intro, attributes, eventsHeader, events, news }) => (
    <>
        <Head>
            <title>Narativ</title>
            <meta property="og:title" content="Narativ" key="title" />
        </Head>

        <HomepageHeader intro={intro} attributes={attributes} />
        <HomepageEvents eventsHeader={eventsHeader} events={events} />
        <HomepageNews news={news} />
    </>
);

HomePage.propTypes = {
    intro: PropTypes.shape({
        data: PropTypes.shape({
            title: PropTypes.string.isRequired,
            description: PropTypes.arrayOf(PropTypes.object).isRequired,
            image: PropTypes.shape({
                url: PropTypes.string.isRequired,
            }).isRequired,
        }).isRequired,
    }).isRequired,
    attributes: PropTypes.arrayOf(
        PropTypes.shape({
            data: PropTypes.shape({
                title: PropTypes.string.isRequired,
                description: PropTypes.arrayOf(PropTypes.object).isRequired,
            }).isRequired,
        }).isRequired
    ).isRequired,
    eventsHeader: PropTypes.shape({
        data: PropTypes.shape({
            title: PropTypes.string.isRequired,
            description: PropTypes.arrayOf(PropTypes.object).isRequired,
        }).isRequired,
    }).isRequired,
    events: PropTypes.arrayOf(
        PropTypes.shape({
            data: PropTypes.shape({
                title: PropTypes.string.isRequired,
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
                title: PropTypes.string.isRequired,
                description: PropTypes.arrayOf(PropTypes.object).isRequired,
            }).isRequired,
        }).isRequired
    ).isRequired,
};

export default HomePage;

export async function getStaticProps({ previewData }) {
    const client = createClient({ previewData });
    const intro = await client.getSingle('homepage');
    const eventsHeader = await client.getSingle('homepage_events_header');
    const attributes = await client.getAllByType('homepage_attribute');
    const events = await client.getAllByType('event', {
        predicates: [prismic.predicate.dateAfter('my.event.end_date', new Date())],
        orderings: [{ field: 'my.event.start_date', direction: 'asc' }],
    });
    const news = await client.getAllByType('news', {
        orderings: [{ field: 'document.last_publication_date', direction: 'desc' }],
    });

    const footerLeft = await client.getSingle('footer_column_left');
    const footerCenter = await client.getSingle('footer_column_center');
    const footerRight = await client.getSingle('footer_column_right');

    const footer = {
        footerLeft,
        footerCenter,
        footerRight,
    };

    return {
        props: {
            intro,
            attributes,
            eventsHeader,
            events,
            news,
            footer,
        },
    };
}
