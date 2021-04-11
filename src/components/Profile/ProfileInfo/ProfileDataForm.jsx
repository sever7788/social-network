import React from "react";
import { reduxForm } from "redux-form";
import { createField } from "../../../redux/utils/object-helpers";
import { Input, Textarea } from "./../../common/FormsControls/FormsControls";
import s from './ProfileInfo.module.css';
import style from "./../../common/FormsControls/FormsControls.module.css";
const ProfileDataForm = (props) => {
    return <form id="description" onSubmit={props.handleSubmit}>
        <div><button onClick={() => { }}>save</button></div>
        {props.error && <div className={style.formSummaryError}>
            {props.error}
        </div>}
        <div id="fullName">
            <b>Full name: </b>{createField("Full name", "fullName", [], Input)}
        </div>
        <div id="contacts">{/*props.profile.contacts*/}</div>
        <div id="lookingForAJob">
            <b>Looking for a job: </b>
            {createField("", "lookingForAJob", [], Input, { type: "checkbox" })}
        </div>
        <div id="lookingForAJobDescription">
            <b>My professional skills: </b>
            {createField("My professional skills", "lookingForAJobDescription", [], Textarea)}
        </div>
        <div id="aboutMe">
            <b>About me:</b>
            {createField("About me", "aboutMe", [], Textarea)}
        </div>
        <div id="contacts">
            <b>Contacts: </b>{
                Object.keys(props.profile.contacts).map(key => {
                    return <div key={key} className={s.contact}>
                        <b>{key}: {createField(key, "contacts." + key, [], Input)}</b>
                    </div>
                })}
        </div>
    </form>
}
const ProfileDataFormReduxForm = reduxForm({ form: "edit-profile" })(ProfileDataForm);
export default ProfileDataFormReduxForm;