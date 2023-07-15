import { RESTAURANT_IMG_CDN_BASE_URL } from "../../../../../../utils/constants";
import BestSellerBadgeComponent from "../../../../../common/BestSellerBadgeComponent";
import NonVegBadgeComponent from "../../../../../common/NonVegBadgeComponent";
import VegBadgeComponent from "../../../../../common/VegBadgeComponent";
import OfferTagComponent from "./OfferTagComponent";
import "./index.css";

const DishInfoComponent = (props) => {
  const { dishInfo } = props;

  return (
    <div className="dish-info-container">
      <div className="dish-info-wrapper">
        <div className="dish-details">
          <div className="badges">
            {dishInfo?.isVeg === 1 ? <VegBadgeComponent /> : <NonVegBadgeComponent />}
            {dishInfo?.isBestseller ? <BestSellerBadgeComponent /> : null}
          </div>
          <p className="title">{dishInfo?.name}</p>
          <div className="cost-offer-container">
            <p className="cost">₹ {(dishInfo?.price ? dishInfo.price : dishInfo?.defaultPrice) / 100}</p>
            {dishInfo?.offerTags ? <OfferTagComponent offerTagProps={dishInfo?.offerTags[0]} /> : null}
          </div>
          <p className="description">{dishInfo?.description}</p>
        </div>
        <div className="image-add-btn-container">
          <div className="image-container">
            {dishInfo?.imageId ? <img src={RESTAURANT_IMG_CDN_BASE_URL + dishInfo?.imageId} /> : null}
          </div>
          <div className="add-outOfStock-btn">
            {dishInfo?.inStock === 1 ? (
              <div className="add">
                <div>Add</div>
                {dishInfo?.addons ? <div className="customisable-plus-sign">+</div> : null}
              </div>
            ) : (
              <div className="outOfStock">
                {dishInfo?.nextAvailableAtMessage ? dishInfo?.nextAvailableAtMessage : "Out of stock"}
              </div>
            )}
            {dishInfo?.addons ? <div className="customisable">Customisable</div> : null}
          </div>
        </div>
      </div>
      <div className="style-divider" />
    </div>
  );
};

export default DishInfoComponent;
