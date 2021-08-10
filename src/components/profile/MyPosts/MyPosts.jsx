import React from 'react';
import { Field, reduxForm } from 'redux-form';
import { required, maxLengthCreator } from '../../../utils/validators/validators';
import { Textarea } from '../../common/FormsControls/FormsControls';
import s from './MyPosts.module.css';
import Post from './Post/Post';


const maxLength10 = maxLengthCreator(10);

const MyPosts = (props) => {

  let postsElements = [...props.posts].reverse().map(p => <Post message={p.message} 
                                                                likesCount={p.likesCount}
                                                                key={p.id} />);

  let addNewPost = (values) => {
    props.addPost(values.newPostElement);
  }

  return (
    <div className={s.postsBlock}>
      <h3>Posts:</h3>
      <div>
        <MyPostsFormRedux onSubmit={addNewPost}/>
        {postsElements}
      </div>
    </div>
  )
};

const MyPostsForm = (props) => {
  return (
    <form onSubmit={props.handleSubmit} className={s.postsForm}>
      <div>
        <Field component={Textarea} name='newPostElement' 
               placeholder='Enter your message' 
               validate={[required, maxLength10]} />
      </div>
      <div>
        <button>Add post</button>
      </div>
    </form>
  )
}

const MyPostsFormRedux = reduxForm({form: 'addPostForm'})(MyPostsForm);

export default MyPosts;
