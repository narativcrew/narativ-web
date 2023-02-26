import React from 'react';
import cx from 'classnames';
import { createClient } from '../../prismicio';
import styles from 'components/events/events.module.scss';
import FeaturedImage from 'components/FeaturedImage';
import bg from 'public/images/placeholders/loek-wide.webp';

import { BlockButton } from '../../components/Buttons';
import { PrismicLink, PrismicRichText } from '@prismicio/react';
import FeaturedBlock from 'components/FeaturedBlock';
import * as prismicH from '@prismicio/helpers';


const dateFormatter = new Intl.DateTimeFormat("cs-CZ", {
    month: "short",
    day: "numeric",
    year: "numeric",
  });

const EventDetail = ({ evnt }) => {
    const start = prismicH.asDate(evnt.data.start_date);
    const end = prismicH.asDate(evnt.data.end_date); 
    return <>
        <FeaturedImage image={bg} />
        <div className={cx(styles.eventDetailHeadingBox, 'text-center')}>
            <h1>{evnt.data.title}</h1>
            <span>
                <i className="bi bi-cash-coin" />
                {evnt.data.price},- Kč
            </span>
            <span>
                <i className="bi bi-calendar" />
                {dateFormatter.format(start)} - {dateFormatter.format(end)}
            </span>
            <span>
                <i className="bi bi-geo-alt" />
                {evnt.data.venue}
            </span>
        </div>
        <div className="container mt-5 mb-5">
            <div className="row justify-content-center">
                <div className="col-md-8">
                    <PrismicRichText field={evnt.data.description} />
                </div>
            </div>
            <div className="row justify-content-center">
                <div className="col-md-3">
                    <BlockButton>
                        <PrismicLink field={evnt.data.registration_link}>Prihlasit se na kurz</PrismicLink>
                    </BlockButton>
                </div>
            </div>
        </div>
        {evnt.data.speakers.length > 0 && (
            <>
                {evnt.data.speakers.map((s) => (
                    <>
                        {s.speaker.data.main_speaker == true && (
                            <FeaturedBlock text={s.speaker.data.short_info} image={s.speaker.data.image.url} />
                        )}
                        <div className="container">
                            <div className="row justify-content-center mt-5">
                                <div className="col-md-8">
                                    <h4>{s.speaker.data.name}</h4>
                                    <PrismicRichText field={s.speaker.data.info} />
                                </div>
                            </div>
                        </div>
                    </>
                ))}
            </>
        )}
    </>
};

export default EventDetail;

export async function getStaticProps({ params, previewData }) {
    const client = createClient({ previewData });
    console.log('eventId: ' + params.eventId);
    const evnt = await client.getByUID('event', params.eventId, {
        fetchLinks: ['speaker.short_info', 'speaker.image', 'speaker.name', 'speaker.info', 'speaker.main_speaker'],
    });
    console.log(evnt.data.speakers);
    return {
        props: {
            evnt,
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
