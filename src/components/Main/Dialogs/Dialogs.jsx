import classes from "./Dialogs.module.css";
import Dialog from "./Dialog/Dialog";
import MyPostContainer from "../Profile/MyPosts/MyPostContainer";

const Dialogs = (props) => {
    return (
        <div className={classes.dialogs}>
           <MyPostContainer store={props.store} />
        </div>
    )
}

export default Dialogs;