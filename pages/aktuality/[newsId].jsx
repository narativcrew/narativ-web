import React, { useEffect, useRef, useState } from 'react';
import PropTypes from 'prop-types';
import { useRouter } from 'next/router';
import styles from 'components/news/news.module.scss';
import cx from 'classnames';
import { PrismicRichText } from '@prismicio/react';
import * as prismicH from '@prismicio/helpers';
import Image from 'next/image';
import Link from 'next/link';
import Fancybox from 'components/Fancybox';

import { createClient } from '../../prismicio';

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
    const isotopeGrid = useRef(null); // Create a ref for the grid element
    const [isotopeInstance, setIsotopeInstance] = useState(null);

    useEffect(() => {
        const loadIsotope = async () => {
            // Dynamically import Isotope to ensure `window` is defined
            const IsotopeModule = await import('isotope-layout');
            const IsotopeConstructor = IsotopeModule.default || IsotopeModule;

            if (isotopeGrid.current && !isotopeInstance) {
                const instance = new IsotopeConstructor(isotopeGrid.current, {
                    itemSelector: '.isotope-item',
                    layoutMode: 'fitRows',
                });
                setIsotopeInstance(instance);
                // console.log('Isotope instance created:', instance);
            }
        };

        loadIsotope();
    }, [news]);

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
            <div className="container mt-5">
                <div className="row justify-content-center">
                    <div className="col-md-10">
                        <PrismicRichText field={news.data.description} />
                    </div>
                </div>
            </div>
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-12">
                        <div ref={isotopeGrid} className="row">
                            <Fancybox
                                options={{
                                    Carousel: {
                                        infinite: false,
                                    },
                                }}
                            >
                                {news.data.images &&
                                    news.data.images.length > 0 &&
                                    news.data.images.map((i) => (
                                        <div
                                            key={i.id}
                                            className="col-lg-4 col-md-6  col-sm-6 gr-pb-7  isotope-item isotope-mas-item all branding transition-all"
                                        >
                                            <div className={cx(styles.portfolioCard, styles.portfolioCardMasonry)}>
                                                <Link
                                                    key={`link-${i.id}`}
                                                    data-fancybox="gallery"
                                                    href={i.image.url}
                                                    className={cx(styles.cardImage, styles.dBlock)}
                                                >
                                                    <Image
                                                        src={i.image.url}
                                                        alt={i.image.alt}
                                                        width={i.image.dimensions.width}
                                                        height={i.image.dimensions.height}
                                                        className="w-100"
                                                    />
                                                </Link>
                                                <div
                                                    className={cx(
                                                        styles.textStart,
                                                        styles.textBlock,
                                                        styles.grBgOpacity,
                                                        styles.dBlock
                                                    )}
                                                >
                                                    <h3 className="">{i.image.alt}</h3>
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                            </Fancybox>
                        </div>
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
            image: PropTypes.shape({
                url: PropTypes.string.isRequired,
            }).isRequired,
            images: PropTypes.arrayOf(PropTypes.object).isRequired,
        }).isRequired,
        last_publication_date: PropTypes.string.isRequired,
    }).isRequired,
    images: PropTypes.arrayOf(
        PropTypes.shape({
            image: PropTypes.shape({
                url: PropTypes.string.isRequired,
                alt: PropTypes.string,
            }).isRequired,
        })
    ),
};

NewsDetail.defaultProps = {
    images: [],
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
