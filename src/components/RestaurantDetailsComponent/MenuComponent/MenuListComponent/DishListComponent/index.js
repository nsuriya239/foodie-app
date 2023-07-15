import DishInfoComponent from "./DishInfoComponent";
import "./index.css";

const DishListComponent = (props) => {
  const { itemCards } = props;
  return (
    <div className="menu-category-list">
      <ul>
        {itemCards?.map((item) => (
          <li key={item?.card?.info?.id}>
            {" "}
            <DishInfoComponent dishInfo={item?.card?.info} />{" "}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default DishListComponent;
