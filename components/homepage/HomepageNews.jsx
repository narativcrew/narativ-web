import Link from 'next/link';
import cx from 'classnames';

import stylesHomepage from './homepage.module.scss';

import { BlockButton } from '/components/Buttons';
import NewsListItem from '/components/news/NewsListItem';

const HomepageNews = () => {
    return (
        <div className={cx('mt-5 py-5', stylesHomepage.newsBox)}>
            <div className="container">
                <div className="row">
                    <div className="col-md-6">
                        <h1>Aktuality</h1>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-12">
                        <NewsListItem
                            id="1"
                            title="Nová studie potvrzuje pozitivní vliv empatie na vztahy"
                            description={
                                <p>
                                    Vědci z University of Cambridge zveřejnili výsledky studie, která potvrzuje
                                    pozitivní vliv empatie na vztahy mezi lidmi. Empatie, tedy schopnost vcítit se do
                                    pocitů a prožitků druhé osoby, byla spojena s lepšími komunikačními dovednostmi,
                                    vyšší mírou důvěry a nižší mírou konfliktů v rámci vztahu. Výzkumníci doporučují
                                    zaměřit se na rozvoj empatie při práci s klienty v rámci terapie nebo poradenství.
                                </p>
                            }
                        />
                    </div>
                    <div className="col-md-12">
                        <NewsListItem
                            id="2"
                            title="Výzkum prokazuje účinnost mindfulness při zmírňování stresu"
                            description={
                                <p>
                                    Podle nové studie, kterou zveřejnila Universita v Torontu, může být mindfulness
                                    účinnou metodou pro snížení stresu a zlepšení celkového psychického zdraví.
                                    Mindfulness se zaměřuje na plné soustředění na přítomné prožitky a uvědomění si
                                    myšlenek a pocitů bez soudů nebo hodnocení. Výzkum prokázal, že pravidelné cvičení
                                    mindfulness může vést ke snížení úrovně stresu a lepšímu psychickému zdraví.
                                </p>
                            }
                        />
                    </div>
                    <div className="col-md-12">
                        <NewsListItem
                            id="3"
                            title="Nová kniha radí, jak zlepšit komunikaci v práci i v osobním životě"
                            description={
                                <p>
                                    Psychologové z Harvard Business Review zveřejnili novou knihu, která radí, jak
                                    zlepšit komunikaci v práci i v osobním životě. Kniha obsahuje řadu tipů a cvičení,
                                    jak lépe naslouchat, vyjadřovat se jasně a účinně komunikovat své potřeby a přání.
                                    Autoré doporučují také zaměřit se na budování důvěry a empatie v rámci vztahů, což
                                    může vést k lepšímu porozumění a spolupráci.
                                </p>
                            }
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
    );
};

export default HomepageNews;
