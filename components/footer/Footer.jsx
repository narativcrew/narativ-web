import React from 'react';
import cx from 'classnames';
import { PrismicRichText } from '@prismicio/react';

import styles from './footer.module.css';

const Footer = (data) => {
    const footers = data || {};
    const { footerLeft, footerCenter, footerRight } = footers.data;

    return (
        <footer>
            <div className="container mt-5 py-5">
                <div className="row">
                    <div className={cx('col-md-6 col-sm-12', styles.footerColumn)}>
                        <span>{footerLeft.data.title}</span>
                        <br />
                        {footerLeft.data.items.length > 0 && (
                            <>
                                {footerLeft.data.items.map((i) => {
                                    console.log(i);
                                    return <PrismicRichText field={i} />;
                                })}
                            </>
                        )}
                    </div>
                    <div className={cx('col-md-3 col-sm-12', styles.footerColumn)}>
                        <span>{footerCenter.data.title}</span>
                        <br />
                        {footerCenter.data.items.length > 0 && (
                            <>
                                {footerCenter.data.items.map((i) => {
                                    console.log(i);
                                    return <PrismicRichText field={i} />;
                                })}
                            </>
                        )}
                    </div>
                    <div className={cx('col-md-3 col-sm-12', styles.footerColumn)}>
                        <span>{footerRight.data.title}</span>
                        <br />
                        {footerRight.data.items.length > 0 && (
                            <>
                                {footerRight.data.items.map((i) => {
                                    console.log(i);
                                    return <PrismicRichText field={i} />;
                                })}
                            </>
                        )}
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
