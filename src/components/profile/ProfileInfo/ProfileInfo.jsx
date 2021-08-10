import React from 'react';
import s from './ProfileInfo.module.css';
import Preloader from '../../common/Preloader/Preloader'
import userPhoto from '../../../assets/images/user.jpg';
import ProfileStatusWithHooks from './ProfileStatusWithHooks';
import { useState } from 'react';
import ProfileDataForm from './ProfileDataForm';



const ProfileInfo = (props) => {

  let [editMode, setEditMode] = useState(false)

  if (!props.profile) {
    return <Preloader />
  }

  const onMainPhotoSelect = (e) => {
    if (e.target.files.length) {
      props.selectedPhoto(e.target.files[0])
    }
  }

  const onSubmit = (formData) => {
    props.saveProfile(formData).then(
      () => { setEditMode(false) }
    )
  }


  return (
    <div>
      <div className={s.discriptionBlock}>
        <div className={s.imgBlock}>
          <img src={props.profile.photos.large != null ? props.profile.photos.large : userPhoto} />
          {props.isOwner &&
            <div>
              <input type={"file"}
                className={s.inputFile}
                onChange={onMainPhotoSelect} />
              <p>Change photo</p>
            </div>
          }
        </div>
        <div>
          <h1>{props.profile.fullName}</h1>
          <b>Status:</b>
          <ProfileStatusWithHooks status={props.status} 
                                  updateStatus={props.updateStatus}
                                  isOwner={props.isOwner} />
          <div className={s.dataBlock}>
            {editMode
              ? <ProfileDataForm profile={props.profile}
                onSubmit={onSubmit}
                initialValues={props.profile} />
              : <ProfileData profile={props.profile}
                editModeTrue={() => setEditMode(true)}
                isOwner={props.isOwner} />
            }
          </div>
        </div>
      </div>
    </div>
  )
};


const ProfileData = (props) => {
  return (
    <div className={s.dataBlockEditFalse}>
      <div>
        {props.isOwner && <button onClick={props.editModeTrue}>Edit</button>}
      </div>
      <div>
        <b>Looking for a job: </b>{props.profile.lookingForAJob ? 'yes' : 'no'}
      </div>
      <div>
        <b>My professional skills: </b>{props.profile.lookingForAJobDescription}
      </div>
      <div>
        <b>About me: </b>{props.profile.aboutMe}
      </div>
      <div>
        <b>Contacts: </b>
        {Object.keys(props.profile.contacts).map(key => <Contact contactTitle={key}
          contactValue={props.profile.contacts[key]}
          key={key}
        />)}
      </div>
    </div>
  )
}


const Contact = ({ contactTitle, contactValue }) => {
  return (
    <div className={s.contactsItem}>
      <b>• {contactTitle}: </b> {contactValue}
    </div>
  )
}




export default ProfileInfo;
