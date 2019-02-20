import React, { Component } from 'react';
import ProfileComponent from '../../components/Profile';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { profileData } from '../../redux/actions/userProfileActions/actions'

class ProfileView extends Component {
  componentDidMount() {
    const user = JSON.parse(localStorage.getItem('user'))
    const token = JSON.parse(localStorage.getItem('accessToken'))
    const payload = {}
    const { username } = user
    payload.username = username
    payload.token = token
    const { profileData: profileAction } = this.props;
    profileAction(payload)
  }

  componentWillReceiveProps(nextProps) {
    
  }
  state = {  }
  render() {
    const  {profile}  = this.props
    const profileData = profile.profile
    return (
      profile.isLoading ? <h1>'loading'</h1> : <ProfileComponent profile={profileData} />
    );
  }
}

const mapStateToProps = (state) => ({
  profile: state.userProfile
})

const mapDispatchToProps = (dispatch) => bindActionCreators({
  profileData
}, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(ProfileView);
