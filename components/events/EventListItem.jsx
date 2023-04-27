import React from 'react';
import PropTypes from 'prop-types';
import Image from 'next/image';
import Link from 'next/link';
import * as prismicH from '@prismicio/helpers';

import styles from './events.module.scss';

const dateFormatter = new Intl.DateTimeFormat('cs-CZ', {
    month: 'short',
    day: 'numeric',
    year: 'numeric',
});

const getExcerpt = (textField) => {
    const text = prismicH.asText(textField);

    const excerpt = text.substring(0, 150);

    if (text.length > 300) {
        return `${excerpt.substring(0, excerpt.lastIndexOf(' '))}…`;
    }
    return excerpt;
};

const EventListItem = ({ id, title, startDate, endDate, venue, description, image, futureEvent }) => {
    const start = prismicH.asDate(startDate);
    const end = prismicH.asDate(endDate);
    return (
        <Link href={`/akce/${id}`} className={styles.event_list__item}>
            <div className={styles.thumb__wrapper}>
                <Image src={image} fill className={styles.thumb__image} alt={title} />
            </div>

            <h4>{title}</h4>
            <span className="font-weight-bold">
                {dateFormatter.format(start)}-{dateFormatter.format(end)} | {venue}
            </span>
            <br />
            {futureEvent && getExcerpt(description)}
        </Link>
    );
};

EventListItem.propTypes = {
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    startDate: PropTypes.string.isRequired,
    endDate: PropTypes.string.isRequired,
    venue: PropTypes.string.isRequired,
    description: PropTypes.array.isRequired,
    image: PropTypes.string.isRequired,
    futureEvent: PropTypes.bool,
};

EventListItem.defaultProps = {
    futureEvent: true,
};

export default EventListItem;
