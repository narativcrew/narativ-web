import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import cx from 'classnames';
import Logo from 'public/images/logo.svg';
import LogoWhite from 'public/images/logo-white.svg';

import styles from './header.module.css';

const Header = () => {
    const [scroll, setScroll] = useState(false);

    useEffect(() => {
        window.addEventListener('scroll', () => {
            setScroll(window.scrollY > 50);
        });
    }, []);

    return (
        <div className={cx(styles.header, scroll ? styles.bgWhite : null)}>
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-md-4">
                        <Link href="/">
                            <Image src={scroll ? Logo : LogoWhite} alt="Narativ" />
                        </Link>
                    </div>
                    <div className="col-md-8">
                        <nav>
                            <ul className="nav justify-content-end">
                                <li className="nav-item">
                                    <Link className="nav-link" href="/">
                                        Úvod
                                    </Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" href="/aktuality">
                                        Aktuality
                                    </Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" href="/akce">
                                        Akce
                                    </Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" href="/kontakt">
                                        Kontakt
                                    </Link>
                                </li>
                            </ul>
                        </nav>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Header;
