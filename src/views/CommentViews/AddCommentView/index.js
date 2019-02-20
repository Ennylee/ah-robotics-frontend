import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { Segment } from 'semantic-ui-react';
import { addArticleComment, getArticleComments } from '../../../redux/actions/CommentActions/actions';
import AddCommentComponent from '../../../components/Comments/addComment';
import CommentsListComponent from '../../../components/Comments/articleComments';


class AddCommentView extends Component {
  constructor(props) {
    super(props);
    this.state = { body: '' };
  }

  componentDidMount() {
    const payload = {};
    payload.slug = 'dc-comics';
    const { getArticleComments: getCommentsAction } = this.props;
    getCommentsAction(payload);
  }

  onChange = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  };

  handleSubmit = (e) => {
    const { addArticleComment: addCommentAction } = this.props;
    const current = this.state;
    e.preventDefault();
    const data = { body: current.body };
    addCommentAction(data);
  };

  render() {
    const { getComments } = this.props;
    const { addComment } = this.props;
    const commentsList = getComments.comments.comment;
    const totalCount = getComments.comments.commentsCount;
    const loading = getComments.isLoading;
    return (
      <div>
        <AddCommentComponent
          onChange={this.onChange}
          handleSubmit={this.handleSubmit}
          comment={addComment}
        />
        <Segment loader={loading} basic>
          <CommentsListComponent
            comments={commentsList}
            loading={loading}
            count={totalCount}
          />
        </Segment>
      </div>
    );
  }
}

AddCommentView.propTypes = {
  addArticleComment: PropTypes.func.isRequired,
  getArticleComments: PropTypes.func.isRequired,
  getComments: PropTypes.func.isRequired,
  addComment: PropTypes.func.isRequired,
};

const mapStateToProps = ({ addComment, getComments }) => ({
  addComment, getComments,
});

const mapDispatchToProps = dispatch => bindActionCreators({
  addArticleComment, getArticleComments,
}, dispatch);


export default connect(mapStateToProps, mapDispatchToProps)(AddCommentView);
