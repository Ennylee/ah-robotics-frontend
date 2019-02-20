import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import PropTypes from 'prop-types';
import CommentsListComponent from '../../../components/Comments/articleComments';
import { getArticleComments } from '../../../redux/actions/CommentActions/actions';

class AllCommentsView extends Component {
  constructor(props) {
    super(props);
    this.state = { };
  }

  onChange = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  };

  render() {
    const { getComments } = this.props;
    const commentsList = getComments.comments.comment;
    const totalCount = getComments.comments.commentsCount;
    const loading = getComments.isLoading;
    return (
      <div>
        <CommentsListComponent comments={commentsList} count={totalCount} loading={loading} />
      </div>
    );
  }
}

AllCommentsView.propTypes = {
  getComments: PropTypes.shape({}).isRequired,
};

const mapStateToProps = (
  { getComments, addArticleComment },
) => (
    { getComments, addArticleComment });

const mapDispatchToProps = dispatch => bindActionCreators({ getArticleComments }, dispatch);


export default connect(mapStateToProps, mapDispatchToProps)(AllCommentsView);
