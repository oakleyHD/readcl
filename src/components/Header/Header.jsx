import classes from "./Header.module.css";
import logo from "../../images/logo.png";
import set from "../../images/set.png";


const Header = () => {
    return (

        <header className={`bg_container ${classes.header}`}>
            <div className={classes.headerItems}>
            <img className={classes.logo} src={logo} />
            <input className={classes.search} type="text" placeholder="Поиск..." />
            <img className={classes.settingsLogo} src={set} />
            </div>
            
        </header>
    )
} 

export default Header;