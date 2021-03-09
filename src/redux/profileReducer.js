const ADD_POST = "ADD-POST";
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';

let innitialState = {
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
}

const profileReducer = (state = innitialState, action)=>{
    switch (action.type) {
        case ADD_POST:
            let newPost = {
                post: state.newPostText,
                id: state.postData[0].id + 1
            }
            state.postData.unshift(newPost);
            state.newPostText = '';
            return state;
        case UPDATE_NEW_POST_TEXT:
            state.newPostText = action.newPostText;
            return state;
        default:
            return state;
    } 
};

export const addPostAC = () => {
    return {
        type: ADD_POST,
    }


}
export const updateNewPTAC = (text) => {
    return {
        type: UPDATE_NEW_POST_TEXT,
        newPostText: text,
    }
}
export default profileReducer;






