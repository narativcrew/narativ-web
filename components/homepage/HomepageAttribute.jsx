import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import { PrismicRichText } from '@prismicio/react';

import stylesHomepage from './homepage.module.scss';

const HomepageAttribute = ({ label, title, description }) => (
    <div className={cx('col-md-4', 'align-items-center', 'd-flex', stylesHomepage.attributesItem)}>
        <div className="row">
            <div className="col-2">
                <div className={stylesHomepage.attributesNumber}>0{label + 1}</div>
            </div>
            <div className="col-10">
                <h3>{title}</h3>
                <PrismicRichText field={description} />
            </div>
        </div>
    </div>
);

HomepageAttribute.propTypes = {
    label: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    description: PropTypes.array.isRequired,
};

export default HomepageAttribute;
