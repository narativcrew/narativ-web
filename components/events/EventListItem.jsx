import React from 'react';
import PropTypes from 'prop-types';
import Image from 'next/image';
import Link from 'next/link';

import styles from './events.module.scss';

const EventListItem = ({ id, title, description, image }) => (
    <Link href={`/akce/${id}`} className={styles.event_list__item}>
        <div className={styles.thumb__wrapper}>
            <Image src={image} fill className={styles.thumb__image} alt={title} />
        </div>
        <h4>{title}</h4>
        {description}
    </Link>
);

EventListItem.propTypes = {
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    description: PropTypes.node.isRequired,
    image: PropTypes.shape({
        src: PropTypes.string.isRequired,
    }).isRequired,
};

export default EventListItem;
