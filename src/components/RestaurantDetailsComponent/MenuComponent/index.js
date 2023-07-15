import MenuListComponent from "./MenuListComponent";
import MenuVegFilterAndBadgeComponent from "./MenuVegFilterAndBadgeComponent";

const MenuComponent = (props) => {
  const { menuDetails } = props;

  const isPureVegMenu = menuDetails[0]?.card?.card?.isPureVeg;

  const menuCategoryCard = menuDetails[1]?.card?.card;

  return (
    <div className="restaurant-menu-container">
      <MenuVegFilterAndBadgeComponent isVegOnly={isPureVegMenu} />
      <MenuListComponent menuCategories={menuDetails.slice(1)} />
    </div>
  );
};

export default MenuComponent;
