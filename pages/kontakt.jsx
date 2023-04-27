import React, { useState } from 'react';
import Head from 'next/head';
import PropTypes from 'prop-types';
import cx from 'classnames';
import stylesContact from 'components/contact/contact.module.css';
import FeaturedImage from 'components/FeaturedImage';
import { BlockButton } from 'components/Buttons';
import { createClient } from 'prismicio';

const Contact = ({ headerImage }) => {
    // States for contact form fields
    const [fullname, setFullname] = useState('');
    const [email, setEmail] = useState('');
    const [subject, setSubject] = useState('');
    const [message, setMessage] = useState('');

    //   Form validation state
    const [errors, setErrors] = useState({});

    //   Setting button text on form submission
    const [buttonText, setButtonText] = useState('Odeslat');

    // Setting success or failure messages states
    const [showSuccessMessage, setShowSuccessMessage] = useState(false);
    const [showFailureMessage, setShowFailureMessage] = useState(false);

    // Validation check method
    const handleValidation = () => {
        const tempErrors = {};
        let isValid = true;

        if (fullname.length <= 0) {
            tempErrors.fullname = true;
            isValid = false;
        }
        if (email.length <= 0) {
            tempErrors.email = true;
            isValid = false;
        }
        if (subject.length <= 0) {
            tempErrors.subject = true;
            isValid = false;
        }
        if (message.length <= 0) {
            tempErrors.message = true;
            isValid = false;
        }

        setErrors({ ...tempErrors });
        console.log('errors', errors);
        return isValid;
    };

    //   Handling form submit

    const handleSubmit = async (e) => {
        e.preventDefault();

        const isValidForm = handleValidation();

        if (isValidForm) {
            setButtonText('Sending');
            const res = await fetch('/api/sendgrid', {
                body: JSON.stringify({
                    email,
                    fullname,
                    subject,
                    message,
                }),
                headers: {
                    'Content-Type': 'application/json',
                },
                method: 'POST',
            });

            const { error } = await res.json();
            if (error) {
                console.log(error);
                setShowSuccessMessage(false);
                setShowFailureMessage(true);
                setButtonText('Send');
                return;
            }
            setShowSuccessMessage(true);
            setShowFailureMessage(false);
            setFullname('');
            setEmail('');
            setSubject('');
            setMessage('');
            setButtonText('Send');
        }
    };

    return (
        <>
            <Head>
                <title>Narativ | Kontakt</title>
                <meta property="og:title" content="Narativ | Kontakt" key="title" />
            </Head>

            <FeaturedImage image={headerImage.data.image.url} />
            <div className={stylesContact.contactBgBox}>
                <div className="container pb-5 pt-2">
                    <div className="row">
                        <h1 className={stylesContact.contactHeading}>Napište nám</h1>
                    </div>
                    <div className="row justify-content-center">
                        <div className={cx('col-md-5', stylesContact.contactFormWrapper)}>
                            <form onSubmit={handleSubmit}>
                                <div className={stylesContact.formGroup}>
                                    <label htmlFor="inputName" className={stylesContact.formLabel}>
                                        Vaše jméno
                                        <input
                                            type="name"
                                            className={stylesContact.contactFormField}
                                            id="inputName"
                                            value={fullname}
                                            onChange={(e) => {
                                                setFullname(e.target.value);
                                            }}
                                            name="fullname"
                                            aria-describedby="nameHelp"
                                            placeholder="Vaše jméno zde"
                                        />
                                    </label>
                                </div>
                                <div className={stylesContact.formGroup}>
                                    <label htmlFor="inputEmail" className={stylesContact.formLabel}>
                                        Váš email
                                        <input
                                            type="email"
                                            className={stylesContact.contactFormField}
                                            id="inputEmail"
                                            name="email"
                                            value={email}
                                            onChange={(e) => {
                                                setEmail(e.target.value);
                                            }}
                                            placeholder="Váš email zde"
                                        />
                                    </label>
                                </div>
                                <div className={stylesContact.formGroup}>
                                    <label htmlFor="inputSubject" className={stylesContact.formLabel}>
                                        Předmět
                                        <input
                                            type="text"
                                            className={stylesContact.contactFormField}
                                            id="inputSubject"
                                            name="subject"
                                            value={subject}
                                            onChange={(e) => {
                                                setSubject(e.target.value);
                                            }}
                                            placeholder="Předmět zprávy zde"
                                        />
                                    </label>
                                </div>
                                <div className={stylesContact.formGroup}>
                                    <label htmlFor="textareaMessage" className={stylesContact.formLabel}>
                                        Zpráva
                                        <textarea
                                            className={stylesContact.contactFormField}
                                            id="textareaMessage"
                                            rows="3"
                                            name="message"
                                            value={message}
                                            onChange={(e) => {
                                                setMessage(e.target.value);
                                            }}
                                            placeholder="Váš text zde"
                                        />
                                    </label>
                                </div>
                                <BlockButton type="submit">{buttonText}</BlockButton>
                                <div className="text-left">
                                    {showSuccessMessage && (
                                        <p className="text-green-500 font-semibold text-sm my-2">
                                            Děkujeme! Vaše zpráva byla úspěšně odeslána.
                                        </p>
                                    )}
                                    {showFailureMessage && (
                                        <p className="text-red-500">
                                            Ups! Něco se pokazilo. Zkuste to prosím znovu, nebo nám napište na{' '}
                                            <a href="mailto:info@narativ.cz">info@narativ.cz</a>.
                                        </p>
                                    )}
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

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
    const footerLeft = await client.getSingle('footer_column_left');
    const footerCenter = await client.getSingle('footer_column_center');
    const footerRight = await client.getSingle('footer_column_right');

    const footer = {
        footerLeft,
        footerCenter,
        footerRight,
    };
    return {
        props: { headerImage, footer },
    };
}
