import React from 'react';
import {
    Image, Grid, Container, Button, Form, Input, Segment, Divider,
} from 'semantic-ui-react';
import { NavLink } from 'react-router-dom';
import './profile.scss';
import imglove from '../Images/lov.jpeg';
import PropTypes from 'prop-types';

const ProfileEditComponent = ({profile, handleSubmit, onChange}) => {
    // const user = profile;
    return (
        <Container>
            <Segment placeholder>
                <Grid columns={2} relaxed='very' stackable>
                <Grid.Column>
                    <Form>
                    <Image centered id="sample-img" src={imglove} size='medium' circular className="App-logo" color='red' alt="logo" name="image" onChange={onchange} />
                                    <Input type="file" />
                    </Form>
                </Grid.Column>

                <Grid.Column verticalAlign='middle'>
                    <Form>
                        <Form.Field className="bio-textarea">
                            <Form.TextArea rows="10"  label='Bio input' placeholder='Tell us more about you...' name="bio" onChange={onChange} value={profile.bio} />
                        </Form.Field>
                    </Form>                
                </Grid.Column>
                </Grid>

                <Divider vertical></Divider>
            </Segment>
            <Button.Group >
                <Button><NavLink to="profiles" >Cancel</NavLink></Button>
                <Button.Or />
                <Button fluid type="submit" onClick={handleSubmit} positive>Save</Button>
            </Button.Group>
        </Container>
    );
};
ProfileEditComponent.propTypes = {
    profile: PropTypes.object.isRequired,
    handleSubmit: PropTypes.object.isRequired,
    onChange: PropTypes.object.isRequired,
  };

export default ProfileEditComponent

