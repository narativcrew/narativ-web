import React from 'react';
import PropTypes from 'prop-types';
import Image from 'next/image';
// import bg from 'public/images/hp-header.jpg';
import BannerShape2 from 'public/images/banner-shape-2.png';
import { PrismicRichText } from '@prismicio/react';

import stylesHomepage from './homepage.module.scss';
import HomepageAttribute from './HomepageAttribute';

const HomepageHeader = ({ intro, attributes }) => (
    <div className={stylesHomepage.header}>
        <div className={stylesHomepage.featuredImage} style={{ backgroundImage: `url(${intro.data.image.url})` }}>
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
                                <h2>{intro.data.title}</h2>
                                {intro?.data.description && <PrismicRichText field={intro.data.description} />}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div className={stylesHomepage.attributes}>
            <div className="container">
                <div className="row">
                    {attributes.length > 0 &&
                        attributes.map((attr) => (
                            <HomepageAttribute
                                key={attr.data.label}
                                label={attr.data.label}
                                title={attr.data.title}
                                description={attr.data.description}
                            />
                        ))}
                </div>
            </div>
        </div>
    </div>
);

HomepageHeader.propTypes = {
    intro: PropTypes.shape({
        data: PropTypes.shape({
            title: PropTypes.string.isRequired,
            description: PropTypes.arrayOf(PropTypes.object).isRequired,
            image: PropTypes.shape({
                url: PropTypes.string.isRequired,
            }).isRequired,
        }).isRequired,
    }).isRequired,
    attributes: PropTypes.arrayOf(
        PropTypes.shape({
            data: PropTypes.shape({
                title: PropTypes.string.isRequired,
                description: PropTypes.arrayOf(PropTypes.object).isRequired,
            }).isRequired,
        }).isRequired
    ).isRequired,
};

export default HomepageHeader;
