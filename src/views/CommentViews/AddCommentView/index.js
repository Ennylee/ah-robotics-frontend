import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { addArticleComment } from '../../../redux/actions/CommentActions/actions';
import AddCommentComponent from '../../../components/Comments/addComment';


class AddCommentView extends Component {
  constructor(props) {
    super(props);
    this.state = { body: '' };
  }

  onChange = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  };

  handleSubmit = (e) => {
    const { addArticleComment: addCommentAction } = this.props;
    e.preventDefault();
    const data = { body: this.state.body };
    console.log(data);
    addCommentAction(data);
  };

  render() {
    return (
      <AddCommentComponent
        onChange={this.onChange}
        handleSubmit={this.handleSubmit}
      />
    );
  }
}

AddCommentView.propTypes = {
  addArticleComment: PropTypes.func.isRequired,
};

const mapStateToProps = ({ addComment }) => ({
  addComment,
});

const mapDispatchToProps = dispatch => bindActionCreators({
  addArticleComment,
}, dispatch);


export default connect(mapStateToProps, mapDispatchToProps)(AddCommentView);
