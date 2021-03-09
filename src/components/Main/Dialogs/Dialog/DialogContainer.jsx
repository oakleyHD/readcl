import DialogItems from "./DialogItems/DialogItems";
import Messages from "./Messages/Messages";
import {updateNewMessageBodyAC, sendMessageAC} from "../../../../redux/dialogReducer";
import Dialog from "./Dialog";

const DialogContainer = (props)=>{
    const state = props.store.getState();
    let dialogsElements = props.dialogsPage.dialogData.map(dialog=><DialogItems name={dialog.name} id={dialog.id}/>);
    let dialogMessages = props.dialogsPage.messages.map(mess=><Messages messages={mess.message } id={mess.id}  />);
    const onNewMessageChange = (event)=>{
          let body = event.target.value;
          props.dispatch(updateNewMessageBodyAC(body));
          
               
    };
    const onSendMessageClick = ()=>{
        props.dispatch(sendMessageAC());
    };
    return(
        <Dialog dialogData={state.initialState} newMessageBody={state.initialState.newMessageBody} onNewMessageChange={onNewMessageChange} onSendMessageClick={onSendMessageClick} />
    )
}