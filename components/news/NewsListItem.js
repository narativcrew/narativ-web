import styles from './news.module.css'

const NewsListItem = () => (
    <>
        <div className={styles.newsListItem}>
            <div className={styles.dateBox}>
                <span>17. sept</span>
                <span>2022</span>
            </div>
            <div>
                <h3>Titulek</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nunc vel tincidunt lacinia, nunc nisl aliquet nisl, vel aliquet nisl nisl sit amet lorem. Sed euismod, nunc vel tincidunt lacinia, nunc nisl aliquet nisl, vel aliquet nisl nisl sit amet lorem.</p>
            </div>
        </div>
    </>
)

export default NewsListItem
