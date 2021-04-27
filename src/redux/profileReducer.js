const ADD_POST = "ADD-POST";
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
const SET_USER_PROFILE = "SET_USER_PROFILE";
const SET_POST = "SET_POST";
const DELETE_POST = "DELETE_POST";

let innitialState = {
    newPostText: 'Hello World!',
    profile: null,
    postData: [],
}

const profileReducer = (state = innitialState, action) => {
    switch (action.type) {
        case ADD_POST:
            if (state.newPostText !== '') {
                
                return { ...state, postData: [ ...state.postData,action.post], newPostText: "" };
            }
            return state;


        case UPDATE_NEW_POST_TEXT:

            return { ...state, newPostText: action.newPostText };
        
        case SET_USER_PROFILE:
            return { ...state, profile: action.profile};
        case SET_POST:
            return{ ...state, postData: action.postData};
        default:
            return state;
    }

};



export const addPostAC = (post) => {
    return {
        type: ADD_POST,
        post: post,
    }


}
export const updateNewPTAC = (text) => {
    return {
        type: UPDATE_NEW_POST_TEXT,
        newPostText: text,
    }
}
export const setUserProfileAC = (profile)=>{
    return{
        type: SET_USER_PROFILE,
        profile,
    }
}
export const setPost = (postData)=>{
    return  {
        type: SET_POST,
        postData,
    }
}
export const deletePost = (id)=>{
    return{
        type: DELETE_POST,
        id,
    }
}

export default profileReducer;






