import Image from 'next/image'
import Link from 'next/link'

import styles from './events.module.scss'

const EventListItem = ({ id, title, description, image }) => (
    <Link href={`/akce/${id}`} className={styles.event_list__item}>
        <div className={styles.thumb__wrapper}>
            <Image src={image} fill className={styles.thumb__image} alt={title} />
        </div>
        <h4>{title}</h4>
        {description}
    </Link>
);

export default EventListItem;
