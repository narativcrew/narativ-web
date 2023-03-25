import React from 'react';
import Head from 'next/head';
import PropTypes from 'prop-types';
import cx from 'classnames';
import stylesContact from 'components/contact/contact.module.css';
import FeaturedImage from 'components/FeaturedImage';
import { BlockButton } from 'components/Buttons';
import { createClient } from 'prismicio';

const Contact = ({ headerImage }) => (
    <>
        <Head>
            <title>Narativ | Kontakt</title>
            <meta property="og:title" content="Narativ | Kontakt" key="title" />
        </Head>

        <FeaturedImage image={headerImage.data.image.url} />
        <div className={stylesContact.contactBgBox}>
            <div className="container pb-5 pt-2">
                <div className="row">
                    <h1 className={stylesContact.contactHeading}>Napiste nam</h1>
                </div>
                <div className="row justify-content-center">
                    <div className={cx('col-md-5', stylesContact.contactFormWrapper)}>
                        <form>
                            <div className={stylesContact.formGroup}>
                                <label htmlFor="inputName" className={stylesContact.formLabel}>
                                    Your name
                                    <input
                                        type="name"
                                        className={stylesContact.contactFormField}
                                        id="inputName"
                                        aria-describedby="nameHelp"
                                        placeholder="Your name here"
                                    />
                                </label>
                            </div>
                            <div className={stylesContact.formGroup}>
                                <label htmlFor="inputEmail" className={stylesContact.formLabel}>
                                    Your email
                                    <input
                                        type="email"
                                        className={stylesContact.contactFormField}
                                        id="inputEmail"
                                        placeholder="Your email here"
                                    />
                                </label>
                            </div>
                            <div className={stylesContact.formGroup}>
                                <label htmlFor="inputSubject" className={stylesContact.formLabel}>
                                    Subject
                                    <input
                                        type="email"
                                        className={stylesContact.contactFormField}
                                        id="inputSubject"
                                        placeholder="Subject"
                                    />
                                </label>
                            </div>
                            <div className={stylesContact.formGroup}>
                                <label htmlFor="textareaMessage" className={stylesContact.formLabel}>
                                    Message
                                    <textarea
                                        className={stylesContact.contactFormField}
                                        id="textareaMessage"
                                        rows="3"
                                        placeholder="Your message here"
                                    />
                                </label>
                            </div>
                            <BlockButton type="submit">Odeslat</BlockButton>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </>
);

Contact.propTypes = {
    headerImage: PropTypes.shape({
        data: PropTypes.shape({
            image: PropTypes.shape({
                url: PropTypes.string.isRequired,
            }).isRequired,
        }).isRequired,
    }).isRequired,
};

export default Contact;

export async function getStaticProps({ previewData }) {
    const client = createClient({ previewData });
    const headerImage = await client.getSingle('contact_header_image');
    console.log(headerImage);
    return {
        props: { headerImage },
    };
}
