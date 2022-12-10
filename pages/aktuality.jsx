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
            <NewsListItem id="1"
                        title="Nieco"
                        description={(
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nunc vel tincidunt lacinia, nunc nisl aliquet nisl, vel aliquet nisl nisl sit amet lorem. Sed euismod, nunc vel tincidunt lacinia, nunc nisl aliquet nisl, vel aliquet nisl nisl sit amet lorem.</p>
                        )} 
                    />
            <NewsListItem id="1"
                        title="Nieco"
                        description={(
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nunc vel tincidunt lacinia, nunc nisl aliquet nisl, vel aliquet nisl nisl sit amet lorem. Sed euismod, nunc vel tincidunt lacinia, nunc nisl aliquet nisl, vel aliquet nisl nisl sit amet lorem.</p>
                        )} 
                    />
            <NewsListItem id="1"
                        title="Nieco"
                        description={(
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nunc vel tincidunt lacinia, nunc nisl aliquet nisl, vel aliquet nisl nisl sit amet lorem. Sed euismod, nunc vel tincidunt lacinia, nunc nisl aliquet nisl, vel aliquet nisl nisl sit amet lorem.</p>
                        )} 
                    />
            <div className='row'>
                <div className='col-md-12 text-center'>
                    <PrimaryButton>Zobrazit další aktuality</PrimaryButton>
                </div>
            </div>
        </div>
    </>
)

export default News
