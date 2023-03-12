import React from 'react';
import PropTypes from 'prop-types';
import Link from 'next/link';
import stylesEvents from 'components/events/events.module.scss';
import { EventListItem } from 'components/events';
import { BlockButton } from 'components/Buttons';

const HomepageEvents = ({ events }) => (
    <div className="container mt-5">
        <div className={stylesEvents.event_list__description}>
            <div className="row">
                <div className="col-md-6">
                    <h1>Spolek Narativ pořádá:</h1>
                </div>
                <div className="col-md-6">
                    <p>
                        Snažíme se vytvářet horizontální, neformální a mimoinstitucionální dialogické prostory -
                        setkáváme se tak mezi sebou, s kolegy ze sociálně zaměřených praxí, účastníky našich
                        vzdělávacích akcí, programů a workshopů, s našimi klienty, nebo s autory knih, které překládáme.
                    </p>
                </div>
            </div>
        </div>
        <div className="row">
            {events.length > 0 && (
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
        <div className="row">
            <div className="col-md-6 offset-md-6 text-center">
                <Link href="/akce">
                    <BlockButton>Zobrazit další akce</BlockButton>
                </Link>
            </div>
        </div>
    </div>
);

HomepageEvents.propTypes = {
    events: PropTypes.arrayOf(
        PropTypes.shape({
            uid: PropTypes.string.isRequired,
            data: PropTypes.shape({
                title: PropTypes.arrayOf(PropTypes.object).isRequired,
                description: PropTypes.arrayOf(PropTypes.object).isRequired,
                start_date: PropTypes.string.isRequired,
                end_date: PropTypes.string.isRequired,
                venue: PropTypes.string.isRequired,
                image: PropTypes.shape({
                    url: PropTypes.string.isRequired,
                }).isRequired,
            }).isRequired,
        }).isRequired
    ).isRequired,
};

export default HomepageEvents;
