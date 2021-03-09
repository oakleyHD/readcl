import classes from "./Main.module.css";
import { Route } from "react-router-dom";
import Profile from "./Profile/Profile";
import Dialogs from "./Dialogs/Dialogs";
import News from "./News/News";
const Main = (props) => {
    return (
        <main className={`bg_container ${classes.main}`}>
            <Route exact path={["/","/profile"]} render={()=> <Profile />} />
            <Route path="/dialogs" render={()=> <Dialogs  />} />
            <Route path="/news" render={()=><News /> } />
        </main>
    )
}
export default Main;