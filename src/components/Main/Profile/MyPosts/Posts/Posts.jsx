import { NavLink } from "react-router-dom";
import classes from "./Posts.module.css";


const Posts = (props)=>{
    return(
        <NavLink to={`/profile/${props.id}`}>
            <div className={classes.messageShow}>
                {props.post}
            </div>
        </NavLink>
    )
}
export default Posts;