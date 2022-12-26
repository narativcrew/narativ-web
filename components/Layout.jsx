import React from 'react';
import PropTypes from 'prop-types';

import { Header } from './header';
import { Footer } from './footer';
import styles from './components.module.scss';

export const FullPage = ({ children }) => <div className={styles.fullpage}>{children}</div>;

FullPage.propTypes = {
    children: PropTypes.node.isRequired,
};

const Layout = ({ children }) => (
    <>
        <Header />
        <main>{children}</main>
        <Footer />
    </>
);

Layout.propTypes = {
    children: PropTypes.node.isRequired,
};

export default Layout;
