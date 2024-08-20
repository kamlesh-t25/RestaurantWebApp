import React, { useContext, useState } from 'react'
import './placeOrder.css'
import { StoreContext } from '../../context/StoreContext'
import {useNavigate} from 'react-router-dom';
import axios from 'axios';
const placeOrder = () => {
  const navigate=useNavigate();
  const {getTotalCost,token,food_list,cartItems,url}=useContext(StoreContext);
  const [data,setData]=useState({
    firstName:"",
    lastName:"",
    email:"",
    street:"",
    city:"",
    state:"",
    zipcode:"",
    country:"",
    phone:""
  })

  const onChangeHandler=(e)=>{
    let name=e.target.name;
    let value=e.target.value;

    setData(data=>({...data,[name]:value}));

  }


  const PlaceOrder=async(event)=>{
    event.preventDefault();
    let orderItems=[];
    food_list.map((item)=>{
      if(cartItems[item._id]>0){
        let itemInfo=item;
        itemInfo["quantity"]=cartItems[item._id];
        orderItems.push(itemInfo);
      }
    })
    // console.log(orderItems);
    let orderData={
      address:data,
      items:orderItems,
      amount:getTotalCost() +2,
    }
    let response =await axios.post(url+"/api/order/place",orderData,{headers:{token}});
    if(response.data.success){
      const {session_url}=response.data;
      window.location.replace(session_url);
      // navigate("/");
    }else {
      alert("Error");
    }
  }


 

  return (
    <form onSubmit={PlaceOrder} className='placeOrderContainer'>
      <div className="address-details">
        <h2>Delievery Information</h2>
        <div className="name">
          <input type="text" onChange={onChangeHandler} value={data.firstName} placeholder='First name' name="firstName" id="fName" required />
          <input type="text" onChange={onChangeHandler} placeholder='Last name' name="lastName" value={data.lastName} id="lName"  required/>
        </div>
        <input type="email" onChange={onChangeHandler} name="email" value={data.email} id="email" placeholder='Email address'  required/>
        <input type="text" placeholder='Street' onChange={onChangeHandler} name="street" value={data.street} id="street"  required/>
        <div className="address1">
          <input type="text" placeholder='City' onChange={onChangeHandler} name="city" value={data.city} id="city" required />
          <input type="text" placeholder='State' onChange={onChangeHandler} name="state" value={data.state} id="state" required />
        </div>

        <div className="address2">
          <input type="text" placeholder='Pin code' onChange={onChangeHandler} name="zipcode" value={data.zipcode} id="pin-code"  required/>
          <input type="text" placeholder='Country' onChange={onChangeHandler} name="country" value={data.country} id="country"  required/>
        </div>
        <input type="number" onChange={onChangeHandler} name="phone" value={data.phone} id="phone-no" placeholder='Phone' required />
      </div>
      <div className="right-cost">
          <h2>Cart Totals</h2>
          <div className="sub-total">
            <p>Subtotal</p>
            <p>${getTotalCost()}</p>
          </div>
          <hr />
          <div className="delievery-fee">
            <p>Delievery Fee</p>
            <p>$2</p>
          </div>
          <hr />
          <div className="total-cost">
            <p>Total</p>
            <p>${getTotalCost()+2}</p>
          </div>
          <button type='submit'>PROCEED TO PAYMENT</button>
        </div>
    </form>
  )
}

export default placeOrder
