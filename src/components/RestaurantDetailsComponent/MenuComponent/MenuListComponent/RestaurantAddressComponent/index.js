import './index.css';

const RestaurantAddressComponent = (props) => {
    const {categoryData} = props;
    return (
        <div className='restaurant-address-info'>
            <p className='restaurant-name'>{categoryData?.name}</p>
            <p className='restaurant-area'>{"(Outlet:"+categoryData?.area+")"}</p>
            <p className='restaurant-complete-address'>{categoryData?.completeAddress}</p>
        </div>
    );

}

export default RestaurantAddressComponent;