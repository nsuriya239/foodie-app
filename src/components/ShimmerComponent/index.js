import "./index.css";
import ShimmerCardComponent from "./ShimmerCardComponent";

const ShimmerComponent = () => {
  return (
    <div className="shimmer-body-container">
      <div className="shimmer-card-container">
        {[...Array(15)].map((e, i) => (
          <ShimmerCardComponent key={i} />
        ))}
      </div>
    </div>
  );
};

export default ShimmerComponent;
