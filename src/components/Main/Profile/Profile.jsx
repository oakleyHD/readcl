import classes from "./Profile.module.css";
import logo from "../../../images/logo.png";
import MyPostContainer from "./MyPosts/MyPostContainer";

const Profile = (props) => {
    return (
        <div className={classes.profile}>
            <div className={classes.editProfile}>
                <img src={logo} className={classes.profileLogo} />
                <h4>Username</h4>
               <br /><button className={classes.profileEditBut}>Edit Profile</button>
            </div>
             <MyPostContainer />
        </div>

    )
}

export default Profile;