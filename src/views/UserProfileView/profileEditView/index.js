import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
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

  onChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  }

  handleEdit = (event) => {
    event.preventDefault();
    const { profileUpdate: profileUpdateAction } = this.props;
    const updateData = {};
    updateData.data = this.state;
    updateData.token = '';
    updateData.username = 'username';
    profileUpdateAction(updateData);
  }

  render() {
    return (
      <ProfileEditComponent onChange={this.onChange} handleEdit={this.handleEdit} />
    );
  }
}

const mapStateToProps = state => ({
  editProfile: state.profileEdit,
});

const mapDispatchToprops = dispatch => bindActionCreators({
  profileUpdate,
}, dispatch);

export default connect(mapStateToProps, mapDispatchToprops)(profileEditView);
