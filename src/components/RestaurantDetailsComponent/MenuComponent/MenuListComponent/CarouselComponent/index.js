import { CAROUSEL_IMG_CDN_BASE_URL } from '../../../../../utils/constants';
import './index.css';

const CarouselCardComponent = (props) => {
    const {card} = props;
    return (
        <div className='carousel-card'>
            <img src={CAROUSEL_IMG_CDN_BASE_URL+card?.creativeId} />
        </div>
    )
}
// TODO: Need to add Price and Add button to the carousel card

const CarouselComponent = (props) => {
    const {categoryData} = props;
    console.log(categoryData);
    return (
        <div className='carousel-category-container'>
        <div className='carousel-category-header'>
            <h2>{categoryData?.title}</h2>
        </div>
        <div className='carousel-wrapper'>
            {categoryData?.carousel?.map(carouselCard => <CarouselCardComponent key={carouselCard?.bannerId} card={carouselCard}/>)}
        </div>
        <div className="category-border" />
        </div>
    )

}

export default CarouselComponent;