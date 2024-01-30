import React, { useEffect, useState } from 'react';
import toast, { Toaster } from 'react-hot-toast';
import { Link, useNavigate } from 'react-router-dom';
import GoogleSignup from '../components/GoogleSignup';
import { API } from '../config/index';
import usePost from '../hooks/usePost';

const SignUp = () => {
  const mobile = process.env.PUBLIC_URL + '/images/mobilewithlogo.svg';
  const eyeon = process.env.PUBLIC_URL + '/images/icons/eyeon.png';
  const logo = process.env.PUBLIC_URL + '/images/logo.png';
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorEmail, setErrorEmail] = useState('');
  const [isEmailValid, setIsEmailValid] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [confirmPassword, setConfirmPassword] = useState('');
  const [errorConfirmPassword, setErrorConfirmPassword] = useState('');
  const Navigate = useNavigate();

  const handleEmail = (e) => {
    const trimmedEmail = e.target.value.trim();
    setEmail(trimmedEmail);
  
    // Regular expression for email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const isValidEmail = emailRegex.test(trimmedEmail);
  
    setErrorEmail(isValidEmail ? '' : '');
    setIsEmailValid(isValidEmail);
  };
  
  const handleEmailBlur = () => {
    if (!isEmailValid && email.trim()) {
      setErrorEmail('Please enter a valid email');
    }
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const toggleShowPassword = () => {
    setShowPassword((prevShowPassword) => !prevShowPassword);
  };

  const handleConfirmPasswordChange = (e) => {
    setConfirmPassword(e.target.value);

    setErrorConfirmPassword(
      e.target.value === password ? '' : 'Passwords do not match'
    );
  };

  const isFormValid = isEmailValid && password && confirmPassword === password;

  const {data, loading, error,success, postData } = usePost(API +'users', 'post');

  useEffect(() => {
    if (data?.data?.id) {
      localStorage.setItem('userid', data?.data?.id);
      localStorage.setItem('useremail', email);
      toast.success(success);
      setTimeout(() => {

        Navigate('/verify-email');
      },2000);
    }
  }, [data,Navigate]);

  useEffect(() => {
    document.title = 'Sign Up';
  }, []);

  const handleFormSubmit = (e) => {
    e.preventDefault();
    let data = {};
    data['email'] = email;
    data['password'] = password;
    postData(data);
  };

  return (
    <div className = 'lg:bg-grey-50'>
      <div>
        <Toaster
          position = "top-right"
          reverseOrder = { false }
        />
        <div className = 'flex py-11 lg:py-0 w-full min-h-screen mx-auto box-border justify-center'>
          <div className = 'w-6/12 bg-purple hidden lg:flex justify-end items-center'>
            <img className = 'w-width72% pt-10' src = { mobile } alt = 'loginimg' />
          </div>
          <div className = 'lg:bg-white box-border lg:w-6/12 lg:pl-20 lg:pr-12 flex items-center'>
            <div>
              <Link to = "/" className = 'block w-width68% mx-auto'>
                <img src = { logo } alt = 'logo'/>
              </Link>
              <h3 className = 'text-2xl font-bold text-grey-800 text-center pt-4'>Sign Up</h3>
              <p className = 'text-sm text-center text-grey-800 pt-2'>Welcome to Ethica Invest</p>
              <form onSubmit = { handleFormSubmit }>
                <ul>
                  <li className = 'pt-8 lg:hidden'>
                    <div className = "relative">
                      <input onChange = { handleEmail } onBlur = { handleEmailBlur } value = { email } id = "email" className = { `peer h-10 w-full border-b border-grey placeholder-transparent focus:outline-none focus:border-rose-600 ${errorEmail?'border-red':'border-grey'}` }  placeholder = '' />
                      { errorEmail && <p className = "text-xs text-red">{ errorEmail }</p> }
                      <label htmlFor = "email" className = "absolute left-0 -top-3.5 text-grey-500 text-sm transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-grey-500 peer-placeholder-shown:top-2 peer-focus:-top-3.5 peer-focus:text-grey-400 peer-focus:text-sm">Email</label>
                    </div>
                  </li>
                  <li className = 'pt-6 lg:hidden'>
                    <div className = "relative">
                      <input  onChange = { handlePasswordChange } value = { password } type = { showPassword ? 'text' : 'password' } id = "password" className = "peer h-10 w-full border-b border-grey placeholder-transparent focus:outline-none focus:border-rose-600" placeholder = '' />
                      { password && <a href = '#' className = 'block absolute bottom-2 right-3.5 w-4' onClick = { toggleShowPassword }>{ showPassword?<img src = { eyeon } alt = 'eyeon' /> : <img src = { eyeon } alt = 'eyeon' /> }</a> }
                      <label htmlFor = "password" className = "absolute left-0 -top-3.5 text-grey-500 text-sm transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-grey-500 peer-placeholder-shown:top-2 peer-focus:-top-3.5 peer-focus:text-grey-400 peer-focus:text-sm">Password</label>
                    </div>
                  </li>
                  <li className = 'pt-6 lg:hidden'>
                    <div className = "relative">
                      <input onChange = { handleConfirmPasswordChange } value = { confirmPassword } type = { showPassword ? 'text' : 'password' } id = "cpassword" className = { `peer h-10 w-full border-b border-grey placeholder-transparent focus:outline-none focus:border-rose-600 ${ errorConfirmPassword ? 'border-red' : 'border-primary-600' }` } placeholder = '' />
                      { errorConfirmPassword && (
                        <p className = "text-xs text-red">{ errorConfirmPassword }</p>
                      ) }
                      <label htmlFor = "cpassword" className = "absolute left-0 -top-3.5 text-grey-500 text-sm transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-grey-500 peer-placeholder-shown:top-2 peer-focus:-top-3.5 peer-focus:text-grey-400 peer-focus:text-sm"> Confirm password</label>
                    </div>
                  </li>
                  <li className = 'pt-8 lg:pt-2.5 hidden lg:block'>
                    <label className = 'text-sm text-grey-500 lg:text-grey-800'>Email</label>
                    <input className = { `block w-full lg:border border-grey lg:rounded-md lg:px-4 py-2 text-xs ${errorEmail?'outline-red':'outline-primary-600'}` } onChange = { handleEmail } onBlur = { handleEmailBlur } value = { email } placeholder = 'Enter email' />
                    { errorEmail && <p className = "text-xs text-red">{ errorEmail }</p> }
                  </li>
                  <li className = 'relative pt-6 lg:pt-4 hidden lg:block'>
                    <label className = 'text-sm text-grey-500 lg:text-grey-800'>Password</label>
                    <input
                      onChange = { handlePasswordChange }
                      value = { password }
                      type = { showPassword ? 'text' : 'password' }
                      className = 'block w-full lg:border border-grey lg:rounded-md lg:px-4 py-2 text-xs outline-primary-600'
                      placeholder = 'Enter password'
                    />
                    { password && <a href = '#' className = 'block absolute bottom-2 right-3.5 w-4' onClick = { toggleShowPassword }>{ showPassword?<img src = { eyeon } alt = 'eyeon' /> : <img src = { eyeon } alt = 'eyeon' /> }</a> }
                  </li>
                  <li className = "relative pt-6 lg:pt-4 hidden lg:block">
                    <label className = "text-sm text-grey-500 lg:text-grey-800">Confirm Password</label>
                    <input
                      onChange = { handleConfirmPasswordChange }
                      value = { confirmPassword }
                      type = { showPassword ? 'text' : 'password' }
                      className = { `block w-full lg:border border-grey lg:rounded-md lg:px-4 py-2 text-xs ${
                        errorConfirmPassword ? 'outline-red' : 'outline-primary-600'
                      }` }
                      placeholder = "Confirm password"
                    />
                    { errorConfirmPassword && (
                      <p className = "text-xs text-red">{ errorConfirmPassword }</p>
                    ) }
                  </li>
                  <li className = 'pt-6'>
                    { error && <p className = 'text-xs text-red pb-1'>Error: { error == 'Invalid body'?'Password must contain at least 8 character(s)' : error }</p> }
                    <button
                      className = { `block w-full text-white rounded-3xl lg:rounded-md px-4 py-2.5 text-sm ${
                        isFormValid ? 'bg-gradient-primary' : 'bg-gradient-primary-light'
                      }` }
                      disabled = { !isFormValid }
                    >
                      Sign Up
                      { loading && <div id = "loader"></div> }
                    </button>
                  </li>
                </ul>
              </form>
              <ul>
                <li><p className = 'text-sm text-grey-800 text-center py-3'>OR</p></li>
                <li><GoogleSignup /></li>
                <li>
                  <p className = 'text-sm text-grey-800 text-center pt-4'>Already have an account? <Link className = 'text-primary font-bold' to = "/login">Login</Link></p>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
