import Link from 'next/link'
import styles from './header.module.css'

const Header = () => {
    return (
        <>
            <div className={styles.header}>
                <div className="container">
                    <div className="row">
                        <div className="col-md-4">
                            <h3>Narativ</h3>
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
