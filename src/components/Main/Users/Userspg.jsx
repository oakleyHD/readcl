import axios from "axios";
import { useEffect } from "react";
import { NavLink } from "react-router-dom";
import classes from "./Userspg.module.css"

const Userspg = (props) => {
    useEffect(() => {
        if (props.users.length == 0) {
            axios.get("https://jsonplaceholder.typicode.com/users")
                .then((response) => {
                    props.setUsers(response.data);
                })


        }
    }, []);
    let userData = props.users.map(u => {
        return (
            <div key={u.id} class={classes.userInfo}>
                <div className={classes.info}>
                    <NavLink to={`/profile/${u.id}`}>
                        <span className={classes.userName}>{u.name}</span>
                        <br />
                        <span className={classes.userEmail}>{u.email}</span>
                        <br />
                        <span className={classes.userAdress}>{u.address.city}</span>
                        <br />
                        <span className={classes.userPhone}>{u.phone}</span>
                        <br />
                        <span className={classes.userComp}>{u.company.name}</span>
                        <br />
                    </NavLink>
                </div>
                <div>
                    <button className={classes.buttonUs}>Follow</button>
                </div>
            </div>
        )
    });
    return (
        <div className={classes.userspg}>
            {userData}
        </div>
    )
}

export default Userspg;