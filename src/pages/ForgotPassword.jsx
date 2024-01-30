import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const ForgotPassword = () => {
  const logo = process.env.PUBLIC_URL + '/images/logo.png';
  const mobile = process.env.PUBLIC_URL + '/images/mobilewithlogo.svg';
  const green_checkmark = process.env.PUBLIC_URL + '/images/verify.png';
  
  const [email, setEmail] = useState('');
  const [errorEmail, setErrorEmail] = useState('');
  const [isEmailValid, setIsEmailValid] = useState(false);

  const handleEmailChange = (e) => {
    const trimmedEmail = e.target.value.trim();
    setEmail(trimmedEmail);
  
    // Regular expression for email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const isValidEmail = emailRegex.test(trimmedEmail);
  
    if (!trimmedEmail) {
      setErrorEmail('');
    } else {
      setErrorEmail(isValidEmail ? '' : 'Please enter a valid email');
    }
  
    setIsEmailValid(isValidEmail);
  };

  const handlePasswordReset = () => {
    console.log('hi');
  };

  return (
    <div className = 'lg:bg-grey-50'>
      <div>
        <div className = 'flex py-11 lg:py-0 w-full min-h-screen mx-auto box-border justify-center'>
          <div className = 'w-6/12 bg-purple hidden lg:flex justify-end items-center'>
            <img className = 'w-width72% pt-10' src = { mobile } alt = 'mobile' />
          </div>
          <div className = 'lg:bg-white box-border lg:w-6/12 lg:pl-20 lg:pr-12 flex items-center'>
            <div className = 'lg:w-3/6'>
              <div className = 'w-7/12 lg:w-4/6 mx-auto'>
                <img src = { logo } alt = 'logo'/>
              </div>
              <h3 className = 'text-2xl font-bold text-grey-800 text-center pt-12 lg:pt-8'>Forgot Password</h3>
              <p className = 'text-sm text-center text-grey-800 pt-2'>You will receive an email with a link <br></br> to reset your password.</p>
              <ul>
                <li className = 'pt-8 lg:hidden'>
                  <div className = "relative">
                    <input id = "email" name = "email" type = "text" onChange = { handleEmailChange } value = { email } className = "peer h-10 w-full border-b border-grey placeholder-transparent focus:outline-none focus:border-rose-600" placeholder = '' />
                    <label htmlFor = "email" className = "absolute left-0 -top-3.5 text-grey-500 text-sm transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-grey-500 peer-placeholder-shown:top-2 peer-focus:-top-3.5 peer-focus:text-grey-400 peer-focus:text-sm">Email</label>
                    { errorEmail && <p className = "text-xs text-red">{ errorEmail }</p> }
                  </div>
                </li>
                <li className = 'pt-8 lg:pt-8 hidden lg:block'>
                  <label className = 'text-sm text-grey-500 lg:text-grey-800 '>Email</label>
                  <input onChange = { handleEmailChange } value = { email } className = 'block w-full lg:border border-grey lg:rounded-md lg:px-4 py-2 text-xs outline-primary-600' placeholder = 'Enter email' />
                  { errorEmail && <p className = "text-xs text-red">{ errorEmail }</p> }
                </li>
                <li className = 'pt-24 lg:pt-10'><button className = { `block w-full text-white rounded-3xl lg:rounded-md px-4 py-2.5 text-sm ${isEmailValid ? 'bg-gradient-primary' : 'bg-gradient-primary-light'}` } disabled = { !isEmailValid } onClick = { handlePasswordReset }>Password Reset Link</button></li>
                <li>
                  <div className = 'text-right py-1'><a href = '#' className = 'text-xs text-primary font-bold'>Contact support</a></div>
                  <div className = 'bg-green-200 rounded-md box-border p-4 mt-2'>
                    <img src = { green_checkmark } alt = 'Icon signifying successful event.'  />
                    <h3 className = 'text-sm pt-2 font-bold text-black'>Email Sent</h3>
                    <p className = 'lg:block hidden text-xs pt-2 text-black'>If you have an account with us, we have just sent you an email with a link to reset your password.</p>
                    <p className = 'lg:hidden text-xs pt-2 text-black'>If you have an account with us, we have just sent <br></br> you an email with a link to reset your password.</p>
                  </div>
                </li>
                <li>
                  <div className = 'text-center pt-6'><Link to = "/login" className = 'text-xs text-primary font-bold'>Back to Login</Link></div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ForgotPassword;
