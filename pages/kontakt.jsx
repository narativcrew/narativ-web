import Head from 'next/head'
import cx from 'classnames'

import stylesContact from '/components/contact/contact.module.css'
import FeaturedImage from '/components/FeaturedImage'
import { BlockButton } from '/components/Buttons'

import bg from '/public/images/contact-featured-image.png'

const Contact = () => (
    <>
        <Head>
            <title>Narativ | Kontakt</title>
            <meta property="og:title" content="Narativ | Kontakt" key="title" />
        </Head>

        <FeaturedImage image={bg}>

        </FeaturedImage>
        <div className={stylesContact.contactBgBox}>
            <div className="container pb-5 pt-2">
                <div className="row">
                    <h1 className={stylesContact.contactHeading}>Napiste nam</h1>
                </div>
                <div className="row">
                    <div className={cx("col-md-8 col-lg-6 offset-md-2 offset-lg-3",stylesContact.contactFormWrapper)}>
                        <form>
                            <div className={stylesContact.formGroup}>
                                <label for="inputName" className={stylesContact.formLabel}>Your name</label>
                                <input type="name" className={stylesContact.contactFormField} id="inputName" aria-describedby="nameHelp" placeholder="Your name here"/>
                            </div>
                            <div className={stylesContact.formGroup}>
                                <label for="inputEmail" className={stylesContact.formLabel}>Your email</label>
                                <input type="email" className={stylesContact.contactFormField} id="inputEmail" placeholder="Your email here"/>
                            </div>
                            <div className={stylesContact.formGroup}>
                                <label for="inputSubject" className={stylesContact.formLabel}>Subject</label>
                                <input type="email" className={stylesContact.contactFormField} id="inputSubject" placeholder="Subject"/>
                            </div>
                            <div className={stylesContact.formGroup}>
                                <label for="textareaMessage" className={stylesContact.formLabel}>Message</label>
                                <textarea className={stylesContact.contactFormField} id="textareaMessage" rows="3" placeholder="Your message here"></textarea>
                            </div>
                            <BlockButton type="submit">Odeslat</BlockButton>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </>
)

export default Contact
