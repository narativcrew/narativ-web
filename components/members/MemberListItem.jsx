import React from 'react';
import PropTypes from 'prop-types';
import Link from 'next/link';
import Image from 'next/image';
import { CardButton } from 'components/Buttons';
import cx from 'classnames';

import styles from './members.module.css';

const MemberListItem = ({ id, title, desc, image }) => (
    <div className={styles.memberCard}>
        <Image className={styles.memberCardImg} src={image} alt={title} />
        <div className={cx('text-start', styles.memberCardContent)}>
            <h5 className={styles.memberCardTitle}>{title}</h5>
            <div className={styles.memberCardText}>{desc}</div>
            <Link href={`/clenove/${id}`}>
                <CardButton>Vice</CardButton>
            </Link>
        </div>
    </div>
);

MemberListItem.propTypes = {
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    desc: PropTypes.string.isRequired,
    image: PropTypes.shape({
        src: PropTypes.string.isRequired,
    }).isRequired,
};

export default MemberListItem;
