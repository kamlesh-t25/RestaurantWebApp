import React, { useContext, useEffect, useState } from 'react'
import './LoginPopup.css';
import { assets } from '../../assets/assets';
import { StoreContext } from '../../context/StoreContext';
import axios from 'axios';

const LoginPopup = ({setLoginPopup}) => {

  const {url,setToken}=useContext(StoreContext);
  const [login,setLogin]=useState("Login");

  const [data,setData]=useState({
    name:"",
    email:"",
    password:""
  });

  const onChangeHandler=(event)=>{
    const name=event.target.name;
    const value=event.target.value;

    setData(data=>({...data,[name]:value}));
  }


  useEffect(()=>{
    console.log(data);
  },[data])

  const onSubmitHandler=async(event)=>{
    event.preventDefault();
    let newUrl=url;
    if(login==="Login"){newUrl+="/api/user/login";}
    else newUrl+="/api/user/register";

    const response=await axios.post(newUrl,data);
    if(response.data.success){
      setToken(response.data.token);
      localStorage.setItem("token",response.data.token);
      setLoginPopup(false);
    }else{
      alert(response.data.message);
    }
  }


  return (
    <div className='login-popup'>
      <form className="login-container-form" onSubmit={onSubmitHandler}>
        <div className="name-heading">
          <h3 className='head-popup-text'>{login}</h3>
          <img onClick={()=>{setLoginPopup(false)}} className='logout-button' src={assets.cross_icon} alt="" />
        </div>
        <div className="input-fields">
          {login=="Login"?<></>:<input name='name' onChange={onChangeHandler} type="text" placeholder='Your name' required />}
          <input name='email' onChange={onChangeHandler} type="text" placeholder='Your email' required />
          <input name='password' onChange={onChangeHandler} type="text" placeholder='Your Password' required />
          <button type='submit' className='login-btn'>{login}</button>
        </div>
        <div className="bottom-loginpopup">
          <span><input type="checkbox" name="check-user-agreement" id="user-agreement" required />
          <p>By continuing,I agree to terms of use and Privacy</p></span>
          {login=="Login"?<p className='last-line-popup'>Create a new account ? <span className='button-text' onClick={()=>{setLogin("Create Account")}}>Click here</span></p>:
          <p className='last-line-popup'>Already have an account ? <span className='button-text' onClick={()=>setLogin("Login")}>Login here</span></p>}
          {/* // <p>Create a new account ? <span>Click here</span></p>
          // <p>Already have an account ? <span>Login here</span></p> */}
        </div>
        
      </form>
    </div>
  )
}


export default LoginPopup
