import cx from 'classnames';
import styles from './footer.module.css';

const Footer = () => {
    return (
        <footer>
            <div className="container mt-5 py-5">
                <div className="row">
                    <div className={cx('col-md-6 col-sm-12', styles.footerColumn)}>
                        <span>Podpořte Narativ</span>
                        <br />
                        <span>Podpořit nás můžete bankovním převodem na účet 2101103999 / 2010</span>
                    </div>
                    <div className={cx('col-md-3 col-sm-12', styles.footerColumn)}>
                        <span>Spolupracující síť</span>
                        <br />
                        <span>Organizace v ČR</span>
                        <br />
                        <span>Organizace a lidé v zahraničí</span>
                        <br />
                    </div>
                    <div className={cx('col-md-3 col-sm-12', styles.footerColumn)}>
                        <span>Materialy</span>
                        <br />
                        <span>Video a texty</span>
                        <br />
                        <span>Fotogalerie</span>
                        <br />
                        <span>Obchod</span>
                        <br />
                        <span>Blogy - archiv</span>
                        <br />
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
