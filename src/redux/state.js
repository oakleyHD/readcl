import dialogReducer from "./dialogReducer";
import profileReducer from "./profileReducer";


const store = {
    _state: {
        profilePage: {
            newPostText: 'Hello World!',
            postData: [
                { post: "Hello", id: 11 },
                { post: "Hello, world!", id: 10 },
                { post: "Bye", id: 9 },
                { post: "Apple", id: 8 },
                { post: "Hello", id: 7 },
                { post: "Hello, world!", id: 6 },
                { post: "Bye", id: 5 },
                { post: "Apple", id: 4 },
                { post: "Hello", id: 3 },
                { post: "Hello, world!", id: 2 },
                { post: "Bye", id: 1 },
                { post: "Apple", id: 0 },
            ],
        },
        dialogsPage: {
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


    },
    _callSubscriber() {
        console.log('');
    },
    subscribe(observer) {
        this._callSubscriber = observer;
    },
    getState() {
        return this._state;
    },
    dispatch(action) {
        this._state.profilePage = profileReducer(this._state.profilePage, action);
        this._state.dialogsPage = dialogReducer(this._state.dialogsPage, action);
        this._callSubscriber(this._state);
    },


}


// export default store;

// window.store = store;
