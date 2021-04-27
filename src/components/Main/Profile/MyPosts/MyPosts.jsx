import Posts from "./Posts/Posts";
import classes from "./MyPosts.module.css";
import logo from "../../../../images/logo.png";
import React from "react";
import axios from "axios";
import { useEffect } from "react";




const MyPosts = (props) => {
    const onNewMessageCh = (event) => {

        let text = event.target.value;

        props.updateNewPTAC(text);


    }

    useEffect(() => {
        if (props.postData.length == 0) {
            axios.get("https://jsonplaceholder.typicode.com/posts")
                .then((response) => {
                    props.setPost(response.data);
                })


        }
    }, []);
    // let newPost = React.createRef();
    // const newPostChange = () => {
    //     let text = newPost.current.value;
    //     let action = updateNewPTAC(text);
    //     props.dispatch(action);
    // }
    /* const addMessage = () => {
        fetch('https://jsonplaceholder.typicode.com/posts', {
            method: 'POST',
            body: JSON.stringify({
                title: props.newPostText,
                body: props.newPostText,
                userId: props.postData[props.postData.length -1].id+1,
                id: props.postData[props.postData.length -1].id+1,
            }),
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            },
        })
            .then((response) => response.json())
            .then((postData) => props.addPostAC(postData));
    }; */
    const addMessage = () => {
        axios.post('https://jsonplaceholder.typicode.com/posts', {
            body: JSON.stringify({
                title: props.newPostText,
                body: props.newPostText,
                userId: props.postData[props.postData.length -1].id+1,
                id: props.postData[props.postData.length -1].id+1,
            }),
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            },
        })
            
            .then((response) => JSON.parse(response.data.body))
            .then((post) => props.addPostAC(post));
            
            
    };
    const deletePost = (id)=>{
        
    }


    let postElements = props.postData.map((i) => <Posts body={i.body} id={i.id} key={i.id} />).reverse();

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