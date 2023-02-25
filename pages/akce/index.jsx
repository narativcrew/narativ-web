import React from 'react';
import Head from 'next/head';
import { createClient } from "../../prismicio";
import FeaturedImage from 'components/FeaturedImage';
import { EventListItem } from 'components/events';
import { BlockButton } from 'components/Buttons';
import stylesEvents from 'components/events/events.module.scss';
import bg from 'public/images/events-featured-image.jpg';
import EventThumb from 'public/images/placeholders/office.jpg';

const Events = ({ events }) => (
    <>
        <Head>
            <title>Narativ | Akce</title>
            <meta property="og:title" content="Narativ | Akce" key="title" />
        </Head>

        <FeaturedImage image={bg} />

        <div className={stylesEvents.eventsBox}>
            <div className="container mt5 py-5">
                <div className="row">
                    <div className="col-md-6">
                        <h1>Spolek Narativ pořádá</h1>
                    </div>
                </div>

                <div className="row">
                    {events.length > 0 && (
                        <>
                            {events.map((e) => (
                            <div className="col-md-6"   >
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

                    {/* <div className="col-md-6">
                        <EventListItem
                            id="2"
                            title="Úvod do teorie a praxe Otevřeného dialogu"
                            description={<p>Termín: 3.-4. 3. 2022 (vždy 9:00 – 16:30)</p>}
                            image={EventThumb}
                        />
                    </div>
                    <div className="col-md-6">
                        <EventListItem
                            id="3"
                            title="Úvod do teorie a praxe Otevřeného dialogu"
                            description={
                                <p>
                                    Termín: 3.-4. 3. 2022 (vždy 9:00 – 16:30),
                                    <br />
                                    Rozsah: 16 výukových hodin; Cena: 3.200,- Kč
                                </p>
                            }
                            image={EventThumb}
                        />
                    </div> */}
                    {/* <div className="col-md-6">
                        <EventListItem
                            id="4"
                            title="Úvod do teorie a praxe Otevřeného dialogu"
                            description={
                                <p>
                                    Termín: 3.-4. 3. 2022 (vždy 9:00 – 16:30),
                                    <br />
                                    Rozsah: 16 výukových hodin; Cena: 3.200,- Kč
                                </p>
                            }
                            image={EventThumb}
                        />
                    </div> */}
                </div>

                <div className="row">
                    <div className="col-md-6 offset-md-6 text-center">
                        <BlockButton>Zobrazit další akce</BlockButton>
                    </div>
                </div>
            </div>
        </div>
    </>
);

export default Events;

export async function getStaticProps({ previewData }) {
    const client = createClient({ previewData });

    const events = await client.getAllByType('event');
    console.log(events)
    console.log(events[0].data.image)
    return {
        props: { events },
    };
}
