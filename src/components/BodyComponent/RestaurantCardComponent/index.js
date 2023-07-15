import { RESTAURANT_IMG_CDN_BASE_URL } from "../../../utils/constants";

const RestarauntCardComponent = (props) => {
  const { resData } = props;
  // console.log(resData);
  return (
    <div className="restaurant-card">
      <div className="restaurant-img-container">
        <img
          className="restaurant-img"
          alt="restaurant-logo"
          src={RESTAURANT_IMG_CDN_BASE_URL + resData?.cloudinaryImageId}
        />
      </div>
      <div className="restaurant-name">
        <div>{resData?.name}</div>
      </div>
      <div className="restaurant-cuisines" title={resData?.cuisines.join(",")}>
        {resData?.cuisines.join(",")}
      </div>
      <div className="restaurant-footer-details">
        <div className="restaurant-rating">
          <p>⭐️ {resData?.avgRating}</p>
        </div>
        <div className="restaurant-deliveryTime">
          <p>{resData?.deliveryTime} MINS</p>
        </div>
        <div className="restaurant-costForTwo">
          <p>₹{resData?.costForTwo / 100} FOR TWO</p>
        </div>
      </div>
    </div>
  );
};

export default RestarauntCardComponent;
