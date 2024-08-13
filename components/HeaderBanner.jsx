import React from 'react';
import PropTypes from 'prop-types';
import { PrismicRichText } from '@prismicio/react';

import styles from './components.module.scss';
import FeaturedImage from './FeaturedImage';

const HeaderBanner = ({ title, description, image }) => (
    <FeaturedImage hasOverlay image={image}>
        <div className={styles.featuredImageHeader}>
            <div className="container mb-3">
                <h1>{title}</h1>
                {description && <PrismicRichText field={description} />}
            </div>
        </div>
    </FeaturedImage>
);

HeaderBanner.defaultProps = {
    title: null,
    description: null,
};

HeaderBanner.propTypes = {
    title: PropTypes.string,
    description: PropTypes.string,
    image: PropTypes.string.isRequired,
};

export default HeaderBanner;
