import React from 'react';
import Link from 'next/link';
import EventThumb from 'public/images/placeholders/office.jpg';
import MindfulnessImg from 'public/images/placeholders/mindfulness.jpg';
import Conversation from 'public/images/placeholders/conversation.jpg';
import Relationship from 'public/images/placeholders/relationship.jpg';
import stylesEvents from 'components/events/events.module.scss';
import { EventListItem } from 'components/events';
import { BlockButton } from 'components/Buttons';

const HomepageEvents = () => (
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
            <div className="col-md-6">
                <EventListItem
                    id="1"
                    title="Efektivní komunikace: jak lépe vyjadřovat své myšlenky a potřeby"
                    description={
                        <p>
                            Termín: 3.-4. 3. 2022 (vždy 9:00 – 16:30),
                            <br />
                            Rozsah: 16 výukových hodin; Cena: 3.200,- Kč
                        </p>
                    }
                    image={Conversation}
                />
            </div>
            <div className="col-md-6">
                <EventListItem
                    id="2"
                    title="Mindfulness pro zdraví: jak zlepšit koncentraci a snížit stres"
                    description={<p>Termín: 3.-4. 3. 2022 (vždy 9:00 – 16:30)</p>}
                    image={MindfulnessImg}
                />
            </div>
            <div className="col-md-6">
                <EventListItem
                    id="3"
                    title="Empatie v práci a v osobním životě: jak rozvíjet schopnost vcítění do druhých"
                    description={
                        <p>
                            Termín: 3.-4. 3. 2022 (vždy 9:00 – 16:30),
                            <br />
                            Rozsah: 16 výukových hodin; Cena: 3.200,- Kč
                        </p>
                    }
                    image={EventThumb}
                />
            </div>
            <div className="col-md-6">
                <EventListItem
                    id="4"
                    title="Zlepšení vztahů pomocí konstruktivní komunikace"
                    description={
                        <p>
                            Termín: 3.-4. 3. 2022 (vždy 9:00 – 16:30),
                            <br />
                            Rozsah: 16 výukových hodin; Cena: 3.200,- Kč
                        </p>
                    }
                    image={Relationship}
                />
            </div>
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
