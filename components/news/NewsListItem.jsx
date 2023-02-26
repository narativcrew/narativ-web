import React from 'react';
import PropTypes from 'prop-types';
import Link from 'next/link';
import * as prismicH from '@prismicio/helpers';


import styles from './news.module.css';

const NewsListItem = ({ id, publicationDate, title, description }) => (
    <div className={styles.newsListItem}>
        <div className={styles.dateBoxWrapper}>
            <div className={styles.dateBox}>
                <span>{prismicH.asDate(publicationDate).getDate()}. {shortMonth(prismicH.asDate(publicationDate).getMonth()+1)}</span>
                <span>{prismicH.asDate(publicationDate).getFullYear()}</span>
            </div>
        </div>
        <div className={styles.newsText}>
            <Link href={`/aktuality/${id}`}>
                <h3>{title}</h3>
            </Link>
            {getExcerpt(description)}
        </div>
    </div>
);

NewsListItem.propTypes = {
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    publicationDate: PropTypes.object.isRequired,
    description: PropTypes.node.isRequired,
};

export default NewsListItem;

export function shortMonth(monthNr) {
    switch(monthNr) {
        case 1: 
            return "led";
        case 2: 
            return "ún";
        case 3: 
            return "bře";
        case 4: 
            return "dub";
        case 5:
            return "kvě";
        case 6: 
            return "čvn";
        case 7:
            return "čvc";
        case 8:
            return "srp";
        case 9:
            return "zář";
        case 10:
            return "říj";
        case 11:
            return "list";
        case 12:
            return "pro";
    }
}

const getExcerpt = (textField) => {
    const text = prismicH.asText(textField)
  
    const excerpt = text.substring(0, 150);
  
    if (text.length > 300) {
      return excerpt.substring(0, excerpt.lastIndexOf(" ")) + "…";
    } else {
      return excerpt;
    }
  };