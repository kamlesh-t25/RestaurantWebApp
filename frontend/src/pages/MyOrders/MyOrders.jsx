import React, { useContext, useEffect, useState } from 'react'
import './MyOrders.css';
import { StoreContext } from '../../context/StoreContext';
import axios from 'axios';
import { assets } from '../../assets/assets';

const MyOrders = () => {
    const {url,token}=useContext(StoreContext);
    const [data,setData]=useState([]);

    const fetchOrders=async()=>{
        const response =await axios.post(url+"/api/order/userorders",{},{headers:{token}});
        setData(response.data.data);
        console.log(response.data.data);
    }

//both useEffects are for getting data from backend ...above is for when user comes on page ..below is when user refreshes page..sometimes token is not immediately availbable so below useEffects triggers when change in token
    useEffect(()=>{
        if(token){
            fetchOrders();
        }
    },[])

    useEffect(() => {
      if (token) {
        fetchOrders();
      }
    }, [token]); // Watch for changes in the token

    if(data.length ==0){
      return <h2>Loading ....</h2>;
    }

  return (
    <div className='myOrders-container'>
      <h2>My orders</h2>
      <div className="myorder">
        {
          data.map((order,index)=>{
            return (
              <div key={index} className="my-order">
                <img src={assets.parcel_icon} alt="" />
                <p>{order.items.map((item,index)=>{
                  if(index===order.items.length-1){
                    return item.name+"x"+item.quantity;
                  }else {
                    return item.name+"x"+item.quantity+" , ";
                  }
                })}</p>
                <p>${order.amount}.00</p>
                <p>Items: {order.items.length}</p>
                <p><span>&#x25cf;</span> <b>{order.status}</b></p>
                <button onClick={()=>fetchOrders()}>Track order</button>
              </div>
            )
          })
        }
      </div>
      
    </div>
  )
}

export default MyOrders
