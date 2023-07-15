import PureVegBadgeComponent from "./PureVegComponent";
import ToggleButtonComponent from "../../../common/ToggleButtonComponent";
import "./index.css";

const MenuVegFilterAndBadgeComponent = (props) => {
  const { isVegOnly } = props;
  const toggleProps = {
    styleProp: "veg",
    label: "Veg Only",
  };
  return (
    <div className="restaurant-veg-filter-badge">
      {isVegOnly ? <PureVegBadgeComponent /> : <ToggleButtonComponent {...toggleProps} />}
      <div className="style-divider"></div>
    </div>
  );
};

export default MenuVegFilterAndBadgeComponent;
