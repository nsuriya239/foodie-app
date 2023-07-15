import { OFFERS_LOGO_IMG_CDN_BASE_URL } from "../../../../utils/constants";

const SurgeInfoComponent = (props) => {
  const { icon, message } = props;
  return (
    <div className="restaurant-surge-info">
      <img src={OFFERS_LOGO_IMG_CDN_BASE_URL + icon} /> <p>{message}</p>
    </div>
  );
};

export default SurgeInfoComponent;
