import React from 'react';
import PropTypes from 'prop-types';
import Link from 'next/link';
import { CardButton } from 'components/Buttons';
import cx from 'classnames';
import { PrismicRichText } from '@prismicio/react';

import styles from './members.module.css';

const MemberListItem = ({ id, name, desc, image }) => (
    <div className="col-lg-4 mb-4">
        <div className={cx(styles.memberCard)}>
            <div className={styles.memberCardImg} style={{ backgroundImage: `url(${image})` }} />
            <div className={cx('text-start', styles.memberCardContent)}>
                <h5 className={styles.memberCardTitle}>{name}</h5>
                <div className={styles.memberCardText}>
                    <PrismicRichText field={desc} />
                </div>
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
    name: PropTypes.array.isRequired,
    desc: PropTypes.array.isRequired,
    image: PropTypes.string.isRequired,
};

export default MemberListItem;
