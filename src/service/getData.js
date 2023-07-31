export const fetchData = async (setRestaurantList, setFilteredRestaurantList) => {
  const resp = await fetch(
    "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.942395&lng=80.214322&sortBy=RATING&page_type=DESKTOP_WEB_LISTING"
  );

  const data = await resp.json();

  const restarauntDetails = getRestaurantDetailsCards(data?.data?.cards);
  setRestaurantList(restarauntDetails);
  setFilteredRestaurantList(restarauntDetails);
};

export const fetchResInfo = async (resId, setResInfo) => {
  const resp = await fetch(
    "https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=12.942395&lng=80.214322&restaurantId=" +
      resId
  );

  console.log("fetching menu");
  const data = await resp.json();

  setResInfo(data?.data);
};

const getRestaurantDetailsCards = (response) => {
  const restaurantListCard = response?.filter(
    (card) =>
      card?.card?.card["@type"] === "type.googleapis.com/swiggy.gandalf.widgets.v2.GridWidget" &&
      card?.card?.card?.id === "restaurant_grid_listing"
  );
  return restaurantListCard[0]?.card?.card?.gridElements?.infoWithStyle?.restaurants;
};
