import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';

import styles from './components.module.scss';

const FeaturedImage = ({ image, hasOverlay, children }) => (
    <div
        className={cx(styles.featuredImage, hasOverlay ? styles.overlay : null)}
        style={{ backgroundImage: `url(${image})` }}
    >
        {children}
    </div>
);

FeaturedImage.defaultProps = {
    hasOverlay: false,
    children: null,
};

FeaturedImage.propTypes = {
    image: PropTypes.string.isRequired,
    hasOverlay: PropTypes.bool,
    children: PropTypes.node,
};

export default FeaturedImage;
