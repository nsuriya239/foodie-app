import { ITEM_CATEGORY_TYPE, NESTED_ITEM_CATEGORY_TYPE, LICENCE_INFO, ADDRESS_INFO, CAROUSEL_MENU_TYPE } from "../../../../utils/constants";
import CarouselComponent from "./CarouselComponent";
import "./index.css";

import ItemCategoryComponent from "./ItemCategoryComponent";
import NestedItemCategoryComponent from "./NestedItemCategoryComponent";
import RestaurantAddressComponent from "./RestaurantAddressComponent";
import RestaurantLicenceComponent from "./RestaurantLicenceComponent";

// TODO: Need to Add Want to Repeat component
const getCategoryComponent = (category) => {
    switch (category["@type"]) {
      case CAROUSEL_MENU_TYPE: return <CarouselComponent categoryData={category} />;
      case ITEM_CATEGORY_TYPE: return <ItemCategoryComponent categoryData={category} />;
      case NESTED_ITEM_CATEGORY_TYPE: return <NestedItemCategoryComponent categoryData={category} />;
      case LICENCE_INFO: return <RestaurantLicenceComponent categoryData={category} />;
      case ADDRESS_INFO: return <RestaurantAddressComponent categoryData={category} />;
      default: return null;
    }

}

const MenuListComponent = (props) => {
  const { menuCategories } = props;

  return (
    <div className="menu-list-container">
      {menuCategories?.map((category, i) => <div key={"category_"+i} className="category-container">{getCategoryComponent(category?.card?.card)} </div>
      )}
    </div>
  );
};

export default MenuListComponent;
