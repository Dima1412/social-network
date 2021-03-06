import React from 'react';
import Profile from './profile';
import { connect } from 'react-redux';
import { getUserProfile, getStatus, updateStatus, saveProfile, selectedPhoto } from '../../redux/profile-reducer';
import { withRouter } from 'react-router-dom';
import { compose } from 'redux';




class ProfileContainer extends React.Component {
  
  refreshProfile () {
    let userId = this.props.match.params.userId;
    if (!userId) {
      userId = this.props.authorizedUserId
      if (!userId) {
        this.props.history.push('/login')
      }
    };
    this.props.getUserProfile(userId)
    this.props.getStatus(userId)
  }

  componentDidMount () {
    this.refreshProfile()
  };

  componentDidUpdate (prevProps, prevState, snapshot) {
    if (this.props.match.params.userId != prevProps.match.params.userId) {
      this.refreshProfile()
    }
  }
  
  render () {
    return (
    <Profile {...this.props} 
              profile={this.props.profile} 
              saveProfile={this.props.saveProfile}
              isOwner={!this.props.match.params.userId}
              status={this.props.status} 
              selectedPhoto={this.props.selectedPhoto}
              updateStatus={this.props.updateStatus}/>
    )
  }
};



let mapStateToProps = (state) => ({
profile: state.profilePage.profile,
status: state.profilePage.status,
authorizedUserId: state.auth.userId,
isAuth: state.auth.isAuth
});


export default compose(
  connect(mapStateToProps, {getUserProfile, getStatus, updateStatus, saveProfile, selectedPhoto }),
  withRouter
  )(ProfileContainer);