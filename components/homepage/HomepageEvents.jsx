import React from 'react';
import PropTypes from 'prop-types';
import Link from 'next/link';
import stylesEvents from 'components/events/events.module.scss';
import { EventListItem } from 'components/events';
import { BlockButton } from 'components/Buttons';
import { PrismicRichText } from '@prismicio/react';

const HomepageEvents = ({ eventsHeader, events }) => (
    <div className="container mt-5">
        <div className={stylesEvents.event_list__description}>
            <div className="row">
                <div className="col-md-6">
                    <h1>{eventsHeader.data.title}</h1>
                </div>
                <div className="col-md-6">
                    {eventsHeader?.data.description && <PrismicRichText field={eventsHeader.data.description} />}
                </div>
            </div>
        </div>
        <div className="row">
            {events.length === 0 ? (
                <div className="text-center py-5">
                    Žádné nadcházející akce. Podívejte se na naše <Link href="/akce">minulé akce</Link>
                </div>
            ) : (
                <>
                    {events.map((e) => (
                        <div key={e.uid} className="col-md-6">
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
        {events.length > 0 && (
            <div className="row">
                <div className="col-md-6 offset-md-6 text-center">
                    <Link href="/akce">
                        <BlockButton>Zobrazit další akce</BlockButton>
                    </Link>
                </div>
            </div>
        )}
    </div>
);

HomepageEvents.propTypes = {
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
};

export default HomepageEvents;
