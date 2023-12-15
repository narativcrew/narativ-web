import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import { PrismicLink, PrismicRichText } from '@prismicio/react';

import styles from './members.module.css';

const MemberListItem = ({ name, desc, image, phoneNumber, email, webpage }) => (
    <div className="col-lg-4 mb-4">
        <div className={cx(styles.memberCard)}>
            <div className={styles.memberCardImg} style={{ backgroundImage: `url(${image})` }} />
            <div className={cx('text-start', styles.memberCardContent)}>
                <h5 className={styles.memberCardTitle}>{name}</h5>
                {(phoneNumber || email || webpage) && (
                    <>
                        <div className={cx(styles.memberDetailContactsBox, 'text-right py-1')}>
                            {phoneNumber && (
                                <span>
                                    <i className="bi bi-phone" />
                                    {phoneNumber}
                                </span>
                            )}
                            {email && (
                                <span>
                                    <i className="bi bi-envelope" />
                                    {email}
                                </span>
                            )}

                            {webpage && webpage.url && (
                                <span>
                                    <i className="bi bi-globe" />
                                    <PrismicLink target="_blank" field={webpage}>
                                        Osobní stránky
                                    </PrismicLink>
                                </span>
                            )}
                        </div>
                        <hr />
                    </>
                )}
                <div className={styles.memberCardText}>
                    <PrismicRichText field={desc} />
                </div>
            </div>
        </div>
    </div>
);

MemberListItem.propTypes = {
    name: PropTypes.string.isRequired,
    desc: PropTypes.array.isRequired,
    image: PropTypes.string.isRequired,
    phoneNumber: PropTypes.string,
    email: PropTypes.string,
    webpage: PropTypes.object,
};

MemberListItem.defaultProps = {
    phoneNumber: null,
    email: null,
    webpage: null,
};

export default MemberListItem;
