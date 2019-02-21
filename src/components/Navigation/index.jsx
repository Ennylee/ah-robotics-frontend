import React from 'react';
import { NavLink } from 'react-router-dom';
import { Menu, Container } from 'semantic-ui-react';
import './navigation.scss';

const NavigationComponent = () => (
  <div>

    <Container>
      <Menu pointing secondary>
        <NavLink to="/">
          <Menu.Item name="Home" active />
        </NavLink>
        <NavLink to="/articles">
          <Menu.Item name="Articles" />
        </NavLink>
        <NavLink to="/profiles">
          <Menu.Item name="Profile" />
        </NavLink>
        <NavLink to="/ratings">
          <Menu.Item name="Ratings" />
        </NavLink>
        <Menu.Menu position="right">
          <NavLink to="/login">
            <Menu.Item
              name="Login"
            />
          </NavLink>
          <NavLink to="/register">
            <Menu.Item name="Register" />
          </NavLink>
        </Menu.Menu>
      </Menu>
    </Container>

  </div>

);
export default NavigationComponent;
