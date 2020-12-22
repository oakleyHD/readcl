import classes from "./NavBar.module.css";

const NavBar = ()=> {
    return(
        <nav className={`bg_container ${classes.nav}`}>
         <ul>
          <li>Messages</li>
          <li>Friends</li>
          <li>Settings</li>
          <li>Shop</li>
        </ul>
        </nav>
    )
}
export default NavBar;