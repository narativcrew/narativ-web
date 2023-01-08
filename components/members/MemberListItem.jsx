import React from 'react';
import PropTypes from 'prop-types';
import Link from 'next/link';
import { CardButton } from 'components/Buttons';
import cx from 'classnames';

import styles from './members.module.css';

const MemberListItem = ({ id, title, desc, image }) => (
    <div className="col-lg-4 mb-4">
        <div className={cx(styles.memberCard)}>
            <div className={styles.memberCardImg} style={{ backgroundImage: `url(${image.src})` }} />
            <div className={cx('text-start', styles.memberCardContent)}>
                <h5 className={styles.memberCardTitle}>{title}</h5>
                <div className={styles.memberCardText}>{desc}</div>
                <div className={styles.memberCardButtonWrapper}>
                    <Link href={`/clenove/${id}`}>
                        <CardButton>Vice</CardButton>
                    </Link>
                </div>
            </div>
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
