import EventThumb from '/public/images/placeholders/EventItem.jpg'
import stylesEvents from '/components/events/events.module.scss'
import { EventListItem } from '/components/events'
import { PrimaryButton } from '/components/Buttons'


const Events = () => {
    return (
        <div className="container mt-5">
            <div className={stylesEvents.event_list__description}>
                <div className="row">
                    <div className="col-md-6">
                        <h1>Spolek Narativ pořádá:</h1>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col-md-6">
                    <EventListItem
                        id="1"
                        title="Úvod do teorie a praxe Otevřeného dialogu"
                        description={(
                            <p>Termín: 3.-4. 3. 2022 (vždy 9:00 – 16:30),<br />
                            Rozsah: 16 výukových hodin; Cena: 3.200,- Kč</p>
                        )}
                        image={EventThumb}
                    />
                </div>
                <div className="col-md-6">
                    <EventListItem
                        id="2"
                        title="Úvod do teorie a praxe Otevřeného dialogu"
                        description={(
                            <p>Termín: 3.-4. 3. 2022 (vždy 9:00 – 16:30)</p>
                        )}
                        image={EventThumb}
                    />
                </div>
                <div className="col-md-6">
                    <EventListItem
                        id="3"
                        title="Úvod do teorie a praxe Otevřeného dialogu"
                        description={(
                            <p>Termín: 3.-4. 3. 2022 (vždy 9:00 – 16:30),<br />
                                Rozsah: 16 výukových hodin; Cena: 3.200,- Kč</p>
                        )}
                        image={EventThumb}
                    />
                </div>
                <div className="col-md-6">
                    <EventListItem
                        id="4"
                        title="Úvod do teorie a praxe Otevřeného dialogu"
                        description={(
                            <p>Termín: 3.-4. 3. 2022 (vždy 9:00 – 16:30),<br />
                                Rozsah: 16 výukových hodin; Cena: 3.200,- Kč</p>
                        )}
                        image={EventThumb}
                    />
                </div>
            </div>
            <div className='row'>
                <div className='col-md-12 text-center'>
                    <PrimaryButton>Zobrazit další akce</PrimaryButton>
                </div>
            </div>
        </div>
    )
}

export default Events
