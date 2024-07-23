import React, { useState } from 'react'
import './Add.css'
import axios from "axios";


const Add = ({URL}) => {

  const [image,setImage]=useState(false);
  const [data,setData]=useState({
    name:"",
    description:"",
    price:"",
    category:"Salad"
  })


  const onChangeHandler=(e)=>{
    const name=e.target.name;
    const value=e.target.value;
    setData(data=>({...data,[name]:value}));
  }

  const onSUbmitHandler=async (e)=>{
    e.preventDefault();
    const formData=new FormData();
    formData.append("name",data.name);
    formData.append("description",data.description);
    formData.append("price",Number(data.price));
    formData.append("image",image);
    formData.append("category",data.category);

    //sending data to backend
    const response=await axios.post(`${URL}/api/food/add`,formData);
    if(response.data.success){
      setData({name:"",
      description:"",
      price:"",
      category:"Salad"});
      setImage(false);

      toast.success(response.data.message);
    }else{
      toast.error(response.data.message);
    }
  }




  return (
    <div className='add-container'>
      <form className='add-form' onSubmit={onSUbmitHandler}>
        <div className="input-image">
          <p>Upload Image</p>
          <label htmlFor="image">

            <img src={assets.upload_area} alt="" />
            {/* <img src={image ? URL.createObjectURL(image) : assets.upload_area} alt="" /> */}
          </label>
          <input onChange={(e)=>setImage(e.target.files[0])} type="file" name="image" id="image"  hidden required/>
        </div>

        <div className="product-name">
          <p>Product name</p>
          <input type="text" onChange={onChangeHandler} value={data.name} placeholder='Type here' name='name'/>
        </div>
        <div className="product-description">
            <p>Product description</p>
            <textarea type="text" rows='4' placeholder='Write description here' onChange={onChangeHandler} value={data.description}  name="description" id="p-description" />
        </div>
        <div className="price-category">
          <div className="prdocut-category">
          <p>Select Category</p>
          <select name="category" onChange={onChangeHandler} id="category">
            <option value="Salad">Salad</option>
            <option value="Rolls">Rolls</option>
            <option value="Deserts">Deserts</option>
            <option value="Sandwich">Sandwich</option>
            <option value="Cake">Cake</option>
            <option value="Pure Veg">Pure Veg</option>
            <option value="Pasta">Pasta</option>
            <option value="Noodles"></option>
          </select>
        </div>

        <div className="add-price">
          <p>Product Price</p>
          <input type="number" onChange={onChangeHandler} value={data.price} name="price" placeholder='$10' />
        </div>
        </div>
        
        <button type='submit' className='add-btn'>ADD</button>
      </form>
    </div>
  )
}
import './Add.css'
import { assets } from '../../assets/assets';
import { toast } from 'react-toastify';

export default Add
