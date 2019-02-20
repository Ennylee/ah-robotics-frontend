import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import HomeView from './views/HomeView';
import RegisterView from './views/RegisterView';
import LoginView from './views/LoginView';
import Error from './components/Error/index';
import ResetPasswordView from './views/ResetPasswordView';
import NavigationComponent from './views/NavigationView';
import NewPasswordView from './views/NewPasswordView';
import VerifyRegistrationView from './views/VerifyRegistrationView/index';
import ProfileView from './views/UserProfileView';

const App = () => (
  <BrowserRouter>
    <div>
      <NavigationComponent />
      <Switch>
        <Route path="/" component={HomeView} exact />
        <Route path="/login" component={LoginView} exact />
        <Route path="/register" component={RegisterView} />
        <Route path="/profiles" component={ProfileView} />
        <Route path="/verify/:token" component={VerifyRegistrationView} />
        <Route component={Error} />
      </Switch>
    </div>
  </BrowserRouter>
);

export default App;
