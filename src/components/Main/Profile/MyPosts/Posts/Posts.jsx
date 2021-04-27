import { NavLink } from "react-router-dom";
import classes from "./Posts.module.css";


const Posts = (props)=>{
    return(
        <NavLink className={classes.post} to={`/profile/${props.id}`}>
            <div className={classes.messageShow}>
                {props.body}
               
            </div>
            <div className={classes.delBut}>
                <button >Delete</button>
            </div>
             
        </NavLink>
    )
}
export default Posts;