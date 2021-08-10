import React from 'react';
import s from './profile.module.css';
import MyPostsContainer from './MyPosts/MyPostsContainer'
import ProfileInfo from './ProfileInfo/ProfileInfo';


const Profile = (props) => {
  return (
    <div className={s.content}>
      <ProfileInfo  profile={props.profile}
                    isOwner={props.isOwner}
                    saveProfile={props.saveProfile}
                    status={props.status}
                    updateStatus={props.updateStatus}
                    selectedPhoto={props.selectedPhoto} />
      <MyPostsContainer />
    </div>
  )
};

export default Profile;
