import Posts from "./Posts/Posts";
import classes from "./MyPosts.module.css";
import logo from "../../../../images/logo.png";
import React from "react";
import { addPostAC, updateNewPTAC } from "../../../../redux/profileReducer";


const MyPosts = (props) => {
    const onNewMessageCh = (event) => {
        let text = event.target.value;
        props.onNewMessageCh(text);


    }
    // let newPost = React.createRef();
    // const newPostChange = () => {
    //     let text = newPost.current.value;
    //     let action = updateNewPTAC(text);
    //     props.dispatch(action);
    // }
    const addMessage = () => {
        props.addMessage();
    };
    let postElements = props.postData.map((i) => <Posts post={i.post} id={i.id} />);

    return (
        <div>
            <div className={classes.message} >
                <img className={classes.msAvatar} src={logo}></img>
                <textarea cols="60" rows="3" className={classes.messageSend} onChange={onNewMessageCh} value={props.newPostText} />
                <button className={classes.submit} onClick={addMessage}>Submit</button>
            </div>
            <div>
                {postElements}
            </div>
        </div>
    )
}
export default MyPosts;