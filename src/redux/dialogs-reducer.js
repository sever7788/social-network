const UPDATE_NEW_MESSAGE_BODY = 'UPDATE-NEW-MESSAGE-BODY';
const SEND_MESSAGE = 'SEND-MESSAGE';

let initialState = {

        dialogs: [
            { id: 1, name: "Dimych" },
            { id: 2, name: "Andreu" },
            { id: 3, name: "Sveta" },
            { id: 4, name: "Sacha" },
            { id: 5, name: "Viktor" },
            { id: 6, name: "Valera" }],
        messages: [
            { id: 1, message: "Hi" },
            { id: 2, message: "How is your it-kamasutra" },
            { id: 3, message: "yo" },
            { id: 4, message: "yo" },
            { id: 5, message: "yo" },
            { id: 6, message: "yo" }],
        newMessageBody:""
};

const dialogsReducer = (state = initialState, action)=>{
    
    switch(action.type){
        case SEND_MESSAGE:
            let body = state.newMessageBody;
            return {
                ...state,
                messages: [...state.messages,{id:6, message: body}],
                newMessageBody: ""
            };
        case UPDATE_NEW_MESSAGE_BODY:
            return {
                ...state,
                newMessageBody:action.body
            };
        default: 
            return state;
    }
}

export const sendMessageCreator=()=>({type: SEND_MESSAGE});
export const updateNewMessageBodyCreator=(body)=>({type: UPDATE_NEW_MESSAGE_BODY, body: body});


export default dialogsReducer;