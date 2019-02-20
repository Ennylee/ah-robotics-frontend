import React from 'react';
import {
   Image, Grid, Container, Icon, Label, Menu, Header
} from 'semantic-ui-react';
import './profile.scss';
import imglove from './Images/lov.jpeg';


const ProfileComponent = (profile) =>(
    <Container>
        <Grid>
            <Grid.Row>
                <Grid.Column width={4}>
                <Image src={imglove} size='medium' circular className="App-logo" color='red' alt="logo" />
                </Grid.Column>
                <Grid.Column width={6}>
                <Header as='h3'>{profile.username}</Header>
                    <p>
                        Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor.
                        Aenean massa strong. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur
                        ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla
                        consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu.
                        In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede
                    </p>        
                </Grid.Column>
    
            </Grid.Row>

            <Grid.Row>
            <Menu compact>
                <Menu.Item as='a'>
                <Icon name='users' /> Followers
                <Label color='green' floating>
                    22
                </Label>
                </Menu.Item>
                <Menu.Item as='a'>
                <Icon name='users' /> Following
                <Label color='teal' floating>
                    22
                </Label>
                </Menu.Item>
            </Menu>
            </Grid.Row>
        </Grid>
    </Container>
    
)
export default ProfileComponent
