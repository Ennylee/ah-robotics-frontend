import React from 'react';
import {
   Image, Grid, Container, Icon, Label, Menu, Header, GridRow, Button,
} from 'semantic-ui-react';
import { NavLink } from 'react-router-dom';
import './profile.scss';
import imglove from './Images/lov.jpeg';

const ProfileComponent = (profile) => {
const user = profile;
    return (<Container>
      <Grid>
            <Grid.Row>
              <Grid.Column width={4}>
                  <Image id="sample-img" src={imglove} size='medium' circular className="App-logo" color='red' alt="logo" />
                </Grid.Column>
              <Grid.Column width={6}>
                  <Header id='sample-header' as='h3'><b>Username: </b>{user.profile && user.profile.username }</Header>
                  <p>
                     <b>Bio: </b> {user.profile && user.profile.bio }
                  </p>        
                </Grid.Column>    
            </Grid.Row>
            <GridRow>
                  <div>
                    <Button positive><NavLink to="editprofile">Edit Profile</NavLink></Button>
                  </div>
            </GridRow>
          <Grid.Row>
              <Menu compact>
                <Menu.Item as='a'>
                <Icon name='users' /> Followers
                <Label color='green' floating>
                   {user.profile && user.profile.followers}
                </Label>
                </Menu.Item>
                <Menu.Item as='a'>
                <Icon name='users' /> Following
                <Label color='teal' floating>
                {user.profile && user.profile.following_count }
                </Label>
                </Menu.Item>
            </Menu>
            </Grid.Row>
        </Grid>
    </Container>
);
};
export default ProfileComponent
