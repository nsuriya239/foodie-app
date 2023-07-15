import DishListComponent from "../DishListComponent";
import "./index.css";
import { useState } from "react";

const NestedItemCategoryListComponent = (props) => {
  const { categoryData } = props;
  const [toggle, SetToggle] = useState(false);

  const onToggle = () => {
    SetToggle(!toggle);
  };
  return (
    <div className="nested-category-wrapper">
      <div className="menu-category-header nested" onClick={onToggle}>
        <span>
          {categoryData?.title} ({categoryData?.itemCards?.length})
        </span>
        <span>{toggle ? "^" : "V"}</span>
      </div>
      <div className="style-divider" />
      <div className="menu-category-list-container">
        {toggle ? <DishListComponent itemCards={categoryData?.itemCards} /> : null}
      </div>
    </div>
  );
};

const NestedItemCategoryComponent = (props) => {
  const { categoryData } = props;

  return (
    <div className="nested-item-category-container">
      <div className="menu-category-header">
        <h2>{categoryData?.title}</h2>
      </div>
      {categoryData?.categories?.map( (category,i) => <div key={"nested-category_"+i}className="nested-category-container"><NestedItemCategoryListComponent categoryData={category}/></div>)}
      <div className="category-border" />
    </div>
  );
};

export default NestedItemCategoryComponent;
