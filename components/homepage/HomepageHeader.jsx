import React from 'react';

import PropTypes from 'prop-types';
import Image from 'next/image';
import bg from 'public/images/hp-header.jpg';
import BannerShape2 from 'public/images/banner-shape-2.png';

import stylesHomepage from './homepage.module.scss';
import HomepageAttribute from './HomepageAttribute';
import { PrismicRichText } from '@prismicio/react';



const HomepageHeader = ({intro}) => (
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
                            
                                <div className="content">
                                <h2>
                                    {intro?.data.title && <PrismicRichText field={intro.data.title} />}
                                </h2>
                                <p>
                                    {intro?.data.description && <PrismicRichText field={intro.data.description} />}
                                </p>
                            </div>
                            
                            
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
    intro: PropTypes.object,
};

export default HomepageHeader;


