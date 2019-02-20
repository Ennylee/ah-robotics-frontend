import React from 'react';
import PropTypes from 'prop-types';
import {
 Button, Form,
} from 'semantic-ui-react';

const AddCommentComponent = ({ onChange, handleSubmit }) => (
  <Form reply>
    <Form.TextArea onChange={onChange} name="body" />
    <Button content="Add Reply" labelPosition="left" icon="edit" primary onClick={handleSubmit} />
  </Form>
);

AddCommentComponent.propTypes = {
  onChange: PropTypes.func.isRequired,
  handleSubmit: PropTypes.func.isRequired,
};

export default AddCommentComponent;
