import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import ProfileEditComponent from '../../../components/Profile/ProfileEdit';
import { profileUpdate } from '../../../redux/actions/userProfileActions/actions';

class profileEditView extends Component {
  constructor(props) {
    super(props);
    this.state = {
      bio: '',
      image: '',
    };
  }

  componentWillReceiveProps(nextProps) {
    nextProps.history.push('/profiles');
  }

  onChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  }

  handleSubmit = (event) => {
    event.preventDefault();
    const { profileUpdate: profileUpdateAction } = this.props;
    const user = JSON.parse(localStorage.getItem('user'));
    const token = JSON.parse(localStorage.getItem('accessToken'));
    const { username } = user;
    const updateData = {};
    updateData.data = this.state;
    updateData.token = token;
    updateData.username = username;
    profileUpdateAction(updateData);
  }

  render() {
    const { profile } = this.props;
    return (
      <ProfileEditComponent profile={profile} handleSubmit={this.handleSubmit} onChange={this.onChange} />
    );
  }
}
profileEditView.propTypes = {
  profile: PropTypes.object.isRequired,
};

const mapStateToProps = state => ({
  profile: state.userProfile,
});

const mapDispatchToprops = dispatch => bindActionCreators({
  profileUpdate,
}, dispatch);

export default connect(mapStateToProps, mapDispatchToprops)(profileEditView);
