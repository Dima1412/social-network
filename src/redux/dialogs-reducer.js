const SEND_MESSAGE = "SEND-MESSAGE";

let initialState = {
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
  ]
};

const dialogsReducer = (state=initialState, action) => {
  switch (action.type) {
    case SEND_MESSAGE: 
    let body = { id: 6, message: action.newMessageBody };
    return {
      ...state,
      messages: [...state.messages, body]
    };
    default:
      return state;
  };
};


export const sendMessageCreator = (newMessageBody) => ({ type: SEND_MESSAGE, newMessageBody });

export default dialogsReducer;
