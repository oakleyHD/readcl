import classes from "./NavBar.module.css";

const NavBar = ()=> {
    return(
        <nav className={`bg_container ${classes.nav}`}>
         <ul className={classes.panel}>
          <li className={classes.panelItems}><a href="#">Messages</a></li>
          <li className={classes.panelItems}><a href="#">Friends</a></li>
          <li className={classes.panelItems}><a href="#">Settings</a></li>
          <li className={classes.panelItems}><a href="#">Shop</a></li>
        </ul>
        </nav>
    )
}
export default NavBar;