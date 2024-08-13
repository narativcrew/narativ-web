import React from 'react';
import PropTypes from 'prop-types';
import Link from 'next/link';
import cx from 'classnames';
import { BlockButton } from 'components/Buttons';
import NewsListItem from 'components/news/NewsListItem';

import stylesHomepage from './homepage.module.scss';

const HomepageNews = ({ news }) => (
    <div className={cx('mt-5 py-5', stylesHomepage.newsBox)}>
        <div className="container">
            <div className="row">
                <div className="col-md-6">
                    <h1>Aktuality</h1>
                </div>
            </div>
            <div className="row mb-4">
                {news.length === 0 ? (
                    <div className="text-center">Nejsou žádné aktuality.</div>
                ) : (
                    <>
                        {news.map((n) => (
                            <div key={n.uid} className="col-md-12">
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
            </div>
            {news.length > 0 && (
                <div className="row">
                    <div className="col text-center">
                        <Link href="/aktuality">
                            <BlockButton>Zobrazit všechny aktuality</BlockButton>
                        </Link>
                    </div>
                </div>
            )}
        </div>
    </div>
);

HomepageNews.propTypes = {
    news: PropTypes.arrayOf(
        PropTypes.shape({
            data: PropTypes.shape({
                title: PropTypes.string.isRequired,
                description: PropTypes.arrayOf(PropTypes.object).isRequired,
            }).isRequired,
        }).isRequired
    ).isRequired,
};

export default HomepageNews;
