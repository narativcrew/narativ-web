import React from 'react';
import PropTypes from 'prop-types';
import Head from 'next/head';
import FeaturedImage from 'components/FeaturedImage';
import styles from 'components/news/news.module.css';
import { NewsListItem } from 'components/news';
import { PrismicRichText } from '@prismicio/react';

import { createClient } from '../../prismicio';

const News = ({ headerImage, topTitle, news }) => (
    <>
        <Head>
            <title>Narativ | Aktuality</title>
            <meta property="og:title" content="Narativ | Aktuality" key="title" />
        </Head>

        <FeaturedImage image={headerImage.data.image.url} />
        <div className="container">
            <div className="row">
                <div className="col-md-12 mt-5">
                    <h1>{topTitle.data.title}</h1>
                    {topTitle?.data.body && <PrismicRichText field={topTitle.data.body} />}
                </div>
            </div>
        </div>
        <div className={styles.newsBox}>
            <div className="container py-5 mt-6">
                {news.length === 0 ? (
                    <div className="text-center py-5">Žádné aktuality.</div>
                ) : (
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
            </div>
        </div>
    </>
);

News.propTypes = {
    topTitle: PropTypes.shape({
        data: PropTypes.shape({
            title: PropTypes.string.isRequired,
            body: PropTypes.arrayOf(PropTypes.object).isRequired,
        }).isRequired,
    }).isRequired,
    headerImage: PropTypes.shape({
        data: PropTypes.shape({
            image: PropTypes.shape({
                url: PropTypes.string.isRequired,
            }).isRequired,
        }).isRequired,
    }).isRequired,
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

    const headerImage = await client.getSingle('news_header_image');
    const news = await client.getAllByType('news', {
        orderings: [{ field: 'document.last_publication_date', direction: 'desc' }],
    });
    const topTitle = await client.getSingle('news_top_title');

    const footerLeft = await client.getSingle('footer_column_left');
    const footerCenter = await client.getSingle('footer_column_center');
    const footerRight = await client.getSingle('footer_column_right');

    const footer = {
        footerLeft,
        footerCenter,
        footerRight,
    };

    return {
        props: { headerImage, topTitle, news, footer },
    };
}
