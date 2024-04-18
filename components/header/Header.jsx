import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import cx from 'classnames';
import Logo from 'public/images/logo.svg';
// import LogoWhite from 'public/images/logo-white.svg';

import styles from './header.module.scss';

/*
    const [scroll, setScroll] = useState(false);

    useEffect(() => {
        window.addEventListener('scroll', () => {
            setScroll(window.scrollY > 50);
        });
    }, []);
    // <div className={cx(styles.header, scroll ? styles.bgWhite : null)}>
    // <Image src={scroll ? Logo : LogoWhite} alt="Narativ" />
*/

const navItems = [
    {
        label: 'Úvod',
        href: '/',
    },
    {
        label: 'Aktuality',
        href: '/aktuality',
    },
    {
        label: 'Akce',
        href: '/akce',
    },
    {
        label: 'Členové Narativu',
        href: '/clenove',
    },
    {
        label: 'Komunitní tým',
        href: '/komunitni-tym',
    },
    {
        label: 'Kontakt',
        href: '/kontakt',
    },
];

const Header = () => {
    const [isNavOpen, setIsNavOpen] = useState(false);

    const handleNavToggle = () => {
        setIsNavOpen(!isNavOpen);
    };

    return (
        <div className={cx(styles.header, styles.bgWhite)}>
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <nav className="navbar navbar-expand-lg justify-content-end">
                            <Link href="/" className="navbar-brand">
                                <Image src={Logo} alt="Narativ" />
                            </Link>
                            <button
                                className="navbar-toggler"
                                type="button"
                                data-toggle="collapse"
                                data-target="#navbarSupportedContent"
                                aria-controls="navbarSupportedContent"
                                aria-expanded="false"
                                aria-label="Toggle navigation"
                                onClick={handleNavToggle}
                            >
                                <span className="navbar-toggler-icon" />
                            </button>
                            <div
                                className={cx('collapse navbar-collapse justify-content-end', isNavOpen && 'show')}
                                id="navbarSupportedContent"
                            >
                                <ul className={cx('navbar-nav nav', styles.navigation)}>
                                    {navItems.map((item) => (
                                        <li className="nav-item" key={item.label}>
                                            <Link
                                                className="nav-link"
                                                href={item.href}
                                                onClick={() => setIsNavOpen(false)}
                                            >
                                                {item.label}
                                            </Link>
                                        </li>
                                    ))}
                                    <li className="nav-item">
                                        <Link
                                            className="nav-link"
                                            href="https://www.facebook.com/groups/123857190986755"
                                            target="_blank"
                                        >
                                            <i className="bi bi-facebook" />
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                        </nav>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Header;
