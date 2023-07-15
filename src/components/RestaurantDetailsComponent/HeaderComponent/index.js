import "./index.css";
import RatingComponent from "./RatingComponent";
import RestaurantInfoComponent from "./RestaurantInfoComponent";
import TimeCostInfoComponent from "./TimeCostComponent";
import SurgeInfoComponent from "./SurgeInfoComponent";

const HeaderComponent = (props) => {
  const { restarauntDetails } = props;
  const ratingProps = {
    avgRating: restarauntDetails?.avgRating,
    totalRating: restarauntDetails?.totalRatingsString,
  };
  const infoProps = {
    name: restarauntDetails?.name,
    cuisines: restarauntDetails?.cuisines,
    areaName: restarauntDetails?.areaName,
    distance: restarauntDetails?.sla?.lastMileTravelString,
  };
  const surgeInfoProps = { icon: restarauntDetails?.feeDetails?.icon, message: restarauntDetails?.feeDetails?.message };
  const timeCostProps = {
    deliveryTime: restarauntDetails?.sla?.slaString,
    costForTwoMessage: restarauntDetails?.costForTwoMessage,
  };
  return (
    <div className="restaurant-header-container">
      <div className="restaurant-header-wrapper">
        <RestaurantInfoComponent {...infoProps} />
        <RatingComponent {...ratingProps} />
      </div>
      {restarauntDetails?.feeDetails?.icon ? <SurgeInfoComponent {...surgeInfoProps} /> : null}
      <hr />
      <TimeCostInfoComponent {...timeCostProps} />
    </div>
  );
};

export default HeaderComponent;
