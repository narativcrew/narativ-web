import React from 'react';
import { useRouter } from 'next/router';
import styles from 'components/news/news.module.css';
import cx from 'classnames';
import { createClient } from "../../prismicio";
import { PrismicRichText } from '@prismicio/react';


const NewsDetail = ({news}) => {
    const router = useRouter();
    const { newsId } = router.query;

    return (
        <>
            <div>
                <div className={cx(styles.newsDetailHeadingBox, 'text-center')}>
                    <h1>{news.data.title}</h1>
                    <span>
                        <i className="bi bi-calendar" />
                        {news.last_publication_date}
                    </span>
                </div>
            </div>
            <div className="container mt-5">
                <div className="row">
                    <div className="col-md-12">
                        <PrismicRichText field={news.data.description}/>
                    </div>
                </div>
            </div>
        </>
    );
};

export default NewsDetail;

export async function getStaticProps({ params, previewData }) {
    const client = createClient({previewData});
    console.log("newsId: " + params.newsId)
    const news = await client.getByUID('news', params.newsId);
    
    return {
        props: {
            news,
        },
    };
}

export async function getStaticPaths() {
    const client = createClient();

    const news = await client.getAllByType('news');    

    const paths = news.map((n) => ({
        params: { newsId: n.uid },
      }))

    console.log(paths);

    return {
        paths,
        fallback: false,
    };
}