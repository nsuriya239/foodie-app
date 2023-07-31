import { useEffect, useState } from "react";
import RestarauntCardComponent from "./RestaurantCardComponent";
// import * as data from "../../utils/restaurantMockData.json";
import { fetchData } from "../../service/getData";
import ShimmerComponent from "../ShimmerComponent";
import { Link } from "react-router-dom";

const generateRestaurantCards = (resList) => {
  return resList?.map((restaurant) => (
    <Link to={"/restaurant/" + restaurant?.info?.id} key={restaurant?.info?.id}>
      <RestarauntCardComponent resData={restaurant?.info} />
    </Link>
  ));
};

const BodyComponent = () => {
  const [restarauntList, setRestaurantList] = useState([]);
  const [filteredRestaurantList, setFilteredRestaurantList] = useState([]);
  const [searchText, setSearchText] = useState("");

  useEffect(() => {
    fetchData(setRestaurantList, setFilteredRestaurantList);
    console.log("After Fetch");
  }, []);

  const filterRestaurantsOnRating = () => {
    const filteredList = restarauntList.filter((res) => parseFloat(res.info.avgRating) > 4.2);
    setFilteredRestaurantList(filteredList);
  };

  if (restarauntList?.length === 0) {
    return <ShimmerComponent />;
  }

  return (
    <div className="body-container">
      <div className="body-nav-items">
        <div className="search-container">
          <input
            className="search-box"
            type="text"
            value={searchText}
            onChange={(e) => {
              setSearchText(e.target.value);
            }}
          />
          <button
            className="search-btn"
            onClick={() => {
              const filteredList = restarauntList.filter((res) =>
                res.info?.name.toLowerCase().includes(searchText.toLowerCase())
              );
              setFilteredRestaurantList(filteredList);
            }}
          >
            {" "}
            Search{" "}
          </button>
        </div>
        <div className="filter-container">
          {" "}
          {/** This space is for search bar */}
          <div className="filter-btn">
            <p onClick={filterRestaurantsOnRating}> Top Rated Restaurants</p>
          </div>
        </div>
      </div>
      <div className="restaraunt-card-container">{generateRestaurantCards(filteredRestaurantList)}</div>
    </div>
  );
};

export default BodyComponent;
