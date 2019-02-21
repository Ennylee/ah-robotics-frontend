import React from 'react';
import {
    Image, Grid, Container, Button, Form, Input, Segment, Divider,
} from 'semantic-ui-react';
import { NavLink } from 'react-router-dom';
import './profile.scss';
import PropTypes from 'prop-types';
import imglove from '../Images/lov.jpeg';

// const user = profile;
const ProfileEditComponent = ({ profile, handleSubmit, onChange }) => (
  <Container>
    <Segment placeholder>
      <Form enctype="multipart/formdata">
        <Grid columns={2} relaxed="very" stackable>

          <Grid.Column>
            <Grid.Column width={4}>
              <Image id="sample-img" src={imglove} size="medium" circular className="App-logo" color="red" alt="logo" />
            </Grid.Column>
            <Input type="file" name="image" accept="image/*" onChange={onChange} />
          </Grid.Column>

          <Grid.Column verticalAlign="middle">
            <Form.Field className="bio-textarea">
              <Form.TextArea rows="10" label="Bio input" placeholder="Tell us more about you..." name="bio" onChange={onChange} value={profile.bio} />
            </Form.Field>
          </Grid.Column>
        </Grid>
      </Form>


      <Divider vertical />
    </Segment>
    <Button.Group>
      <Button><NavLink to="profiles">Cancel</NavLink></Button>
      <Button.Or />
      <Button fluid type="submit" onClick={handleSubmit} positive>Save</Button>
    </Button.Group>
  </Container>
    );
ProfileEditComponent.propTypes = {
    profile: PropTypes.shape({}).isRequired,
    handleSubmit: PropTypes.shape({}).isRequired,
    onChange: PropTypes.shape({}).isRequired,
  };

export default ProfileEditComponent;
