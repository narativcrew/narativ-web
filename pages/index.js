import { SliceZone } from '@prismicio/react'
import cx from 'classnames'

import { createClient } from '../prismicio'
import { components } from '../slices'
import bg from '/public/images/hp-header.png'
import EventThumb from '/public/images/placeholders/EventItem.jpg'

import stylesHomepage from '/components/homepage/homepage.module.css'
import stylesEvents from '/components/events/events.module.scss'
import { EventListItem } from '/components/events'
import { BlockButton } from '../components/Buttons'
import NewsListItem from '../components/news/NewsListItem'
import Footer from '../components/footer/Footer'
import Link from 'next/link'

export async function getStaticProps({ previewData }) {
    const client = createClient({ previewData })

    const page = await client.getSingle('homepage')

    return {
        props: {
            page,
        },
    }
}

const HomePage = ({ page, navigation, settings }) => (
    <>
        <div className={stylesHomepage.header}>
            <div className={stylesHomepage.featuredImage} style={{ backgroundImage: `url(${bg.src})` }}>
                <div className="container">
                    <div className='row align-items-center' style={{ height: '100%' }}>
                        <div className='col-md-6 offset-md-6'>
                            <h1 className="">Jsme sociální a vztahová platforma</h1>
                            <p>Narativ je vztahová či sociální platforma se záměrem šírit postmo    derní praxi v České republice a na Slovensku. Slovo Narativ vám může připomínat narativní terapii, ale odkazujeme tím spíše na vyprávění příběhů vůbec, které je zásadní pro všechny přístupy, které zahrnujeme do postmoderní rodiny.</p>
                        </div>
                    </div>
                </div>
            </div>

            <div className={stylesHomepage.attributes}>
                <div className="container h-100">
                    <div className='row h-100 align-items-center'>
                        <div className='col-md-4'>
                            <h3>Terapie</h3>
                            <p>A team of experts passionate about product management</p>
                        </div>
                        <div className='col-md-4'>
                            <h3>Vzdělávání</h3>
                            <p>A team of experts passionate about product management</p>
                        </div>
                        <div className='col-md-4'>
                            <h3>Praxe</h3>
                            <p>A team of experts passionate about product management</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div className="container mt-5">
            <div className={stylesEvents.event_list__description}>
                <div className="row">
                    <div className="col-md-6">
                        <h1>Spolek Narativ pořádá:</h1>
                    </div>
                    <div className="col-md-6">
                        <p>Snažíme se vytvářet horizontální, neformální a mimoinstitucionální dialogické prostory - setkáváme se tak mezi sebou, s kolegy ze sociálně zaměřených praxí,  účastníky našich vzdělávacích akcí, programů a workshopů, s našimi klienty, nebo s autory knih, které překládáme.</p>
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
                <div className='col-md-6 offset-md-6 text-center'>
                    <Link href="/akce">
                        <BlockButton>Zobrazit další akce</BlockButton>
                    </Link>
                </div>
            </div>
        </div>
        <div className={cx('mt-5 py-5',stylesHomepage.newsBox)}>
            <div className='container'>
                <div className="row">
                    <div className="col-md-6"><h1>Aktuality</h1></div>
                </div>
                <div className="row">
                    <div className="col-md-12">
                        <NewsListItem
                            id="1"
                            title="Nieco"
                            description={(
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nunc vel tincidunt lacinia, nunc nisl aliquet nisl, vel aliquet nisl nisl sit amet lorem. Sed euismod, nunc vel tincidunt lacinia, nunc nisl aliquet nisl, vel aliquet nisl nisl sit amet lorem.</p>
                            )}
                        />
                    </div>
                    <div className="col-md-12">
                        <NewsListItem
                            id="1"
                            title="Nieco"
                            description={(
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nunc vel tincidunt lacinia, nunc nisl aliquet nisl, vel aliquet nisl nisl sit amet lorem. Sed euismod, nunc vel tincidunt lacinia, nunc nisl aliquet nisl, vel aliquet nisl nisl sit amet lorem.</p>
                            )}
                        />
                    </div>
                    <div className="col-md-12">
                        <NewsListItem
                            id="1"
                            title="Nieco"
                            description={(
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nunc vel tincidunt lacinia, nunc nisl aliquet nisl, vel aliquet nisl nisl sit amet lorem. Sed euismod, nunc vel tincidunt lacinia, nunc nisl aliquet nisl, vel aliquet nisl nisl sit amet lorem.</p>
                            )}
                        />
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-6 offset-md-6 text-center">
                        <Link href="/aktuality">
                            <BlockButton>Zobrazit všechny aktuality</BlockButton>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
        {
            /*
                <SliceZone slices={page.data.slices} components={components} />
            */
        }

    </>
)

export default HomePage
