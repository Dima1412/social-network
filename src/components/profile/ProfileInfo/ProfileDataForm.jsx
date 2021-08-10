import React from 'react';
import { Field, reduxForm } from 'redux-form';
import { Input, Textarea } from '../../common/FormsControls/FormsControls';
import styles from '../../common/FormsControls/FormsControls.module.css'



const ProfileDataForm = ({ handleSubmit, profile, error }) => {
  return (
    <form onSubmit={handleSubmit}>
      <div>
        <button>Save</button>
      </div>
      {error && <div className={styles.formSummaryError}>{error}</div>}
      <div>
        <b>Full name:</b>
        <Field placeholder={'Full name'}
          name={'fullName'}
          component={Input} />
      </div>
      <div>
        <b>Looking for a job:</b>
        <Field type={'checkbox'}
          name={'lookingForAJob'}
          component={Input} />
      </div>
      <div>
        <b>My professional skills:</b>
        <Field placeholder={'My professional skills'}
          name={'lookingForAJobDescription'}
          component={Textarea} />
      </div>
      <div>
        <b>About me:</b>
        <Field placeholder={'About me'}
          name={'aboutMe'}
          component={Textarea} />
      </div>
      <div>
        <b>Contacts:</b>
        {Object.keys(profile.contacts).map(key => {
          return <div key={key}>
            <b>{key} : <Field name={'contacts.'+key}
                              placeholder={key}
                              component={Input} /> </b>
          </div>
        })}
      </div>
    </form>
  )
}


const ProfileDataReduxForm = reduxForm({ form: 'edit-profile' })(ProfileDataForm);

export default ProfileDataReduxForm;