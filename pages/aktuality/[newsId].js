import { useRouter } from 'next/router';
import styles from '/components/news/news.module.css';
import cx from 'classnames';

const NewsDetail = () => {
    const router = useRouter();
    const { newsId } = router.query;

    return (
        <>
            <div>
                <div className={cx(styles.newsDetailHeadingBox, 'text-center')}>
                    <h1>Narativní videa jdou do světa a uvítají vaši podporu (id: {newsId})</h1>
                    <span>(id:{newsId})</span>
                    <span>
                        <i className="bi bi-calendar"></i>14.06.2020
                    </span>
                </div>
            </div>
            <div className="container mt-5">
                <div className="row">
                    <div className="col-md-12">
                        <p>Vážení a milí kolaborativní přátelé,</p>
                        <p>
                            Už skoro deset let se potkáváme při různých příležitostech, workshopech, konferencích,
                            neformálně. Během nich jsem většinou byla v roli kameramanky a posléze stříhačky natočeného
                            materiálu. Možná jste to zaregistrovali, z některých akcí vznikla i DVDs. Ano, to je to
                            placaté okrouhlé médium, které v průběhu toho krátkého času zastaralo a není ho už skoro kde
                            přehrát.
                        </p>
                        <p>
                            I proto jsme se rozhodli videa nasdílet veřejně. Nejsou zdaleka v tak fantastické kvalitě,
                            jak bychom si přáli, ale obsah od fantastických lektorů a lektorek z celého světa myslím
                            zprostředkují dostatečně dobře.
                        </p>
                        <p>
                            <iframe
                                src="https://www.youtube.com/embed/18UgkCW3mj8"
                                frameborder="0"
                                width="560"
                                height="315"
                            ></iframe>
                        </p>
                        <p>
                            Vím, že výzev na dobrovolné přispívání jste zřejmě době nouzové dostali hodně, nicméně i my
                            k nim jednu přidáme a věříme, že není nijak troufalá. Jedno DVD se nacenilo v minulosti na
                            190,- a v průměru má stopáž 3 hodiny. Celkem nyní uvolníme cca 18 hodin video materiálu.
                        </p>
                        <p>
                            Pokud byste se rozhodli přispět a ocenit tak dny a noci strávené při jejich úpravě a výrobě,
                            budeme nejen vděční, ale už i víme, jak bychom peníze použili:
                            <ul>
                                <li>k možnosti slevit peer účastníkům účast na budoucích kurzech a workshopech</li>
                                <li>
                                    k vydání a překladu Kroniky Narativu - materiálu, jenž nám dál pomůže v propagaci a
                                    získávání grantů na nejrůznější projekty, díky čemuž můžeme dál dělat naše akce
                                    přístupné co nejširší skupině lidí
                                </li>
                                <li>k úpravě webových stránek, které to potřebují</li>
                            </ul>
                        </p>
                        <p>A na co se můžete těšit?</p>
                        <p>
                            <a
                                href="https://youtu.be/pX5IjKVEb00"
                                target="_blank"
                                rel="noreferrer"
                                title="pusťte si video"
                            >
                                Ann-Rita Gjertzen
                            </a>
                            : Reflektující proces: historie, vývoj, současné trendy. Záznam z workshopu z listopadu 2011
                            v Brně.
                        </p>
                        <p>
                            <a
                                href="https://youtu.be/OBJFmOXCxXU"
                                target="_blank"
                                rel="noreferrer"
                                title="pusťte si video"
                            >
                                Harlene Anderson
                            </a>
                            : Collaborative therapy and ethics. Záznam z workshopu v září 2011 v Brně.
                        </p>
                        <p>
                            Rocio Chaveste Gutierréz: Postmoderní filozofie a praxe napříč kulturami. Záznam z workshopu
                            v Brně z června 2011.
                        </p>
                        <p>
                            Harlene Anderson, John Shotter: Umění a praxe spolupráce v organizacích, komerční sféře a
                            komunitních službách. Záznam z Brna, duben 2013.
                        </p>
                        <p>
                            Jaakko Seikkula: Otevřený dialog: Nové paradigma v péči o duševní zdraví. Záznam z prvního
                            Jaakkova workshopu z r. 2013.
                        </p>
                        <p>Will Hall: Diagnózy F a cesty k zotavení. Záznam z besedy s Willem v Brně, listopad 2015.</p>
                        <p>
                            Sylvia London: Šikana, přestaňme o ní mluvit, začněme mluvit spolu. Záznam z workshopu z
                            listopadu 2015 v Brně.
                        </p>
                    </div>
                </div>
            </div>
        </>
    );
};

export default NewsDetail;
