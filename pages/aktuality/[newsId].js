import { useRouter } from 'next/router'
import styles from '/components/news/news.module.css'
import cx from 'classnames'

const NewsDetail = () => {
    const router = useRouter()
    const { newsId: newsId } = router.query

    return <>
        <div>
            <div className={cx(styles.newsDetailHeadingBox, "text-center")}>
                <h1>Další kroky v dialogické praxi
 (id: {newsId})</h1>
            </div>
        </div>
        <div className="container mt-5">
            <div className="row">
                <div className="col-md-8">
                <p>24.-25. února 2022, Brno <br/> Skupina Narativ si Vás dovoluje pozvat na workshop o dialogické práci s rodinami s vynikající finskou lektorkou, Eijou-Liisou Rautiainen, Ph.D., který je přednostně určen těm, kteří již mají povědomí o dialogické praxi, resp. Otevřeném dialogu. Bude se mimo jiné věnovat etickým otázkám tohoto způsobu práce. Tlumočení z angličtiny zajištěno.<br/> Více informací na webu zde: <a href="https://www.moznostidialogu.cz/eija" target="_blank" title="více informací o workshopu">https://www.moznostidialogu.cz/eija</a></p>
                </div>
            </div>
        </div>
    </>
}

export default NewsDetail
