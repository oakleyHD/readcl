import classes from "./Profile.module.css";

import MyPostContainer from "./MyPosts/MyPostContainer";
import Preloader from "./PrPreloader";

const Profile = (props) => {
    if(!props.profile) return <Preloader />
    return (
        <div className={classes.profile}>
            <div className={classes.editProfile}>
                <div>
                    <img src={props.profile.url} className={classes.profileLogo} />
                </div>
                <div>
                    <h4 className={classes.editProfile__userName}>Username</h4>
                    <div className={classes.profileEditBut}>Hello World!</div>
               </div>
                
            </div>
             <MyPostContainer />
        </div>

    )
}

export default Profile;