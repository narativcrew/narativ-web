import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';

import styles from './components.module.scss';

const FeaturedBlock = ({ text, title, subtitle, image, background }) => (
    <div className="container-fluid">
        <div className="row">
            <div className="col-md-6" style={{ background }}>
                <div className={styles.featuredBlockContent}>
                    <h2>{text}</h2>
                    {(title || subtitle) && (
                        <div className="d-flex mt-5">
                            <div className={styles.featuredBlockLine}>
                                <span />
                            </div>
                            <div className={styles.featuredBlockTexts}>
                                {title && <h6>{title}</h6>}
                                {subtitle && <span>{subtitle}</span>}
                            </div>
                        </div>
                    )}
                </div>
            </div>
            <div
                className={cx('col-md-6', styles.featuredBlockImage)}
                style={{ backgroundImage: `url(${image.src})` }}
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
