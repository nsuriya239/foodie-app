import { useState } from "react";
import DishListComponent from "../DishListComponent";
import "./index.css";

const ItemCategoryComponent = (props) => {
    const { categoryData } = props;
    const [toggle, SetToggle] = useState(true);
  
    const onToggle = () => {
      SetToggle(!toggle);
    };
    return (
      <div className="menu-category-container">
        <div className="menu-category-header" onClick={onToggle}>
          <h2>
            {categoryData?.title} ({categoryData?.itemCards?.length})
          </h2>
          <h2>{toggle ? "^" : "V"}</h2>
        </div>
        <div className="menu-category-list-container">
          {toggle ? <DishListComponent itemCards={categoryData?.itemCards} /> : null}
        </div>
        <div className="category-border" />
      </div>
    );
  };

export default ItemCategoryComponent;