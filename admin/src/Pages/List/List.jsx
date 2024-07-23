import React, { useEffect, useState } from 'react'
import './List.css';
import axios from 'axios';

const List = ({URL}) => {
  const [items,setItems]=useState([]);

  const getItems=async()=>{
    const response =await axios.get(`${URL}/api/food/list`);
    console.log(response.data.data);
    setItems(response.data.data);
  }

  const removeItem=async(foodId)=>{
      const respo=await axios.post(`${URL}/api/food/remove`,{id:foodId});
      if(respo.data.success){
        toast.success("Food item removed");
      }else {
        toast.error("Error")
      }
      await getItems();
  }

  useEffect(()=>{
    getItems();
  },[])

  return (
    <div className='list-container'>
      <p className='heading-list'>All food list</p>
      <div className="table-list">
        <div className="table-content">
          <b>Image</b>
          <b>Name</b>
          <b>Category</b>
          <b>Price</b>
          <b>Action</b>
          {/* <hr /> */}
        </div>
            {
              items.map((e,index)=>{
                return (
                  <div key={index} className="table-content">
                    <img src={`${URL}/images/`+e.image} alt="" />
                    <p>{e.name}</p>
                    <p>{e.category}</p>
                    <p>${e.price}</p>
                    <p onClick={()=>removeItem(e._id)} className='cross-btn'>X</p>
                    {/* <hr /> */}
                  </div>
                )
              })
            }
      </div>
    </div>
  )
}
import './List.css';
import { assets } from '../../assets/assets';
import { toast } from 'react-toastify';

export default List
