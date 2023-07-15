import { VEG_ICON_IMG_URL } from "../../../../utils/constants";

const PureVegBadgeComponent = () => {
  return (
    <div className="veg-only-badge">
      <img src={VEG_ICON_IMG_URL} />
      <p>PURE VEG</p>
    </div>
  );
};

export default PureVegBadgeComponent;
