import "./index.css";

const RestaurantInfoComponent = (props) => {
  const { name, cuisines, areaName, distance, surgeDetails } = props;
  return (
    <div className="restaurant-info">
      <h2> {name} </h2>
      <p>{cuisines.join(",")}</p>
      <p>
        {areaName}, {distance}
      </p>
    </div>
  );
};

export default RestaurantInfoComponent;
