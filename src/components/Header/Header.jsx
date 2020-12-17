import classes from "./Header.module.css";


const Header = () => {
    return (

        <header className={classes.header}>
            <ul className="headerItems">
                <li className="headerLi">Home</li>
                <li className="headerLi">Gallery</li>
                <li className="headerLi">News</li>
                <li className="headerLi">Friends</li>
            </ul>
            <ul className="account">
                <li className="accLi">Sign In</li>
                <li className="accLi">Sign Up</li>
            </ul>
        </header>
    )
} 

export default Header;