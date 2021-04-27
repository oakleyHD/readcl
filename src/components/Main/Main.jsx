import classes from "./Main.module.css";
import { Route } from "react-router-dom";
import Dialogs from "./Dialogs/Dialogs";
import News from "./News/News";
import UsersContainer from "./Users/UsersContainer";
import ProfileContainer from "./Profile/ProfileContainer";
const Main = (props) => {
    return (
        <main className={`bg_container ${classes.main}`}>
            <Route path='/profile/:userId?' render={()=> <ProfileContainer />} />
            <Route path="/dialogs" render={()=> <Dialogs  />} />
            <Route path="/news" render={()=><News /> } />
            <Route path="/users" render={()=> <UsersContainer />} />
        </main>
    )
}
export default Main;