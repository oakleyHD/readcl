import { NavLink } from "react-router-dom";
import classes from "./NavBar.module.css";

const NavBar = () => {
    return (
        <nav className={`bg_container ${classes.nav}`}>
            <ul className={classes.panel}>
                <li className={classes.panelItems}><NavLink activeClassName={classes.activeLink} to="/profile">Profile</NavLink></li>
                <li className={classes.panelItems}><NavLink activeClassName={classes.activeLink} to="/dialogs">Messages</NavLink></li>
                <li className={classes.panelItems}><NavLink activeClassName={classes.activeLink} to="/news">News</NavLink></li>
                <li className={classes.panelItems}><NavLink activeClassName={classes.activeLink} to="/users">Users</NavLink></li>
        </ul>
        </nav>
    )
}
export default NavBar;