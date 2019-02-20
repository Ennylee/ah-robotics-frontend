import React from 'react';
import { Comment } from 'semantic-ui-react';
import PropTypes from 'prop-types';
import moment from 'moment';


const SingleCommentComponent = ({ comment }) => (
  <Comment>
    <Comment.Avatar src={comment.author.image} />
    <Comment.Content>
      <Comment.Author as="a">{`${comment.author.username}`}</Comment.Author>
      <Comment.Metadata>
        <div>{`${moment(comment.created_at).fromNow()}`}</div>
      </Comment.Metadata>
      <Comment.Text>
        <p>{`${comment.body}`}</p>
      </Comment.Text>
      <Comment.Actions>
        <Comment.Action>Like</Comment.Action>
        <Comment.Action>Dislike</Comment.Action>
      </Comment.Actions>
    </Comment.Content>
  </Comment>
);

SingleCommentComponent.propTypes = {
  comment: PropTypes.shape({}).isRequired,
};
export default SingleCommentComponent;
