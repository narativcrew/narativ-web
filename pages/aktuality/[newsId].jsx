import React from 'react';
import PropTypes from 'prop-types';
import { useRouter } from 'next/router';
import styles from 'components/news/news.module.css';
import cx from 'classnames';
import { PrismicRichText } from '@prismicio/react';

import { createClient } from '../../prismicio';

const NewsDetail = ({ news }) => {
    const router = useRouter();
    // eslint-disable-next-line no-unused-vars
    const { newsId } = router.query;

    return (
        <>
            <div>
                <div className={cx(styles.newsDetailHeadingBox, 'text-center')}>
                    <h1>{news.data.title}</h1>
                    <span>
                        <i className="bi bi-calendar" />
                        {news.last_publication_date}
                    </span>
                </div>
            </div>
            <div className="container mt-5">
                <div className="row">
                    <div className="col-md-12">
                        <PrismicRichText field={news.data.description} />
                    </div>
                </div>
            </div>
        </>
    );
};

NewsDetail.propTypes = {
    news: PropTypes.shape({
        uid: PropTypes.string.isRequired,
        data: PropTypes.shape({
            title: PropTypes.string.isRequired,
            description: PropTypes.arrayOf(PropTypes.object).isRequired,
        }).isRequired,
        last_publication_date: PropTypes.string.isRequired,
    }).isRequired,
};

export default NewsDetail;

export async function getStaticProps({ params, previewData }) {
    const client = createClient({ previewData });
    // console.log(`newsId: ${params.newsId}`);
    const news = await client.getByUID('news', params.newsId);

    return {
        props: {
            news,
        },
    };
}

export async function getStaticPaths() {
    const client = createClient();

    const news = await client.getAllByType('news');

    const paths = news.map((n) => ({
        params: { newsId: n.uid },
    }));

    // console.log(paths);

    return {
        paths,
        fallback: false,
    };
}
