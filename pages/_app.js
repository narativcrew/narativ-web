import Link from 'next/link'
import { PrismicProvider } from '@prismicio/react'
import { PrismicPreview } from '@prismicio/next'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-icons/font/bootstrap-icons.css'
import '/public/fonts/typo.css'
import '../styles/globals.scss'
import { repositoryName } from '../prismicio'
import Layout from '../components/layout'

function MyApp({ Component, pageProps }) {
    return (
        <PrismicProvider internalLinkComponent={Link}>
            <PrismicPreview repositoryName={repositoryName}>
                <Layout>
                    <Component {...pageProps} />
                </Layout>
            </PrismicPreview>
        </PrismicProvider>
    )
}

export default MyApp
