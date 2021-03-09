import { addPostAC, updateNewPTAC } from "../../../../redux/profileReducer";
import storeContext from "../../../../storeContext";
import MyPosts from "./MyPosts";

const MyPostContainer = () => {
    return (
        <storeContext.Consumer >
            {
                (store) => {
                    const state = store.getState();
                    const addMessage = () => {
                        if (state.profilePage.newPostText != '') {
                            let action = addPostAC();
                            store.dispatch(action);
                        }
                    };
                    const onNewMessageCh = (text) => {
                        let action = updateNewPTAC(text);
                        store.dispatch(action);


                    };
                    return (
                        <MyPosts postData={state.profilePage.postData} newPostText={state.profilePage.newPostText} addMessage={addMessage} onNewMessageCh={onNewMessageCh} />
                    )
                }
            }
        </storeContext.Consumer>
    )

}

export default MyPostContainer;