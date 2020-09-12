const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
const UPDATE_NEW_MESSAGE_BODY = 'UPDATE-NEW-MESSAGE-BODY';
const SEND_MESSAGE = 'SEND-MESSAGE';
let store={
    _state : {
        profilePage: {
            posts: [
                { id: 0, message: "Hi, how are you?", likesCount: 0 },
                { id: 1, message: "It's my first post!", likesCount: 23 }
            ],
            newPostText: 'it-kamasutra.com'
        },
    
        dialogsPage: {
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
        }
    },
    getState(){
        return this._state;
    },
    _rerenderEntireTree(){
        console.log("State change");
    },
    subscribe(observer){
        this._rerenderEntireTree = observer;
    },
    dispatch(action){
        if(action.type === ADD_POST){
            let newPost = {
                id:5,
                message: this._state.profilePage.newPostText,
                likesCount: 0
            };
            this._state.profilePage.newPostText="";
            this._state.profilePage.posts.push(newPost);
            this._rerenderEntireTree(this._state);
        }else if(action.type===UPDATE_NEW_POST_TEXT){
            this._state.profilePage.newPostText = action.newText;
            this._rerenderEntireTree(this._state);
        }
        else if(action.type===UPDATE_NEW_MESSAGE_BODY){
            this._state.dialogsPage.newMessageBody = action.body;
            this._rerenderEntireTree(this._state);
        }
        else if(action.type===SEND_MESSAGE){
            let body = this._state.dialogsPage.newMessageBody;
            this._state.dialogsPage.newMessageBody = '';
            this._state.dialogsPage.messages.push({id:6, message: body});
            this._rerenderEntireTree(this._state);
        }
    }
}
export const addPostActionCreator=()=>({type: ADD_POST});
export const updateNewPostTextActionCreator=(text)=>({type: UPDATE_NEW_POST_TEXT, newText: text});
export const sendMessageCreator=()=>({type: SEND_MESSAGE});
export const updateNewMessageBodyCreator=(body)=>({type: UPDATE_NEW_MESSAGE_BODY, body: body});

export default store;

window.store = store;