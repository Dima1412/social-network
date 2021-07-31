import profileReducer from "./profile-reducer";
import dialogsReducer from "./dialogs-reducer";
import sidebarReducer from "./sidebar-reducer";


let store = {
  _state: {
    profilePage: {
      posts: [
        { id: 1, message: "I love you", likesCount: 5 },
        { id: 2, message: "I hate you", likesCount: 8 },
        { id: 3, message: "I fuck you", likesCount: 13 },
        { id: 4, message: "I love you", likesCount: 0 },
        { id: 5, message: "I hate you", likesCount: 111 },
      ],
      newPostText: 'fuckyou'
    },
    dialogsPage: {
      dialogs: [
        { id: 1, name: "Dimon" },
        { id: 2, name: "Korgikkk" },
        { id: 3, name: "Santella" },
        { id: 4, name: "Eugine" },
        { id: 5, name: "VityaGanstaaaa" },
      ],
  
      messages: [
        { id: 1, message: "yo" },
        { id: 2, message: "yoyoyo" },
        { id: 3, message: "i am a ganstaaa shit" },
        { id: 4, message: "fuck you motherfucker" },
        { id: 5, message: "peace of shit" },
      ],

      NewMessageBody: ''
    },
    sidebar: {}
  },  
  _callSubscriber() {
    console.log('State is changed')
  },

  getState() {
    return this._state;
  },
  subscribe(observer) {
    this._callSubscriber = observer;
  },

  dispatch(action) {

    this._state.profilePage=profileReducer(this._state.profilePage, action);
    this._state.dialogsPage=dialogsReducer(this._state.dialogsPage, action);
    this._state.sidebar=sidebarReducer(this._state.sidebar, action);

    this._callSubscriber(this._state);
  }
};


export default store;
window.store = store;