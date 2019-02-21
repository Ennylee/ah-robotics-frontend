import React from 'react';
import {
   Image, Grid, Container, Header, GridRow, Button, Form, Icon,
} from 'semantic-ui-react';
import './profile.scss';
import imglove from '../Images/lov.jpeg';

const ProfileEditComponent = (profile) => {
const user = profile;
    return (
    <Container>
        <Grid>
            <Grid.Row>
              <Grid.Column width={4}>
                  <Image centered id="sample-img" src={imglove} size='medium' circular className="App-logo" color='red' alt="logo" />
                </Grid.Column>
              <Grid.Column width={6}>
                  <Header id='sample-header' as='h3'>{user.profile && user.profile.username }</Header>
                  <p>
                      {user.profile && user.profile.bio }
                  </p>        
                </Grid.Column>    
            </Grid.Row>
            <GridRow>
            <div>
    <Header as='h2' icon textAlign='center'>
      <Icon name='users' circular />
      <Header.Content>Friends</Header.Content>
    </Header>
    <Image centered size='large' src='/images/wireframe/centered-paragraph.png' />
  </div>
            <Form>
                <Form.Field>
                    <Form.TextArea label='Bio input' placeholder='Tell us more about you...' />
                </Form.Field>
            </Form>
            </GridRow>
          <Grid.Row>
                <Button.Group>
                    <Button>Cancel</Button>
                    <Button.Or />
                    <Button positive>Save</Button>
                </Button.Group>
            </Grid.Row>
        </Grid>
    </Container>
);
};
export default ProfileEditComponent
