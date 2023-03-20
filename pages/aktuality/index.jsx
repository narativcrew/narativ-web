import React from 'react';
import PropTypes from 'prop-types';
import Head from 'next/head';
import FeaturedImage from 'components/FeaturedImage';
import styles from 'components/news/news.module.css';
import { NewsListItem } from 'components/news';
import { BlockButton } from 'components/Buttons';
import bg from 'public/images/news-featured-image.jpg';

import { createClient } from '../../prismicio';

const News = ({ news }) => (
    <>
        <Head>
            <title>Narativ | Aktuality</title>
            <meta property="og:title" content="Narativ | Aktuality" key="title" />
        </Head>

        <FeaturedImage image={bg} />
        <div className={styles.newsBox}>
            <div className="container py-5 mt-6">
                <h1>Aktuality</h1>
                {news.length > 0 && (
                    <>
                        {news.map((n) => (
                            <NewsListItem
                                key={n.uid}
                                id={n.uid}
                                publicationDate={n.last_publication_date}
                                title={n.data.title}
                                description={n.data.description}
                            />
                        ))}
                    </>
                )}
                {/* <NewsListItem
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
                /> */}
                <div className="row">
                    <div className="col-md-6 offset-md-3 text-center">
                        <BlockButton>Zobrazit další aktuality</BlockButton>
                    </div>
                </div>
            </div>
        </div>
    </>
);

News.propTypes = {
    news: PropTypes.arrayOf(
        PropTypes.shape({
            uid: PropTypes.string.isRequired,
            data: PropTypes.shape({
                title: PropTypes.string.isRequired,
                description: PropTypes.arrayOf(PropTypes.object).isRequired,
            }).isRequired,
        }).isRequired
    ).isRequired,
};

export default News;

export async function getStaticProps({ previewData }) {
    const client = createClient({ previewData });

    const news = await client.getAllByType('news', {
        orderings: [{ field: 'document.last_publication_date', direction: 'desc' }],
    });
    // console.log(news);
    return {
        props: { news },
    };
}
