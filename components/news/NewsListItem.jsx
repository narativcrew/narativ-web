import styles from './news.module.css'

const NewsListItem = ({ id, title, description, image }) => (
    <>
        <div className={styles.newsListItem}>
            <div className={styles.dateBoxWrapper}>
                <div className={styles.dateBox}>
                    <span>17. sept</span>
                    <span>2022</span>
                </div>
            </div>
            <div className={styles.newsText}>
                <h3>{title}</h3>
                {description}
            </div>
        </div>
    </>
)

export default NewsListItem
