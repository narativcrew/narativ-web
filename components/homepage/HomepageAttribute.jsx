import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import stylesHomepage from './homepage.module.scss';


const HomepageAttribute = ({ number, title, description }) => (
    <div className={cx('col-md-4', 'align-items-center', 'd-flex', stylesHomepage.attributesItem)}>
        <div className="row">
            <div className="col-2">
                <div className={stylesHomepage.attributesNumber}>{number}</div>
            </div>
            <div className="col-10">
                <h3>{title}</h3>
                <p>{description}</p>
            </div>
        </div>
    </div>
);

HomepageAttribute.propTypes = {
    number: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
};

export default HomepageAttribute;