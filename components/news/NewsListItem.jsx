import React from 'react';
import PropTypes from 'prop-types';
import Link from 'next/link';

import styles from './news.module.css';

const NewsListItem = ({ id, title, description }) => (
    <div className={styles.newsListItem}>
        <div className={styles.dateBoxWrapper}>
            <div className={styles.dateBox}>
                <span>17. sept</span>
                <span>2022</span>
            </div>
        </div>
        <div className={styles.newsText}>
            <Link href={`/aktuality/${id}`}>
                <h3>{title}</h3>
            </Link>
            {description}
        </div>
    </div>
);

NewsListItem.propTypes = {
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    description: PropTypes.node.isRequired,
};

export default NewsListItem;
