import styles from './components.module.css'
import { cx } from '/utils'

const FeaturedImage = ({ image, hasOverlay, children }) => (
    <div className={cx(styles.featuredImage, hasOverlay ? styles.overlay : null)} style={{ backgroundImage: `url(${image.src})`}}>
        {children}
    </div>
)

export default FeaturedImage
