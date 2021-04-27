const SEND_MESSAGE = "SEND_MESSAGE";
const UPDATE_NEW_MESSAGE_BODY = "UPDATE_NEW_MESSAGE_BODY";

let initialState = {
    newMessageBody: '',
    dialogData: [
        { name: 'Vasya', id: 7, },
        { name: 'Masha', id: 6, },
        { name: 'Alex', id: 5, },
        { name: 'Paul', id: 4, },
        { name: 'Petya', id: 3, },
        { name: 'Igor', id: 2, },
        { name: 'Stas', id: 1, },
        { name: 'Vlad', id: 0, },
    ],
    messages: [
        { message: 'Hello', id: 8 },
        { message: 'Hello, world', id: 7 },
        { message: 'Bye', id: 6 },
        { message: 'Hi', id: 5 },
        { message: 'hey', id: 4 },
        { message: 'Goodbye', id: 3 },
        { message: 'ok', id: 2 },
        { message: 'message', id: 1 },
    ],
}





const dialogReducer = (state = initialState, action) => {
    switch (action.type) {
        case SEND_MESSAGE:
            if (state.newMessageBody !== "") {
                let newMessage = {
                    message: state.newMessageBody,
                    id: state.messages[0].id + 1
                };
                return { ...state, messages: [...state.messages,newMessage ], newMessageBody: "" }
            }
            return state;
        case UPDATE_NEW_MESSAGE_BODY:
            return { ...state, newMessageBody: action.newMessageBody };
        default:
            return state;

    }
}


export const sendMessageAC = () => {
    return {
        type: SEND_MESSAGE,
    }


}
export const updateNewMessageBodyAC = (body) => {
    return {
        type: UPDATE_NEW_MESSAGE_BODY,
        newMessageBody: body,
    }
}

export default dialogReducer;