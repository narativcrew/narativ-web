import React, { useState, useEffect } from 'react'
import Link from 'next/link'

import { cx } from '/utils'
import styles from './header.module.css'

const Header = () => {
    const [scroll, setScroll] = useState(false);

    useEffect(() => {
        window.addEventListener("scroll", () => {
            setScroll(window.scrollY > 50);
        });
    }, []);

    return (
        <>
            <div className={cx(styles.header, scroll ? styles.bgWhite : null)}>
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-md-4">
                            <h3 className='mb-0'>Narativ</h3>
                        </div>
                        <div className="col-md-8">
                            <nav>
                                <ul className="nav justify-content-end">
                                    <li className="nav-item">
                                        <Link className="nav-link" href="/">Úvod</Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link className="nav-link" href="/aktuality">Aktuality</Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link className="nav-link" href="/akce">Akce</Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link className="nav-link" href="/kontakt">Kontakt</Link>
                                    </li>
                                </ul>
                            </nav>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Header
