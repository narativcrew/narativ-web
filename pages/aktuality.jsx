import FeaturedImage from '/components/FeaturedImage'
import bg from '/public/images/news-featured-image.png'

import { NewsListItem } from '/components/news'

const News = () => (
    <>
        <FeaturedImage image={bg} />
        <div className="container">
            <h1>News</h1>
            <NewsListItem />
            <NewsListItem />
            <NewsListItem />
            <NewsListItem />
            <NewsListItem />
        </div>
    </>
)

export default News
