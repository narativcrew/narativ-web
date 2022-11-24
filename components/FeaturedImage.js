import styles from './components.module.css'

const FeaturedImage = ({ image }) => (
    <div className={styles.featuredImage} style={{ backgroundImage: `url(${image.src})`}} />
)

export default FeaturedImage
