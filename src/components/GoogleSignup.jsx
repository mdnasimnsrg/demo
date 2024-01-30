import { useGoogleLogin } from '@react-oauth/google';
import axios from 'axios';
import React, { memo, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { API } from '../config/index';
const GoogleSignup = () => {
  const google_logo = process.env.PUBLIC_URL + '/images/google_logo.png';
  const navigate = useNavigate();
  const [user, setUser] = useState([]);
  // eslint-disable-next-line no-unused-vars
  const [profile, setProfile] = useState([]);
  const [errorMessage, setErrorMessage] = useState();
  const googleRegister = useGoogleLogin({
    onSuccess: (codeResponse) => setUser(codeResponse),
    onError: (error) => setErrorMessage(error)
  });

  useEffect(() => {
    if (user?.access_token) {
      axios
        .get(
          `https://www.googleapis.com/oauth2/v1/userinfo?access_token=${user.access_token}`
         
        )
        .then((res) => {
          setProfile(res.data);
          if (res.data) {
            localStorage.setItem('user', JSON.stringify(res.data));

            let localdata = localStorage.getItem('user');
            const profile = JSON.parse(localdata);

            const postData = async () => {
              const data = {
                id: profile?.id,
                name: profile?.name,
                emailVerified: profile?.verified_email ? true : false,
                email: profile?.email,
                picture: profile?.picture,
                given_name: profile?.given_name,
                family_name: profile?.family_name,
                locale: profile?.locale
              };

              try {
                const response = await axios.post(
                  API +'users/google-login',
                  data,
                  { withCredentials: true }
                );
                if (response?.data.data.access_token) {
                  localStorage.setItem(
                    'token',(response?.data.data.access_token)
                  );
                  let axy = axios.defaults.headers.common['Authorization'] = `Bearer ${response?.data.data.access_token}`;
                  console.log('axy',axy);
                  navigate('/dashboard');
                }
              } catch (error) {
                if(error.response && error.response.status === 400){
                  setErrorMessage(error.response.data.error.message);
                }else if(error.response && error.response.status === 500){
                  setErrorMessage(error.response.data.error.message);
                }else{
                  setErrorMessage(error.message);
                }
              }
            };

            postData();
          }
        })
        .catch((err) => console.log(err));
    }
  }, [user]);

  return <>
    { errorMessage && <p className = 'text-xs text-red pb-1'>Error: { errorMessage }</p> }
    <button
      onClick = { () => googleRegister() }
      className = 'flex justify-center w-full border border-grey rounded-3xl lg:rounded-md px-4 py-2.5 text-sm text-grey-800'
    >
      <img className = 'w-5 mr-2' src = { google_logo } alt = 'Google Logo' />
    &nbsp;Continue with Google
    </button>
  </>;
};

export default memo(GoogleSignup);
