import React from 'react'
import './Orders.css';
import axios from 'axios';
import { useState } from 'react';
import { toast } from 'react-toastify';
import { assets } from '../../assets/assets';
import { useEffect } from 'react';


const Orders = ({URL}) => {
  const [orders,setOrders]=useState([]);

  const fetchOrders=async()=>{
    const response=await axios.get(URL+"/api/order/list");
    if(response.data.success){
      setOrders(response.data.data);
      console.log(response.data.data);
    }else{
      toast.error("Error");
    }
  }

  const statusHandler=async(event,orderId)=>{
    console.log(event,orderId);
    const response=await axios.post(URL+"/api/order/status",{
      orderId,
      status:event.target.value
    })

    if(response.data.success){
      await fetchOrders();
    }
  }

  useEffect(()=>{
    fetchOrders();
  },[])

  return (
    <div className='order add'>
      <h2>Order Page</h2>
      <div className="order-list">
        {orders.map((order,index)=>(
          <div key={index} className="order-item">
            <img src={assets.parcel_icon} alt="" />
            <div>
              <p className='order-item-food'>
                {order.items.map((item,index)=>{
                  if(index===order.items.length -1){
                    return item.name+" x "+item.quantity;
                  }else{
                    return item.name+" x "+item.quantity+" , ";
                  }
                })}
              </p>
              <p className="order-item-name">
                {order.address.firstName+" "+order.address.lastName}
              </p>
              <div className="order-item-address">
                <p>{order.address.street+" , "+order.address.city+" , "+order.address.state+" , "+order.address.country+" ,"+order.address.zipcode}</p>
              </div>
              <p className='order-item-phone'>{order.address.phone}</p>
            </div>
            <p>Items : {order.items.length}</p>
            <p>${order.amount}</p>
            <select onChange={(event)=>statusHandler(event,order._id)} value={order.status} >
              <option value="Food Processing">Food Processing</option>
              <option value="Out for Delievery">Out for Delievery</option>
              <option value="Delievered">Delievered</option>
            </select>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Orders
