export const fetchData = async (setRestaurantList, setFilteredRestaurantList) => {
  const resp = await fetch(
    "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.942395&lng=80.214322&sortBy=RATING&page_type=DESKTOP_WEB_LISTING"
  );

  const data = await resp.json();

  setRestaurantList(data?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
  setFilteredRestaurantList(data?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
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
