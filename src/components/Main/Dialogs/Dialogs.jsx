import classes from "./Dialogs.module.css";
import Dialog from "./Dialog/Dialog";
import DialogContainer from "./Dialog/DialogContainer";

const Dialogs = (props) => {
    return (
        <div className={classes.dialogs}>
           <DialogContainer store={props.store} />
        </div>
    )
}

export default Dialogs;