import React from 'react';
import PropTypes from 'prop-types';
import {
  Button, Form, Message,
} from 'semantic-ui-react';
import './comment.scss';

const AddCommentComponent = ({ onChange, handleSubmit, comment }) => (
  <div id="add-comment-section">
    <div>
      {comment.errors.errors && (
      <Message color="red" size="tiny">
        {comment.errors.errors.body[0] && 'Cannot create empty comment'}
      </Message>
)}
    </div>
    <Form reply>
      <Form.TextArea
        onChange={onChange}
        name="body"
        id="comment-area"
        placeholder="Add a comment to the article here..."
      />
      <Button
        id="comment-button"
        content="Add Comment"
        primary
        loading={comment.isLoading}
        onClick={handleSubmit}
      />
    </Form>
  </div>
);

AddCommentComponent.propTypes = {
  onChange: PropTypes.func.isRequired,
  handleSubmit: PropTypes.func.isRequired,
  comment: PropTypes.shape({}).isRequired,
};

export default AddCommentComponent;
