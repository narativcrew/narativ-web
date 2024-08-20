import React from 'react';
import PropTypes from 'prop-types';
import Head from 'next/head';
import * as prismic from '@prismicio/client';
import { EventListItem } from 'components/events';
import stylesEvents from 'components/events/events.module.scss';

import { createClient } from '../../prismicio';
import HeaderBanner from '../../components/HeaderBanner';

const Events = ({ headerImage, events, pastEvents }) => (
    <>
        <Head>
            <title>Narativ | Akce</title>
            <meta property="og:title" content="Narativ | Akce" key="title" />
        </Head>

        <HeaderBanner title="Spolek Narativ pořádá" image={headerImage.data.image.url} />

        <div className={stylesEvents.eventsBox}>
            <div className="container py-5">
                <div className="row">
                    {events.length === 0 ? (
                        <div className="text-center py-5">Žádné nadcházející akce.</div>
                    ) : (
                        <>
                            {events.map((pe) => (
                                <div className="col-md-6" key={pe.uid}>
                                    <EventListItem
                                        id={pe.uid}
                                        title={pe.data.title}
                                        startDate={pe.data.start_date}
                                        endDate={pe.data.end_date}
                                        venue={pe.data.venue}
                                        description={pe.data.description}
                                        image={pe.data.image.url}
                                    />
                                </div>
                            ))}
                        </>
                    )}
                </div>
                <div className="row">
                    <div className="col-md-6">
                        <h1>Minulé akce</h1>
                    </div>
                </div>
                <div className="row">
                    {pastEvents.length === 0 ? (
                        <div className="text-center py-5">Žádné minlé akce.</div>
                    ) : (
                        <>
                            {pastEvents.map((e) => (
                                <div className="col-md-6" key={e.uid}>
                                    <EventListItem
                                        id={e.uid}
                                        title={e.data.title}
                                        startDate={e.data.start_date}
                                        endDate={e.data.end_date}
                                        venue={e.data.venue}
                                        description={e.data.description}
                                        image={e.data.image.url}
                                    />
                                </div>
                            ))}
                        </>
                    )}
                </div>
            </div>
        </div>
    </>
);

Events.propTypes = {
    headerImage: PropTypes.shape({
        data: PropTypes.shape({
            image: PropTypes.shape({
                url: PropTypes.string.isRequired,
            }).isRequired,
        }).isRequired,
    }).isRequired,
    events: PropTypes.arrayOf(
        PropTypes.shape({
            uid: PropTypes.string.isRequired,
            data: PropTypes.shape({
                title: PropTypes.string.isRequired,
                description: PropTypes.arrayOf(PropTypes.object).isRequired,
                start_date: PropTypes.string.isRequired,
                end_date: PropTypes.string,
                venue: PropTypes.string.isRequired,
                image: PropTypes.shape({
                    url: PropTypes.string.isRequired,
                }).isRequired,
            }).isRequired,
        }).isRequired
    ).isRequired,
    pastEvents: PropTypes.arrayOf(
        PropTypes.shape({
            uid: PropTypes.string.isRequired,
            data: PropTypes.shape({
                title: PropTypes.string.isRequired,
                description: PropTypes.arrayOf(PropTypes.object).isRequired,
                start_date: PropTypes.string.isRequired,
                end_date: PropTypes.string,
                venue: PropTypes.string.isRequired,
                image: PropTypes.shape({
                    url: PropTypes.string.isRequired,
                }).isRequired,
            }).isRequired,
        }).isRequired
    ).isRequired,
};

export default Events;

export async function getStaticProps({ previewData }) {
    const client = createClient({ previewData });
    const headerImage = await client.getSingle('events_header_image');

    const events = await client.getAllByType('event', {
        predicates: [prismic.predicate.dateAfter('my.event.start_date', new Date())],
        orderings: [{ field: 'my.event.start_date', direction: 'asc' }],
    });

    const pastEvents = await client.getAllByType('event', {
        predicates: [prismic.predicate.dateBefore('my.event.end_date', new Date())],
        orderings: [{ field: 'my.event.start_date', direction: 'asc' }],
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
        props: { headerImage, events, pastEvents, footer },
    };
}
