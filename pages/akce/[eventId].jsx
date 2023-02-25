import React from 'react';
import cx from 'classnames';
import { createClient } from '../../prismicio';
import styles from 'components/events/events.module.scss';
import FeaturedBlock from 'components/FeaturedBlock';
import FeaturedPhoto from 'public/images/placeholders/loek.webp';
import FeaturedImage from 'components/FeaturedImage';
import bg from 'public/images/placeholders/loek-wide.webp';

import { BlockButton } from '../../components/Buttons';
import { PrismicRichText } from '@prismicio/react';

const EventDetail = ({evnt}) => (
    <>
        <FeaturedImage image={bg} />
        <div className={cx(styles.eventDetailHeadingBox, 'text-center')}>
            <h1>{evnt.data.title}</h1>
            <span>
                <i className="bi bi-cash-coin" />
                {evnt.data.price},- Kč
            </span>
            <span>
                <i className="bi bi-calendar" />
                { data.start_date } - { data.end_date }
            </span>
            <span>
                <i className="bi bi-geo-alt" />
                {evnt.data.venue}
            </span>
        </div>
        <div className="container mt-5">
            <div className="row justify-content-center">
                <div className="col-md-8">
                    <h4>Uvod</h4>
                    <p>
                        Skupina Narativ vás srdečně zve na dvoudenní workshop o dialogickém přístupu ve vzdělávání
                        vedený Loekem Schoenmakersem, Ph.D. (NL). Kurz je určen zejména pracovníkům ve školství -
                        ředitelům škol, učitelům, asistentům, školním psychologům - ale také akademickým pracovníkům,
                        terapeutům, sociálním pracovníkům a dalším odborníkům, kteří jsou zapojeni do vzdělávacíh
                        procesů.
                    </p>
                    <h4>Cíl kurzu</h4>
                    <p>
                        Podpořit pedagoga v jeho snaze o co nejlepší vzdělávání každého dítěte prostřednictvím
                        spolupráce a vytváření příležitostí. Koncept, ve kterém je „dán hlas“ všem, má pozitivní přínos
                        ve výchovně-vzdělávacím procesu, vede k inkluzi každého jednotlivého žáka v kolektivu a přináší
                        mnoho benefitů i samotnému učiteli. Cílem kurzu je také přiblížit paradigmata, která ovlivňují
                        naše vzdělávání a naše myšlení, otevřít nové cesty, které se objeví, když pedagog naslouchá
                        různorodým „hlasům“ ve vzdělávacím procesu.
                    </p>
                    <p>
                        Kurz je akreditován Ministerstvem školství, mládeže a tělovýchovy v souladu s ustanovením § 10
                        vyhlášky č. 317/2005 Sb., o dalším vzdělávání pedagogických pracovníků, akreditační komisi a
                        kariérním systému pedagogických pracovníků, ve znění pozdějších předpisů, jako studium k
                        prohlubování odborné kvalifikace.
                    </p>
                </div>
            </div>
            <div className="row justify-content-center">
                <div className="col-md-3">
                <PrismicLink  field={evnt.data.registration_link}>
                    <BlockButton>Prihlasit se na kurz</BlockButton>
                </PrismicLink>
                </div>
            </div>
            <div className="row justify-content-center mt-5">
                <div className="col-md-8">
                    <PrismicRichText field={evnt.data.description} />
                </div>
            </div>
        </div>
        <FeaturedBlock
            text="Pokud bychom chtěli Loeka charakterizovat jen jedním slovem, bylo by to nejspíš slovo
                &ldquo;sjednotitel&rdquo;."
            image={FeaturedPhoto}
        />
        <div className="container">
            <div className="row justify-content-center mt-5">
                <div className="col-md-8">
                    <h4>Loek Schoenmakers, Ph.D.</h4>
                    <p>
                        Pokud bychom chtěli Loeka charakterizovat jen jedním slovem, bylo by to nejspíš slovo
                        &ldquo;sjednotitel&rdquo;. Ve svém životě, v práci, doma i v zahraničí Loek znovu a znovu
                        objevuje, že udržitelný svět a udržitelná změna vyžaduje zlidšťování procesů, jakými se změny
                        dějí. Tam, kde v dnešní době stále dominuje paradigma vytvořitelného a kontrolovatelného,
                        předvídatelného (vzdělávacího) světa, kde jsou lidé vnímáni jako nástroje změny a výkonu, je
                        posun k novému paradigmatu stále potřebnější. Od individualistické orientace ke vztahové
                        orientaci, kde lidé konstruují realitu, svět nebo se mění společně s ostatními na základě
                        propojení a dialogu. Poskytování prostoru pro improvizaci, pro reflexi a reflektující praxi.
                    </p>
                    <p>
                        Základem Loekovy tvorby jsou myšlenky sociálního konstrukcionismu. Postavit lidi do centra
                        změnových procesů. Díky tomu, že jsou lidé viděni, slyšeni a oceňováni, že je ceněn jejch hlas a
                        že mají vliv na tyto procesy, se začínají posunovat a zůstávají v pohybu. Interakce mezi lidmi
                        vytváří realitu. Dát změnám smysl, vidět a udržovat smysl v procesech změn zvyšuje šanci na
                        udržitelnost. Jde o ocenění, budování mostů, spolupráci a dialog. Udržitelnost udržitelnosti je
                        vnímána jako dynamický koncept.
                    </p>
                    <p>
                        Loek si vybudoval mnoho zkušeností v různých rolích, jako je učitel školy, ředitel školy,
                        konzultant pro školy, inovátor vzdělávání, koordinátor, lektor v mnoha vzdělávacích projektech v
                        Nizozemsku i v zahraničí v zemích jako Belgie, Surinam, Aruba, Česká republika a Slovensko. V
                        současné době pracuje částečně pro vlastní společnost Appreciate Change work-s a částečně na
                        nejlepší nizozemské vysoké škole pro pedagogy v rámci tří magisterských programů, superviduje
                        studenty v jejich závěrečném vzdělávání, vede kurzy pozitivní psychologie. Od srpna 2021 stojí
                        Loek u zrodu nového hnutí založeného na sociálně konstrukcionistické praxi a výzkumu, je to pro
                        něj vzrušující dobrodružství, v němž se vyvíjejí nové metody výzkumu učitelů.
                    </p>
                    <p>V roce 2011 Loek dosáhl titulu PhD v sociálních vědách.</p>
                    <h4>Organizátoři kurzu</h4>
                    <p>
                        Organizační tým: Veronika Smaženková, Přemek Ulman a Pavel Nepustil ze skupiny Narativ Držitel
                        akreditace: Spolek Narativ, IČO 03107621, se sídlem V aleji 114/31, 620 00 Brno
                    </p>
                    <p>
                        Skupina Narativ dlouhodobě usiluje o rozvoj a pěstování kultury spolupráce a dialogu v různých
                        oblastech práce s lidmi, specificky se potom zabývá šířením tzv. kolaborativně-dialogického
                        přístupu v pomáhajících profesích. Snaží se vytvářet účinnou odpověď na společenské dění a
                        situace, které jsou doprovázeny omezováním dialogu a spolupráce. Více zde.
                    </p>
                </div>
            </div>
        </div>
    </>
);

export default EventDetail;

export async function getStaticProps({ params, previewData }) {
    const client = createClient({previewData});
    console.log("eventId: " + params.eventId)
    const evnt = await client.getByUID('event', params.eventId);
    
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
        params: { eventId: e.id },
      }))


    return {
        paths,
        fallback: false,
    };
}