import React from 'react';
import s from './ProfileInfo.module.css';
import Preloader from '../../common/Preloader/Preloader'
import userPhoto from '../../../assets/images/user.jpg';
import ProfileStatusWithHooks from './ProfileStatusWithHooks';



const ProfileInfo = (props) => {
  
  if (!props.profile) {
    return <Preloader />
  }
  
  return (
    <div>
      <div className={s.discriptionBlock}>
        <div className={s.imgBlock}>
          <img src={props.profile.photos.large !=null ? props.profile.photos.large : userPhoto}/>
        </div>
        <div>
        <h1>{props.profile.fullName}</h1>
        <h5>Status:</h5>
        <ProfileStatusWithHooks status={props.status} updateStatus={props.updateStatus} />
        </div>
      </div>
    </div>
  )
};

export default ProfileInfo;
