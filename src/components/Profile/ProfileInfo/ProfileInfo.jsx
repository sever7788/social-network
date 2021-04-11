import React, { useState } from 'react';
import s from './ProfileInfo.module.css';
import Preloader from '../../common/Preloader/Preloader';
import ProfileDataForm from "./ProfileDataForm";

import ProfileStatusWithHooks from './ProfileStatusWithHooks';
import userPhoto from '../../../asseds/images/user.png';


const ProfileInfo = (props) => {
    let [editMode, setEditMode] = useState(false);

    if (!props.profile) {
        return <Preloader />
    }
    const onMainPhotoSelected = (e) => {
        if (e.target.files.length) {
            props.savePhoto(e.target.files[0])
        }
    }

    const onSubmit = (formData) => {
        props.saveProfile(formData).then(
            () => {
                setEditMode(false);
            }
        );
    }

    return (
        <div className={s.profile}>
            <div className={s.cardPhoto}>
                <img src={props.profile.photos.large || userPhoto} alt="" className={s.ava} />
                {props.isOwner && <span className={s.uploadPhoto}><input type="file" onChange={onMainPhotoSelected} name="file" id="file" className={s.inputfile} />
                    <label for="file" >Choose a photo</label></span>}
            </div>
            < ProfileStatusWithHooks status={props.status} updateStatus={props.updateStatus} />
            {editMode
                ? <ProfileDataForm initialValues={props.profile} profile={props.profile} onSubmit={onSubmit} />
                : <ProfileData goToEditMode={() => { setEditMode(true); }} profile={props.profile} isOwner={props.isOwner} />}
        </div>
    );
}

const ProfileData = (props) => {
    return <div id="description">
        {props.isOwner && <div><button onClick={props.goToEditMode}>edit</button></div>}
        <div id="fullName">
            <b>Full name:</b> {props.profile.fullName}
        </div>
        <div id="contacts">{/*props.profile.contacts*/}</div>
        <div id="lookingForAJob">
            {props.profile.lookingForAJob ? 'Looking for a job' : null}
        </div>
        <div id="lookingForAJobDescription"><b>My professional skills: </b>{props.profile.lookingForAJob ? 'Description: ' + props.profile.lookingForAJobDescription : null}</div>
        <div id="aboutMe">
            <b>About me:</b> {props.profile.aboutMe}
        </div>
        <div id="contacts">
            <b>Contacts: </b>{
                Object.keys(props.profile.contacts).map(key => {
                    return <Contact key={key} contactTitle={key} contactValue={props.profile.contacts[key]}></Contact>
                })}
        </div>
    </div>
}



const Contact = ({ contactTitle, contactValue }) => {
    return <div className={s.contact}><b>{contactTitle}: </b>{contactValue}</div>
}
export default ProfileInfo;