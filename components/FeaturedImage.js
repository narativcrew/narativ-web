import styles from './components.module.scss'
import cx from 'classnames'

const FeaturedImage = ({ image, hasOverlay, children }) => (
    <div className={cx(styles.featuredImage, hasOverlay ? styles.overlay : null)} style={{ backgroundImage: `url(${image.src})`}}>
        {children}
    </div>
)

export default FeaturedImage
