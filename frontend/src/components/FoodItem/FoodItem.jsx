import React, { useContext, useState } from 'react'
import './FoodItem.css';
import { assets } from '../../assets/assets';
import { StoreContext } from '../../context/StoreContext';

const FoodItem = ({id,name,image,price,description}) => {
    const [count,setCount]=useState(0);
    // const [itemCount,setItemCount]=useState(0);

    const {cartItems,addToCart,removeFromCart,url}=useContext(StoreContext);
    // Ensure cartItems and the specific itemId are defined
    const itemCount = cartItems && cartItems[id] ? cartItems[id] : 0;

  return (
    <div className='food-item'>
      <div className="food-item-img">
        <img className='food-item-image' src={url+"/images/"+image} alt="" />
        {!itemCount?<img className='add-icon' onClick={()=>addToCart(id)} src={assets.add_icon_white} alt="" srcset="" />
        :<div className='food-count-icon'>
            <img className='add-icon-red' onClick={()=>removeFromCart(id)} src={assets.remove_icon_red} alt="" />
            <p>{cartItems[id]}</p>
            <img className='add-icon-green' onClick={()=>addToCart(id)} src={assets.add_icon_green} alt="" />
          </div> }
      </div>
      <div className="food-item-info">
        <h2>{name}</h2>
        <img src={assets.rating_starts} className='rating-image' alt="" />
        <p className="food-item-description">{description}</p>
        <p className="food-item-price">${price}</p>
      </div>
    </div>
  )
}

export default FoodItem
