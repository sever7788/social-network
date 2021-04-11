import React from 'react';
import { Field, reduxForm } from 'redux-form';
import s from './MyPosts.module.css';
import Post from './Post/Post';
import { maxLengthCreator, required} from './../../../redux/utils/validators/index';
import { Textarea } from '../../common/FormsControls/FormsControls';

const maxLength10 = maxLengthCreator(10);
let addPostForm = (props) => {
  return (
    <form onSubmit={props.handleSubmit}>
      <div>
        <Field component={Textarea} name="newPostText"
         placeholder="Enter your post" validate={[required, maxLength10]}/>
      </div>
      <div>
        <button>Add post</button>
      </div>
    </form>
  )
}

// const addPostFormRedux = reduxForm({ form: "addPost" })(addPostForm);
const AddPostFormRedux = reduxForm({form:"addPost"})(addPostForm);
const MyPosts = React.memo(props => {

  let addNewPost = (values) => {
    props.addPost(values.newPostText);
  }

  let postsElements = props.posts.map(p => <Post key = {p.id} message={p.message} key={p.id} likesCount={p.likesCount} />);
  return <div>
    <h3 className="heading">My posts</h3>
    <AddPostFormRedux onSubmit={addNewPost} />
    <div className={s.posts}>
      {postsElements}
    </div>
  </div>
});

export default MyPosts;