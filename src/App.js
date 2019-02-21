import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import HomeView from './views/HomeView';
import RegisterView from './views/RegisterView';
import LoginView from './views/LoginView';
import Error from './components/Error/index';
import NavigationComponent from './views/NavigationView';
import VerifyRegistrationView from './views/VerifyRegistrationView/index';
import ProfileView from './views/UserProfileView';
import profileEditView from './views/UserProfileView/profileEditView';

const App = () => (
  <BrowserRouter>
    <div>
      <NavigationComponent />
      <Switch>
        <Route path="/" component={HomeView} exact />
        <Route path="/login" component={LoginView} exact />
        <Route path="/register" component={RegisterView} />
        <Route path="/profiles" component={ProfileView} />
        <Route path="/editprofile" component={profileEditView} />
        <Route path="/verify/:token" component={VerifyRegistrationView} />
        <Route component={Error} />
      </Switch>
    </div>
  </BrowserRouter>
);

export default App;
