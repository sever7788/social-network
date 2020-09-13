import React from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post';
import { addPostActionCreator, updateNewPostTextActionCreator } from '../../../redux/profile-reducer';

const MyPosts = (props) => {
  let newPostElement = React.createRef();

  let addPost=()=>{
    props.dispatch(addPostActionCreator())
  }

  let onPostChange = () => {
    let text = newPostElement.current.value;
    props.dispatch(updateNewPostTextActionCreator(text));
  }

  let postsElements = props.posts.map(p=><Post message={p.message} likesCount={p.likesCount} />);
  return <div>
    <h3>My posts</h3>
    <div>
      <textarea onChange={onPostChange} ref = {newPostElement} value={props.newPostText}></textarea>
      <button onClick = {addPost}>Add post</button>
    </div>
    <div className={s.posts}>
      {postsElements}
    </div>
  </div>
}
export default MyPosts;