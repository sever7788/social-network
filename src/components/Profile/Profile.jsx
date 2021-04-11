import React from 'react';
import s from './Profile.module.css';
import MyPostsContainer from './MyPosts/MyPostsContainer';
import ProfileInfo from './ProfileInfo/ProfileInfo';

const Profile = (props) => {
  return <div className={s.profile}>
    <ProfileInfo isOwner={props.isOwner} savePhoto={props.savePhoto}
      saveProfile={props.saveProfile}
      profile={props.profile}
      status={props.status}
      updateStatus={props.updateStatus} />
    <MyPostsContainer store={props.store} />
  </div>
}
export default Profile;