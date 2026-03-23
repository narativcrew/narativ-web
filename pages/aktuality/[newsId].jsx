import React from 'react';
import PropTypes from 'prop-types';
import { useRouter } from 'next/router';
import styles from 'components/news/news.module.scss';
import cx from 'classnames';
import { PrismicRichText } from '@prismicio/react';
import * as prismicH from '@prismicio/client';

import { createClient } from '../../prismicio';
import PhotoGallery from '../../components/photogallery/PhotoGallery';

export function shortMonth(monthNr) {
    switch (monthNr) {
        case 1:
            return 'led';
        case 2:
            return 'ún';
        case 3:
            return 'bře';
        case 4:
            return 'dub';
        case 5:
            return 'kvě';
        case 6:
            return 'čvn';
        case 7:
            return 'čvc';
        case 8:
            return 'srp';
        case 9:
            return 'zář';
        case 10:
            return 'říj';
        case 11:
            return 'list';
        case 12:
            return 'pro';
        default:
            return '-';
    }
}

const NewsDetail = ({ news }) => {
    const router = useRouter();

    // eslint-disable-next-line no-unused-vars
    const { newsId } = router.query;
    const pubDate = prismicH.asDate(news.last_publication_date);
    const dayOfMonth = pubDate.getDate();
    const month = shortMonth(pubDate.getMonth() + 1);
    const fullYear = pubDate.getFullYear();
    const hours = pubDate.getHours();
    const minutes = pubDate.getMinutes();
    return (
        <>
            <div>
                <div className={cx(styles.newsDetailHeadingBox, 'text-center')}>
                    <h1>{news.data.title}</h1>
                    <div className="mt-4">
                        <span>
                            <i className="bi bi-calendar" />
                            {dayOfMonth}. {month} {fullYear} {hours}:{minutes}
                        </span>
                        <span>
                            <i className="bi bi-person" />
                            Narativ
                        </span>
                    </div>
                </div>
            </div>
            <div className="container my-5">
                <div className="row justify-content-center">
                    <div className="col-10">
                        <PrismicRichText field={news.data.description} />
                    </div>
                </div>
            </div>
            {news.data.images && news.data.images.length > 0 && (
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-10">
                            <PhotoGallery items={news.data.images} />
                        </div>
                    </div>
                </div>
            )}
        </>
    );
};

NewsDetail.propTypes = {
    news: PropTypes.shape({
        uid: PropTypes.string.isRequired,
        data: PropTypes.shape({
            title: PropTypes.string.isRequired,
            description: PropTypes.arrayOf(PropTypes.object).isRequired,
            image: PropTypes.shape({
                url: PropTypes.string.isRequired,
            }).isRequired,
            images: PropTypes.arrayOf(PropTypes.object).isRequired,
        }).isRequired,
        last_publication_date: PropTypes.string.isRequired,
    }).isRequired,
};

export default NewsDetail;

export async function getStaticProps({ params, previewData }) {
    const client = createClient({ previewData });
    const news = await client.getByUID('news', params.newsId);
    const footerLeft = await client.getSingle('footer_column_left');
    const footerCenter = await client.getSingle('footer_column_center');
    const footerRight = await client.getSingle('footer_column_right');
    const footer = {
        footerLeft,
        footerCenter,
        footerRight,
    };

    return {
        props: {
            news,
            footer,
        },
    };
}

export async function getStaticPaths() {
    const client = createClient();

    const news = await client.getAllByType('news');

    const paths = news.map((n) => ({
        params: { newsId: n.uid },
    }));

    return {
        paths,
        fallback: false,
    };
}
