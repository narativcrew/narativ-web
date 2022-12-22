import Head from 'next/head';

import FeaturedImage from '/components/FeaturedImage';
import bg from '/public/images/news-featured-image.jpg';
import styles from '/components/news/news.module.css';

import { NewsListItem } from '/components/news';
import { BlockButton } from '/components/Buttons';

const News = () => (
    <>
        <Head>
            <title>Narativ | Aktuality</title>
            <meta property="og:title" content="Narativ | Aktuality" key="title" />
        </Head>

        <FeaturedImage image={bg}></FeaturedImage>
        <div className={styles.newsBox}>
            <div className="container py-5 mt-6">
                <h1>Aktuality</h1>
                <NewsListItem
                    id="1"
                    title="Výroční zpráva za rok 2020"
                    description={<p>Zveřejňujeme výroční zprávu za rok 2020.</p>}
                />
                <NewsListItem
                    id="1"
                    title="Připravujeme psychoterapeutický výcvik v Otevřeném dialogu"
                    description={
                        <p>
                            Ve spolupráci s organizací Zahrada 2000 připravujeme 5-letý Komplexní psychoterapeutický
                            výcvik v Otevřeném dialogu, který má akreditaci pro psychoterapeutické vzdělání ve
                            zdravotnictví. První běh výcviku začne v listopadu 2021 v Jeseníku.
                        </p>
                    }
                />
                <NewsListItem
                    id="1"
                    title="Narativní videa jdou do světa a uvítají vaši podporu"
                    description={
                        <p>
                            Už skoro deset let se potkáváme při různých příležitostech, workshopech, konferencích,
                            neformálně. Během nich jsem většinou byla v roli kameramanky a posléze stříhačky natočeného
                            materiálu. Možná jste to zaregistrovali, z některých akcí vznikla i DVDs.
                        </p>
                    }
                />
                <div className="row">
                    <div className="col-md-6 offset-md-3 text-center">
                        <BlockButton>Zobrazit další aktuality</BlockButton>
                    </div>
                </div>
            </div>
        </div>
    </>
);

export default News;
