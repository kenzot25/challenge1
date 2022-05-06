import classes from './Navbar.module.css'
// import logo from '../../images/FooterLogo.png'\
import  logo from '../../images/Main Logo.svg'
export function Navbar() {
    return (
        <div className={classes.navbar}>
            <img className={classes.logo} alt="logo" src={logo}/>
            <div className={classes.navlink}>
                <p className={classes.navactive}>Home +</p>
                <p>About</p>
                <p>Service</p>
                <p>Gallery</p>
                <p>Blog</p>
                <button className={classes.btn}>Contact</button>
            </div>
        </div>
    )

}