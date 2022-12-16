import cx from 'classnames'
import styles from './footer.module.css'

const Footer = () => {
    return (
        <footer>
            <div className={cx('container mt-5')}>
                <div className="row">
                    <div className="col-md-6 col-sm-12">
                        <h6>Podpořte Narativ</h6>
                        <p>Podpořit nás můžete bankovním převodem na účet 2101103999 / 2010</p>
                    </div>
                    <div className='col-md-3 col-sm-12'>
                        <h6>Spolupracující síť</h6>
                        <p>
                        Organizace v ČR<br/>
                        Organizace a lidé v zahraničí<br/>
                        </p>
                    </div>
                    <div className='col-md-3 col-sm-12'>
                        <h6>Materialy</h6>
                        <p>
                        Video a texty<br/>
                        Fotogalerie<br/>
                        Obchod<br/>
                        Blogy - archiv<br/>
                        </p>
                    </div>
                </div>
            </div>
            
        </footer>
    )
}

export default Footer
