import React from 'react';
import PropTypes from 'prop-types';

import styles from './components.module.scss';

export const PrimaryButton = ({ children, ...props }) => (
    <button type="button" className="btn btn-primary" {...props}>
        {children}
    </button>
);

PrimaryButton.propTypes = {
    children: PropTypes.node.isRequired,
};

export const BlockButton = ({ children, onClick = () => {}, ...props }) => (
    <button type="button" className={styles.blockButton} onClick={onClick} {...props}>
        {children}
    </button>
);

BlockButton.propTypes = {
    children: PropTypes.node.isRequired,
    onClick: PropTypes.func,
};

export const CardButton = ({ children, ...props }) => (
    <button type="button" className={styles.cardButton} {...props}>
        {children}
    </button>
);

CardButton.propTypes = {
    children: PropTypes.node.isRequired,
};
