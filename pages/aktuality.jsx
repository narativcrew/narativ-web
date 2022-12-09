import FeaturedImage from '/components/FeaturedImage'
import bg from '/public/images/news-featured-image.png'

import { NewsListItem } from '/components/news'
import { PrimaryButton } from '/components/Buttons'


const News = () => (
    <>
        <FeaturedImage image={bg}>

        </FeaturedImage>
        <div className="container">
            <h1>News</h1>
            <NewsListItem />
            <NewsListItem />
            <NewsListItem />
            <NewsListItem />
            <NewsListItem />
            <div className='row'>
                <div className='col-md-12 text-center'>
                    <PrimaryButton>Zobrazit další aktuality</PrimaryButton>
                </div>
            </div>
        </div>
    </>
)

export default News
