import React from "react"
import s from './Dialogs.module.css'
import { Redirect } from "./../../../node_modules/react-router-dom";
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import { Field, reduxForm } from "redux-form";
import { maxLengthCreator, required } from "../../redux/utils/validators";
import { Textarea } from "../common/FormsControls/FormsControls";

const maxLength50 = maxLengthCreator(50);

const AddMessageForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>

            <div>
                <Field component={Textarea} name="newMessageBody"
                 placeholder="Enter your message"  validate={[required, maxLength50]}/>
            </div>
            <div>
                <button>Send</button>
            </div>
        </form>
    )
}

const AddMessageFormRedux = reduxForm({form:"dialogAddMessageForm"})(AddMessageForm);

const Dialogs = (props) => {
    let state = props.dialogsPage;


    let dialogsElements = state.dialogs.map(d => <DialogItem name={d.name} key={d.id} />);
    let messagesElements = state.messages.map(m => <Message message={m.message} key={m.id} />);

    let addNewMessage = (values) => {
        props.sendMessage(values.newMessageBody);
    }
    if (props.isAuth == false) return <Redirect to={"/login"} />


    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogsElements}
            </div>
            <div className={s.messages}>
                <div>{messagesElements}</div>
                <AddMessageFormRedux onSubmit = {addNewMessage}/>
            </div>
        </div>
    );
}

export default Dialogs;