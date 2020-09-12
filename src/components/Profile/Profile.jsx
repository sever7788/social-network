import React from 'react';
import s from './Profile.module.css';
import MyPosts from './MyPosts/MyPosts';
import ProfileInfo from './ProfileInfo/ProfileInfo';
import { addPost } from '../../redux/state';


const Profile = (props) =>{
    return <div className={s.profile}>
      <ProfileInfo/>
      <MyPosts posts = {props.state.posts}
                        addPost={props.addPost}
                        newPostText = {props.state.newPostText}
                        dispatch={props.dispatch}/>
    </div>
}
export default Profile;