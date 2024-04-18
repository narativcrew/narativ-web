import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import { PrismicLink, PrismicRichText } from '@prismicio/react';
import * as prismicH from '@prismicio/helpers';
import styles from 'components/events/events.module.scss';
import FeaturedImage from 'components/FeaturedImage';

import { createClient } from '../../prismicio';

const dateFormatter = new Intl.DateTimeFormat('cs-CZ', {
    month: 'short',
    day: 'numeric',
    year: 'numeric',
});

const EventDetail = ({ evnt }) => {
    const start = prismicH.asDate(evnt.data.start_date);
    const end = prismicH.asDate(evnt.data.end_date);
    return (
        <>
            <FeaturedImage image={evnt.data.image.url} />
            <div className={cx(styles.eventDetailHeadingBox, 'text-center')}>
                <h1>{evnt.data.title}</h1>
                <span>
                    <i className="bi bi-cash-coin" />
                    {evnt.data.price},- {evnt.data.currency}
                </span>
                <span>
                    <i className="bi bi-calendar" />
                    {dateFormatter.format(start)} - {dateFormatter.format(end)}
                </span>
                <span>
                    <i className="bi bi-geo-alt" />
                    {evnt.data.venue}
                </span>
                <span>
                    <i className="bi bi-pen" />
                    <PrismicLink target="_blank" field={evnt.data.registration_link}>
                        Přihláška
                    </PrismicLink>
                </span>
            </div>
            <div className="container mt-5 mb-5">
                <div className="row justify-content-center">
                    <div className="col-md-8">
                        <PrismicRichText field={evnt.data.description} />
                    </div>
                </div>
            </div>
            {evnt.data.speakers && evnt.data.speakers.length > 0 && (
                <div>
                    <h2 className="text-center">Lektoři</h2>
                    <div className={styles.eventDetailSpeakerBox}>
                        <div className="container">
                            <div className="row justify-content-center mt-5">
                                {evnt.data.speakers.map((s) => (
                                    <div key={s.id} className="col-lg-6">
                                        <div className={cx(styles.speakerCard)}>
                                            <div
                                                className={styles.speakerCardImg}
                                                style={{ backgroundImage: `url(${s.speaker?.data?.image.url})` }}
                                            />
                                            <div className={cx('text-start', styles.speakerCardContent)}>
                                                <h5 className={styles.speakerCardTitle}>{s.speaker?.data?.name}</h5>
                                                <div className={styles.speakerCardText}>
                                                    <PrismicRichText field={s.speaker?.data?.info} />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
};

EventDetail.propTypes = {
    evnt: PropTypes.shape({
        data: PropTypes.shape({
            title: PropTypes.arrayOf(PropTypes.object).isRequired,
            description: PropTypes.arrayOf(PropTypes.object).isRequired,
            start_date: PropTypes.string.isRequired,
            end_date: PropTypes.string.isRequired,
            venue: PropTypes.string.isRequired,
            price: PropTypes.string.isRequired,
            currency: PropTypes.string.isRequired,
            image: PropTypes.shape({
                url: PropTypes.string.isRequired,
            }).isRequired,
            registration_link: PropTypes.shape({
                url: PropTypes.string,
                target: PropTypes.string,
            }).isRequired,
            speakers: PropTypes.arrayOf(
                PropTypes.shape({
                    speaker: PropTypes.shape({
                        data: PropTypes.shape({
                            name: PropTypes.arrayOf(PropTypes.object).isRequired,
                            info: PropTypes.arrayOf(PropTypes.object).isRequired,
                            short_info: PropTypes.arrayOf(PropTypes.object).isRequired,
                            image: PropTypes.shape({
                                url: PropTypes.string.isRequired,
                            }).isRequired,
                        }).isRequired,
                    }).isRequired,
                })
            ).isRequired,
        }).isRequired,
    }).isRequired,
};

export default EventDetail;

export async function getStaticProps({ params, previewData }) {
    const client = createClient({ previewData });
    const evnt = await client.getByUID('event', params.eventId, {
        fetchLinks: ['speaker.short_info', 'speaker.image', 'speaker.name', 'speaker.info'],
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
            evnt,
            footer,
        },
    };
}

export async function getStaticPaths() {
    const client = createClient();

    const events = await client.getAllByType('event');

    const paths = events.map((e) => ({
        params: { eventId: e.uid },
    }));

    return {
        paths,
        fallback: false,
    };
}
