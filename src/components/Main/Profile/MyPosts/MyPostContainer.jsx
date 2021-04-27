import { connect } from "react-redux";
import { addPostAC, updateNewPTAC, setPost } from "../../../../redux/profileReducer";

import MyPosts from "./MyPosts";

const mapStateToProps = (state)=>{
    return {
        postData: state.profilePage.postData,
        newPostText: state.profilePage.newPostText,

    }
}

const MyPostContainer = connect(mapStateToProps, {addPostAC, updateNewPTAC, setPost})(MyPosts);
      

export default MyPostContainer;