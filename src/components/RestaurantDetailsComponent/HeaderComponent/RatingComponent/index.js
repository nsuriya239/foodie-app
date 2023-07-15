import "./index.css";

const RatingComponent = (props) => {
  const { avgRating, totalRating } = props;
  return (
    <div className="restaurant-rating-info">
      <h2>⭐️ {avgRating}</h2>
      <p>{totalRating}</p>
    </div>
  );
};

export default RatingComponent;
