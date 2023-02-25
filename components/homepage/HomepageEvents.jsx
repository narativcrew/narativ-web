import React from 'react';
import Link from 'next/link';
import EventThumb from 'public/images/placeholders/office.jpg';
import MindfulnessImg from 'public/images/placeholders/mindfulness.jpg';
import Conversation from 'public/images/placeholders/conversation.jpg';
import Relationship from 'public/images/placeholders/relationship.jpg';
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
                        <div className="col-md-6">
                            <EventListItem
                                key={e.uid}
                                id={e.uid}
                                title={e.data.title}
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

export default HomepageEvents;
