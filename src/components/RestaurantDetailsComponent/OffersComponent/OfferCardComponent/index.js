import { OFFERS_LOGO_IMG_CDN_BASE_URL, OFFER_LOGO_DEFAULT_PATH } from "../../../../utils/constants";
import "./index.css";

const OfferCardComponent = (props) => {
  const { offerInfo } = props;
  return (
    <div className="restaurant-offer-card">
      {offerInfo?.offerTag ? (
        <p className="offer-tag" style={{ color: offerInfo?.offerTagColor }}>
          {offerInfo?.offerTag}
        </p>
      ) : null}
      <div className="restaurant-offer-container">
        <div className="restaurant-offer-header">
          <img
            src={
              OFFERS_LOGO_IMG_CDN_BASE_URL + (offerInfo?.logoBottom ? offerInfo?.offerLogo : OFFER_LOGO_DEFAULT_PATH)
            }
          />
          <p>{offerInfo?.header}</p>
        </div>
        <div className="restaurant-offer-info">
          <p>
            {offerInfo?.couponCode} | {offerInfo?.description}
          </p>
        </div>
      </div>
    </div>
  );
};

export default OfferCardComponent;
