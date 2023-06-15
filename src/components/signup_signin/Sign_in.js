import React, { useState,useContext } from 'react'
import './sigup.css'
import { NavLink } from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { LoginContext } from '../context/ContextProvider';

const Sign_in = () => {
    const [logdata, setLogData] = useState({
        email: "",
        password: ""
    });
    console.log(logdata);
    const {account, setAccount} =useContext(LoginContext);
const adddata = (e)=>{
    const {name, value} = e.target;
    setLogData({...logdata,[name]:value})
        
    

};
const senddata = async(e)=>{
    e.preventDefault();
    const {email,password} = logdata;
    const res = await fetch("/login",{
        method: "POST",
        headers: {
            "Content-Type":"application/json"
        },
        body: JSON.stringify({
            email,password
        })
    });
    const data = await res.json();
    console.log(data);
    if(res.status==400 ||  !data){
        console.log("invalid details");
        toast.warn("invailid details",{
            position: "top-center",
        });
    }else{
        console.log("data valid");
        setAccount(data);
        toast.success("user valid",{
            position: "top-center",
        });
        setLogData({...logdata,email:"",password:""});
    }
}


    //console.log(logdata);
  return (
    <>
    <section>
        <div className='sign_container'>
            <div className='sign_header'>
                <img src='./blacklogoamazon.png' alt='amazonlogo'/>
            </div>
            <div className='sign_form'>
                <form >
                    <h1>Sign-In</h1>
                    <div className='form_data'>
                        <label htmlFor='email'>Email</label>
                        <input type='text' name='email'id='email' onChange={adddata} value={logdata.email}/>
                    </div>
                    <div className='form_data'>
                        <label htmlFor='password'>Password</label>
                        <input type='password' name='password'id='password'placeholder='At least 6 char' onChange={adddata} value={logdata.password}/>
                    </div>
                    <button className='signin_btn'onClick={senddata}>Continue</button>
                </form>
            </div>
            <div className='create_accountinfo'>
                <p>New To Amazon</p>
               <NavLink to="/register"> <button>Create Your amazon account</button></NavLink>
            </div>
        </div>
        <ToastContainer/>
    </section>
    </>
  )
}

export default Sign_in