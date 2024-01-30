import React, { useEffect, useState } from 'react';
import toast, { Toaster } from 'react-hot-toast';
import { Link, useNavigate } from 'react-router-dom';
import { API } from '../config/index';
import usePost from '../hooks/usePost';

const VerifyEmail = () => {

  const mobile = process.env.PUBLIC_URL + '/images/mobilewithlogo.svg';
  const logo = process.env.PUBLIC_URL + '/images/logo.png';
  const useremail = localStorage.getItem('useremail');
  const userid = localStorage.getItem('userid');
  const [varifypin, setVarifypin] = useState('');

  const Navigate = useNavigate();
  const handleVarifypin = (e) => {
    setVarifypin(e.target.value.trim());
  };

  const isvarifypinValid = varifypin !== '';

  const {data,loading, error,success, postData } = usePost(API +'users/attempt-email-verification', 'PATCH');

  useEffect(() => {
    if (data) {
      toast.success(success);
      setTimeout(() => {

        Navigate('/login');
      },2000);
    }
  }, [data,Navigate]);

  const handleFormSubmit = (e) => {
    e.preventDefault();
    let data = {};
    data['id'] = userid;
    data['otp'] = Number(varifypin);
    postData(data);
  };

  return (
    <div className = 'lg:bg-grey-50'>
      <div>
        <Toaster
          position = "top-right"
          reverseOrder = { false }
        />
        <form onSubmit = { handleFormSubmit }>
          <div className = 'flex py-11 lg:py-0 w-full min-h-screen mx-auto box-border justify-center'>
            <div className = 'w-6/12 bg-purple hidden lg:flex justify-end items-center'>
              <img className = 'w-8/12 pt-10' src = { mobile } alt = 'mobile' />
            </div>
            <div className = 'lg:bg-white box-border lg:w-6/12 lg:pl-20 lg:pr-12 flex items-center'>
              <div>
                <div className = 'w-7/12 lg:w-4/6 mx-auto'>
                  <img src = { logo } alt = 'logo'/>
                </div>
                <h3 className = 'text-2xl font-bold text-grey-800 text-center pt-12 lg:pt-6'>Verify Your Mail</h3>
                <p className = 'text-sm text-center text-grey-800 pt-6'>Please enter verification pin sent to</p>
                <div className = 'text-center'><a href = '#' className = 'text-xs text-primary font-bold'>{ useremail?useremail: 'johndoe@gmail.com' }</a></div>
                <ul>
                  <li className = 'pt-8 lg:hidden'>
                    <div className = "relative">
                      <input id = "varifypin" name = "verifypin" type = "number" className = "peer h-10 w-full border-b border-grey  placeholder-transparent focus:outline-none focus:border-rose-600" onChange = { handleVarifypin } value = { varifypin } placeholder = '' />
                      <label htmlFor = "varifypin" className = "absolute left-0 -top-3.5 text-grey-500 text-sm transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-grey-500 peer-placeholder-shown:top-2 peer-focus:-top-3.5 peer-focus:text-grey-400 peer-focus:text-sm">Verification Pin</label>
                    </div>
                  </li>
                  <li className = 'pt-8 lg:pt-8 hidden lg:block'>
                    <label className = 'text-sm text-grey-500 lg:text-grey-800'>Verification Pin</label>
                    <input type = "number" className = 'block w-full lg:border border-grey lg:rounded-md lg:px-4 py-2 text-xs outline-primary-600' onChange = { handleVarifypin } value = { varifypin } placeholder = 'Enter verification pin' />
                    { error && <p className = 'text-xs text-red pt-1'>Error: { error }</p> }
                  </li>
                  <li className = 'pt-24 lg:pt-10'>
                    <button className = { `block w-full text-white rounded-3xl lg:rounded-md px-4 py-2.5 text-sm ${isvarifypinValid ? 'bg-gradient-primary' : 'bg-gradient-primary-light'}` } disabled = { !isvarifypinValid }>
                      Sign Up
                      { loading && <div id = "loader"></div> }
                    </button>
                  </li>
                  <li>
                    <div className = 'text-center pt-6'><Link to = "/login" className = 'text-xs text-primary font-bold'>Back to Login</Link></div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default VerifyEmail;
