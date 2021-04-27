
import {updateNewMessageBodyAC, sendMessageAC} from "../../../../redux/dialogReducer";
import Dialog from "./Dialog";
import { connect } from "react-redux";

const mapStateToProps = (state)=>{
    return {
        dialogData: state.dialogsPage.dialogData,
        messages:state.dialogsPage.messages,
        newMessageBody: state.dialogsPage.newMessageBody,
  
    }
}
const mapDispatchToProps = (dispatch)=>{
    return{
        onSendMessageClick(){
            let action = sendMessageAC();
            dispatch(action);
        },
        onNewMessageChange(text){
            let action = updateNewMessageBodyAC(text);
            dispatch(action);
        },
    }
}
const DialogContainer = connect(mapStateToProps, mapDispatchToProps)(Dialog);

export default DialogContainer;