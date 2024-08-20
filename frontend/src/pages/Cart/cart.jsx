import React, { useContext, useEffect, useState } from 'react'
import './cart.css';
import { StoreContext } from '../../context/StoreContext';
import { assets } from '../../assets/assets';
const cart = () => {
  const {food_list,cartItems,setCartItems,addToCart,removeFromCart,getTotalCost,url}=useContext(StoreContext);

  return (
    <div className='cart-container'>
      <div className="cart-headings">
        <p>Items</p>
        <p>Title</p>
        <p>Price</p>
        <p>Quantity</p>
        <p>Total</p>
        <p>Remove</p>
      </div>
      <br />
      <hr />
      <div className="cart-details">
          {food_list.map((element,index)=>{
            if(cartItems[element._id]>0){
              return (
              <div key={index}>
                <div className="ordered-data">
                  <img className='id-img-food' src={url+"/images/"+element.image} alt="" />
                  <p>{element?.name}</p>

                  <p>${element?.price}</p>
                  <p>{cartItems[element?._id]}</p>
                  <p>${element?.price*cartItems[element?._id]}</p>
                  <p onClick={()=>removeFromCart(element?._id)} className='cross'>x</p>
                </div>
                <hr />
              </div>
                
              )
            }
          })}
      </div>

      <div className="bottom">
        <div className="bottom-left">
          <h2>Cart Totals</h2>
          <div className="sub-total">
            <p>Subtotal</p>
            <p>${getTotalCost()}</p>
          </div>
          <hr />
          <div className="delievery-fee">
            <p>Delievery Fee</p>
            <p>${getTotalCost()==0?0:2}</p>
          </div>
          <hr />
          <div className="total-cost">
            <p>Total</p>
            <p>${getTotalCost()==0?0:getTotalCost()+2}</p>
          </div>
          <button><a href="/order">PROCEED TO CHECKOUT</a></button>
        </div>
        <div className="bottom-coupon">
          <p>If you have a promo code, Enter it here</p>
          <div className="promo-code-div">
            <input type="text" placeholder='PROMO CODE' name="promo-code" id="promo-code" />
            <button type="submit">SUbmit</button>
          </div>
        </div>
      </div>
      
    </div>
  )
}

export default cart
