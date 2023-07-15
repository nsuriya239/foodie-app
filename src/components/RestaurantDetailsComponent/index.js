import { useEffect, useState } from "react";
import { fetchResInfo } from "../../service/getData";
import { useParams } from "react-router-dom";
import ShimmerComponent from "../ShimmerComponent";
import BreadCrumbComponent from "./BreadCrumbComponent";
import HeaderComponent from "./HeaderComponent";
import OffersComponent from "./OffersComponent";
import MenuComponent from "./MenuComponent";

const RestaurantDetailsComponent = () => {
  const [resInfo, setResInfo] = useState(null);
  const { resId } = useParams();

  console.log(resId);

  useEffect(() => {
    console.log("before menu fetch");
    fetchResInfo(resId, setResInfo);
    console.log("after menu fetch");
  }, []);

  console.log(resInfo);

  if (resInfo === null) return <ShimmerComponent />;

  const restarauntDetails = resInfo?.cards[0]?.card?.card?.info;
  const restarauntOffers = resInfo?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.offers;
  const menuDetails = resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards;
  return (
    <div className="restaurant-details">
      <BreadCrumbComponent city={restarauntDetails.city} Name={restarauntDetails.name} />
      <HeaderComponent restarauntDetails={restarauntDetails} />
      <OffersComponent restarauntOffers={restarauntOffers} />
      <MenuComponent menuDetails={menuDetails} />
    </div>
  );
};

export default RestaurantDetailsComponent;
