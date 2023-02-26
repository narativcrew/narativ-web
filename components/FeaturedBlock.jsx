import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';

import styles from './components.module.scss';
import { PrismicRichText } from '@prismicio/react';

const FeaturedBlock = ({ text, image, background }) => (
    <div className="container-fluid">
        <div className="row">
            <div className="col-md-6" style={{ background }}>
                <div className={styles.featuredBlockContent}>
                    <PrismicRichText field={text}/>
                </div>
            </div>
            <div
                className={cx('col-md-6', styles.featuredBlockImage)}
                style={{ backgroundImage: `url(${image})` }}
            />
        </div>
    </div>
);

FeaturedBlock.defaultProps = {
    title: null,
    subtitle: null,
    background: 'linear-gradient(270.32deg, #047af5 0.34%, rgba(23, 135, 252, 0.6) 99.79%)',
};

FeaturedBlock.propTypes = {
    text: PropTypes.string.isRequired,
    title: PropTypes.string,
    subtitle: PropTypes.string,
    image: PropTypes.shape({
        src: PropTypes.string.isRequired,
    }).isRequired,
    background: PropTypes.string,
};

export default FeaturedBlock;
