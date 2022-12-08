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
                <div className="col-md-12">
                    <div class="thumbnail">
                        <img src="<news-thumbnail-2.jpg>" alt="News thumbnail 2"/>
                        <div class="caption">
                        <h3>Úvod do teorie a praxe Otevřeného dialogu</h3>
                        <p>Termín: 3.-4. 3. 2022 (vždy 9:00 – 16:30),<br />
                            Rozsah: 16 výukových hodin; Cena: 3.200,- Kč</p>
                        </div>
                    </div>
                </div>
                <div className="col-md-12">
                    <div class="thumbnail">
                        <img src="news-thumbnail-2.jpg" alt="News thumbnail 2"/>
                        <div class="caption">
                            <h3>Úvod do teorie a praxe Otevřeného dialogu</h3>
                            <p>Termín: 3.-4. 3. 2022 (vždy 9:00 – 16:30),<br />
                                Rozsah: 16 výukových hodin; Cena: 3.200,- Kč</p>
                        </div>
                    </div>
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
