import React from "react"
import s from './Dialogs.module.css'
import { NavLink } from "react-router-dom";
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import {sendMessageCreator, updateNewMessageBodyCreator} from "../../redux/dialogs-reducer"

const Dialogs = (props) => {
    let state = props.store.getState().dialogsPage;
    

    let dialogsElements = (props) => state.dialogs.map(d => <DialogItem name={d.name} id={d.id} />);
    let messagesElements = (props) => state.messages.map(m => <Message message={m.message} />);
    let newMessageBody = state.newMessageBody; 

    let onSendMessageClick = () =>{
        debugger;
        props.store.dispatch(sendMessageCreator());
    }

    let onNewMessageChange = (e) =>{
        let body=e.target.value;
        props.store.dispatch(updateNewMessageBodyCreator(body));
    }
    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogsElements(props)}
            </div>
            <div className={s.messages}>
                <div>{messagesElements(props)}</div>
                <div>
                    <div><textarea value={newMessageBody} onChange ={onNewMessageChange} placeholder='Enter Your message'></textarea></div>
                    <div><button onClick={onSendMessageClick}>Send</button></div>
                </div>
            </div>
        </div>
    );
}

export default Dialogs;