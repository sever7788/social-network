import profileReducer from "./profile-reducer";
import dialogsReducer from "./dialogs-reducer";
import sidebarReducer from "./sidebar-reducer";

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
        },
        sidebar:{

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
        this._state.profilePage = profileReducer(this._state.profilePage, action);
        this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action);
        this._state.sidebar = sidebarReducer(this._state.sidebar, action);
        this._rerenderEntireTree(this._state);
    }
}


export default store;

window.store = store;