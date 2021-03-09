import classes from "./Dialog.module.css";
import DialogItems from "./DialogItems/DialogItems";
import Messages from "./Messages/Messages";
// import {updateNewMessageBodyAC, sendMessageAC} from "../../../../redux/dialogReducer";


const Dialog = (props)=>{
    let dialogsElements = props.dialogsPage.dialogData.map(dialog=><DialogItems name={dialog.name} id={dialog.id}/>);
    let dialogMessages = props.dialogsPage.messages.map(mess=><Messages messages={mess.message } id={mess.id}  />);
    // const onNewMessageChange = (event)=>{
    //       let body = event.target.value;
    //       props.dispatch(updateNewMessageBodyAC(body));
          
               
    // }
    // const onSendMessageClick = ()=>{
    //     props.dispatch(sendMessageAC());
    // }
    return(
       <div className={classes.dialog}>
         <div>
             {dialogsElements}
             
         </div>
         <div>
            {dialogMessages}
            <div>
              <textarea value={props.state.initialState.newMessageBody} onChange={props.onNewMessageChange}></textarea><br />
              <button onClick={props.onSendMessageClick}>Send</button>
            </div>
         </div>
         
         
       </div>
    )
}

export default Dialog;