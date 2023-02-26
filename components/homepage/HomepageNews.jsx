import React from 'react';
import Link from 'next/link';
import cx from 'classnames';
import { BlockButton } from 'components/Buttons';
import NewsListItem from 'components/news/NewsListItem';

import stylesHomepage from './homepage.module.scss';

const HomepageNews = ({news}) => (
    <div className={cx('mt-5 py-5', stylesHomepage.newsBox)}>
        <div className="container">
            <div className="row">
                <div className="col-md-6">
                    <h1>Aktuality</h1>
                </div>
            </div>
            <div className="row">
                    {news.length > 0 && (
                            <>
                                {news.map((n) => (
                                    <div className="col-md-12">
                                        <NewsListItem
                                            id={n.uid}
                                            publicationDate={n.last_publication_date}
                                            title={n.data.title}
                                            description={n.data.description}
                                        />
                                    </div>
                                ))}
                            </>
                        )}
                    
                {/* <div className="col-md-12">
                    <NewsListItem
                        id="2"
                        title="Výzkum prokazuje účinnost mindfulness při zmírňování stresu"
                        description={
                            <p>
                                Podle nové studie, kterou zveřejnila Universita v Torontu, může být mindfulness účinnou
                                metodou pro snížení stresu a zlepšení celkového psychického zdraví. Mindfulness se
                                zaměřuje na plné soustředění na přítomné prožitky a uvědomění si myšlenek a pocitů bez
                                soudů nebo hodnocení. Výzkum prokázal, že pravidelné cvičení mindfulness může vést ke
                                snížení úrovně stresu a lepšímu psychickému zdraví.
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
                                Psychologové z Harvard Business Review zveřejnili novou knihu, která radí, jak zlepšit
                                komunikaci v práci i v osobním životě. Kniha obsahuje řadu tipů a cvičení, jak lépe
                                naslouchat, vyjadřovat se jasně a účinně komunikovat své potřeby a přání. Autoré
                                doporučují také zaměřit se na budování důvěry a empatie v rámci vztahů, což může vést k
                                lepšímu porozumění a spolupráci.
                            </p>
                        }
                    />
                </div> */}
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

export default HomepageNews;
