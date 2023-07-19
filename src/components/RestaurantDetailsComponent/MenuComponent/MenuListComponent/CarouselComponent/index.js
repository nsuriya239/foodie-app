import { CAROUSEL_IMG_CDN_BASE_URL } from "../../../../../utils/constants";
import "./index.css";

const CarouselCardComponent = (props) => {
  const { card } = props;
  const { creativeId, dish } = card;
  return (
    <div className="carousel-card">
      <img src={CAROUSEL_IMG_CDN_BASE_URL + creativeId} />
      <div className="price-and-add-btn">
        <div className="price">₹ {(dish?.info?.price ? dish?.info?.price : dish?.info?.defaultPrice) / 100}</div>
        <div className="add-outOfStock-btn">
          {dish?.info?.inStock === 1 ? (
            <div className="add">
              <div>Add</div>
              {dish?.info?.addons ? <div className="customisable-plus-sign">+</div> : null}
            </div>
          ) : (
            <div className="outOfStock">
              {dish?.info?.nextAvailableAtMessage ? dish?.info?.nextAvailableAtMessage : "Out of stock"}
            </div>
          )}
          {dish?.info?.addons ? <div className="customisable">Customisable</div> : null}
        </div>
      </div>
    </div>
  );
};
// TODO: Need to add Price and Add button to the carousel card

const CarouselComponent = (props) => {
  const { categoryData } = props;

  console.log(categoryData);
  return (
    <div className="carousel-category-container">
      <div className="carousel-category-header">
        <h2>{categoryData?.title}</h2>
      </div>
      <div className="carousel-wrapper">
        {categoryData?.carousel?.map((carouselCard) => (
          <CarouselCardComponent key={carouselCard?.bannerId} card={carouselCard} />
        ))}
      </div>
      <div className="carousel-indicators">
        {categoryData?.carousel?.map((carouselCard) => (
          <div key={carouselCard?.bannerId} id={carouselCard?.bannerId} className="indicator"></div>
        ))}
      </div>
      <div className="category-border" />
    </div>
  );
};

export default CarouselComponent;
