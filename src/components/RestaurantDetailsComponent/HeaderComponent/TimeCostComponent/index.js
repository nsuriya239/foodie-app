import "./index.css";
const TimeCostInfoComponent = (props) => {
  const { deliveryTime, costForTwoMessage } = props;
  return (
    <div className="restaurant-time-cost">
      <h2>{deliveryTime}</h2>
      <h2>{costForTwoMessage}</h2>
    </div>
  );
};

export default TimeCostInfoComponent;
