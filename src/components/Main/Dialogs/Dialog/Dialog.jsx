import classes from "./Dialog.module.css";
import DialogItems from "./DialogItems/DialogItems";
import Messages from "./Messages/Messages";
// import {updateNewMessageBodyAC, sendMessageAC} from "../../../../redux/dialogReducer";


const Dialog = (props)=>{
    const onNewMessageChange= (e)=>{
      let text = e.target.value;
      props.onNewMessageChange(text);
    }
    const onSendMessageClick =()=>{
          props.onSendMessageClick();
    }
    let dialogsElements = props.dialogData.map(dialog=><DialogItems name={dialog.name} id={dialog.id}/>);
    let dialogMessages = props.messages.map(mess=><Messages messages={mess.message } id={mess.id}  />);
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
              <textarea value={props.newMessageBody} onChange={onNewMessageChange}></textarea><br />
              <button onClick={onSendMessageClick}>Send</button>
            </div>
         </div>
         
         
       </div>
    )
}

export default Dialog;