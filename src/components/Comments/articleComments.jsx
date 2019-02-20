import React from 'react';
import { Comment, Header } from 'semantic-ui-react';
import PropTypes from 'prop-types';
import SingleCommentComponent from './singleComment';
import './comment.scss';

const CommentsListComponent = ({ comments, count, loading }) => (
  <Comment.Group id="comment-section">
    <Header id="comment-header-section" as="h3" dividing>
      {(count) && `${count} Comments `}
    </Header>
    {comments && comments.map(comment => (
      (<SingleCommentComponent comment={comment} key={comment.id} />)
    ))}
  </Comment.Group>
);


CommentsListComponent.propTypes = {
  count: PropTypes.number.isRequired,
  loading: PropTypes.bool.isRequired,
  comments: PropTypes.instanceOf(Array).isRequired,
};

export default CommentsListComponent;
