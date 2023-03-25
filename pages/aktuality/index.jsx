import React from 'react';
import PropTypes from 'prop-types';
import Head from 'next/head';
import FeaturedImage from 'components/FeaturedImage';
import styles from 'components/news/news.module.css';
import { NewsListItem } from 'components/news';
import { BlockButton } from 'components/Buttons';

import { createClient } from '../../prismicio';

const News = ({ headerImage, news }) => (
    <>
        <Head>
            <title>Narativ | Aktuality</title>
            <meta property="og:title" content="Narativ | Aktuality" key="title" />
        </Head>

        <FeaturedImage image={headerImage.data.image.url} />
        <div className={styles.newsBox}>
            <div className="container py-5 mt-6">
                <h1>Aktuality</h1>
                {news.results && news.results.length > 0 && (
                    <>
                        {news.results.map((n) => (
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
    headerImage: PropTypes.shape({
        data: PropTypes.shape({
            image: PropTypes.shape({
                url: PropTypes.string.isRequired,
            }).isRequired,
        }).isRequired,
    }).isRequired,
    news: PropTypes.shape({
        results: PropTypes.arrayOf(
            PropTypes.shape({
                uid: PropTypes.string.isRequired,
                data: PropTypes.shape({
                    title: PropTypes.string.isRequired,
                    description: PropTypes.arrayOf(PropTypes.object).isRequired,
                }).isRequired,
            }).isRequired
        ).isRequired,
    }).isRequired,
};

export default News;

export async function getStaticProps({ previewData }) {
    const client = createClient({ previewData });

    const headerImage = await client.getSingle('news_header_image');
    const news = await client.getByType('news', {
        pageSize: 2,
        orderings: [{ field: 'document.last_publication_date', direction: 'desc' }],
    });
    return {
        props: { headerImage, news },
    };
}
