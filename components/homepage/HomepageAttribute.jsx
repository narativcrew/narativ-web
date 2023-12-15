import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import { PrismicRichText } from '@prismicio/react';

import stylesHomepage from './homepage.module.scss';

const HomepageAttribute = ({ title, description }) => (
    <div className={cx('col-md-4', 'align-items-top', 'd-flex', stylesHomepage.attributesItem)}>
        <div className="row">
            <div className="col-10">
                <h3>{title}</h3>
                <PrismicRichText field={description} />
            </div>
        </div>
    </div>
);

HomepageAttribute.propTypes = {
    title: PropTypes.string.isRequired,
    description: PropTypes.array.isRequired,
};

export default HomepageAttribute;
