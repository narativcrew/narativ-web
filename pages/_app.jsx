import React from 'react';
import PropTypes from 'prop-types';
import Link from 'next/link';
import { PrismicProvider } from '@prismicio/react';
import { PrismicPreview } from '@prismicio/next';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import 'public/fonts/typo.css';
import Layout from 'components/Layout';

import '../styles/globals.scss';
import { repositoryName } from '../prismicio';

function MyApp({ Component, pageProps }) {
    return (
        <PrismicProvider internalLinkComponent={Link}>
            <PrismicPreview repositoryName={repositoryName}>
                <Layout>
                    <Component {...pageProps} />
                </Layout>
            </PrismicPreview>
        </PrismicProvider>
    );
}

MyApp.propTypes = {
    Component: PropTypes.elementType.isRequired,
    pageProps: PropTypes.objectOf(PropTypes.any).isRequired,
};

export default MyApp;
