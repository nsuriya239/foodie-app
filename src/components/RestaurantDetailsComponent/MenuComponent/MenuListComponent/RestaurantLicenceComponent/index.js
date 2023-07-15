import "./index.css";

const RestaurantLicenceComponent = (props) => {
    const {categoryData} = props;
    return (
        <div className="restaurant-licence-info">
            <img src="https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_120,h_60/fssai_final_edss9i" />
            <p>{categoryData?.text[0]}</p>
        </div>
    )
}

export default RestaurantLicenceComponent;