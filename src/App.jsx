import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import PrivateRoute from './components/PrivateRoute';
import PrivateRouteLogin from './components/PrivateRouteLogin';
import About from './pages/About';
import Dashboard from './pages/Dashboard';
import DataRoom from './pages/DataRoom';
import DataroomDetails from './pages/DataroomDetails';
import Faq from './pages/Faq';
import ForgotPassword from './pages/ForgotPassword';
import Home from './pages/Home';
import Login from './pages/Login';
import ModelPortfolio from './pages/ModelPortfolio';
import Price from './pages/Price';
import PrivacyPolicy from './pages/PrivacyPolicy';
import RebalanceTimeline from './pages/RebalanceTimeline';
import SignUp from './pages/SignUp';
import VerifyEmail from './pages/VerifyEmail';
import TermsAndConditions from './pages/terms-and-conditions';
function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path = '/' element = { <Home /> } />
          { /* Remove this later. */ }
          <Route path = '/home' element = { <Home /> } />
          { /* End of remove this later. */ }
          <Route path = '/about' element = { <About /> } />
          <Route path = '/pricing' element = { <Price /> } />
          <Route path = '/faq' element = { <Faq /> }></Route>
          <Route path = '/privacy-policy' element = { <PrivacyPolicy /> }></Route>
          <Route path = '/terms-and-conditions' element = { <TermsAndConditions /> }></Route>
          <Route path = '' element = { <PrivateRoute /> }>
            <Route path = '/dashboard' element = { <Dashboard /> } />
            <Route path = '/model-portfolio' element = { <ModelPortfolio /> } />
            <Route path = '/data-room' element = { <DataRoom /> } />
            <Route path = '/dataroom-details' element = { <DataroomDetails /> } />
            <Route path = '/rebalance-timeline' element = { <RebalanceTimeline /> } />
          </Route>
          <Route path = '' element = { <PrivateRouteLogin /> }>
            <Route path = '/forgot-password' element = { <ForgotPassword /> } />
            <Route path = '/verify-email' element = { <VerifyEmail /> } />
            <Route path = '/signup' element = { <SignUp /> } />
            <Route path = '/login' element = { <Login /> } />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
