import React from 'react';
import { SliceZone } from '@prismicio/react'
import { components } from '../../slices'
import { createClient } from "../../prismicio";

import PropTypes from 'prop-types';
import Image from 'next/image';
import bg from 'public/images/hp-header.jpg';
import BannerShape2 from 'public/images/banner-shape-2.png';

import stylesHomepage from './homepage.module.scss';
import HomepageAttribute from './HomepageAttribute';

export async function getStaticProps({ previewData }) {
    const client = createClient({ previewData });

    const page = await client.getSingle('homepage');

    return {
        props: {
            page,
        },
    };
}

const HomepageHeader = ({page}) => (
    <div className={stylesHomepage.header}>
        <div className={stylesHomepage.featuredImage} style={{ backgroundImage: `url(${bg.src})` }}>
            <div className="container">
                <div className="row align-items-center h-100">
                    <div className="col-md-6 offset-md-6">
                        <div className={stylesHomepage.bannerContent}>
                            <div
                                className="hero-l3-shape-2 d-none d-md-block aos-init aos-animate"
                                data-aos="fade-up"
                                data-aos-delay="700"
                                data-aos-duration="1000"
                            >
                                <Image className="floating" src={BannerShape2} alt="image" />
                            </div>
                            <SliceZone slices={page.data.slices} components={components} />
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div className={stylesHomepage.attributes}>
            <div className="container">
                <div className="row">
                    <HomepageAttribute
                        number="01"
                        title="Terapie"
                        description="A team of experts passionate about product management"
                    />
                    <HomepageAttribute
                        number="02"
                        title="Vzdělávání"
                        description="A team of experts passionate about product management"
                    />
                    <HomepageAttribute
                        number="03"
                        title="Praxe"
                        description="A team of experts passionate about product management"
                    />
                </div>
            </div>
        </div>
    </div>
);

HomepageHeader.propTypes = {
    page: PropTypes.object,
};

export default HomepageHeader;
