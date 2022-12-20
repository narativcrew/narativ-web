import Image from 'next/image'
import cx from 'classnames';

import stylesHomepage from './homepage.module.scss'
import bg from '/public/images/hp-header.jpg'
import BannerShape2 from '/public/images/banner-shape-2.png'

const Attribute = ({ title, description }) => (
    <div className={cx('col-md-4', 'align-items-center', 'd-flex', stylesHomepage.attributesItem)}>
        <div>
            <h3>{title}</h3>
            <p>{description}</p>
        </div>
    </div>
)

const HomepageHeader = () => (
    <div className={stylesHomepage.header}>
        <div className={stylesHomepage.featuredImage} style={{ backgroundImage: `url(${bg.src})` }}>
            <div className="container">
                <div className='row align-items-center h-100'>
                    <div className='col-md-6 offset-md-6'>
                        <div className={stylesHomepage.bannerContent}>
                        <div className="hero-l3-shape-2 d-none d-md-block aos-init aos-animate" data-aos="fade-up" data-aos-delay="700" data-aos-duration="1000">
                                <Image className="floating" src={BannerShape2} alt="image" />
                        </div>
                        <div className="content">
                            <h2>Jsme sociální a&nbsp;vztahová platforma</h2>
                            <p>Narativ je vztahová či sociální platforma se záměrem šírit postmo derní praxi v České republice a na Slovensku. Slovo Narativ vám může připomínat narativní terapii, ale odkazujeme tím spíše na vyprávění příběhů vůbec, které je zásadní pro všechny přístupy, které zahrnujeme do postmoderní rodiny.</p>
                        </div>
                        <div className="hero-l3-btn-group">
                            <a href="#" className="btn focus-reset btn-style-04 lets-talk-btn">Let&apos;s Talk</a>
                            <a href="#" className="btn focus-reset view-works-btn">View our work</a>
                        </div>
                    </div>
                    </div>
                </div>
            </div>
        </div>

        <div className={stylesHomepage.attributes}>
            <div className="container">
                <div className="row">
                    <Attribute title="Terapie" description="A team of experts passionate about product management" />
                    <Attribute title="Vzdělávání" description="A team of experts passionate about product management" />
                    <Attribute title="Praxe" description="A team of experts passionate about product management" />
                </div>
            </div>
        </div>
    </div>
)

export default HomepageHeader
