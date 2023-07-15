import OfferCardComponent from "./OfferCardComponent";
import "./index.css";

const OffersComponent = (props) => {
  const { restarauntOffers } = props;
  return (
    <div className="restaurant-offers-container">
      {restarauntOffers?.map((offer) => (
        <OfferCardComponent key={offer?.info?.offerIds[0]} offerInfo={offer?.info} />
      ))}
    </div>
  );
};

export default OffersComponent;
