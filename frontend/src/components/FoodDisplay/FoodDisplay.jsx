import React, { useContext } from 'react'
import './FoodDiaply.css';
import { StoreContext } from '../../context/StoreContext';
import FoodItem from '../FoodItem/FoodItem';

const FoodDisplay = ({category}) => {
    const {food_list}=useContext(StoreContext);

    if (!food_list || food_list.length === 0) {
      return <p>Loading...</p>;
    }
    
  return (
    <div className='food-display'>
        <h2>Top dishes near you</h2>
        <div className="food-display-list">
            {food_list.map((item,index)=>{
              if(category=="All" || category===item.category){
                return ( <FoodItem key={index} id={item._id} name={item.name} image={item.image} description={item.description} price={item.price}/>)
              }
            })}
        </div>
    </div>
  )
}

export default FoodDisplay
