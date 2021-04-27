const FOLLOW = "FOLLOW";
const UNFOLLOW = "UNFOLLOW";
const SET_USERS = "SET_USERS";

let innitialState = {
    users:[],
    
}
const usersReducer = (state = innitialState, action)=>{
    switch (action.type){
        case FOLLOW:
            return state;
        case UNFOLLOW:
            return state;
        case SET_USERS:
            return {
                ...state,
                users:[...state.users, ...action.users]
            }
        default:
            return state;
    }
}

export const setUsers  = (users)=>({type:SET_USERS, users})
export default usersReducer;