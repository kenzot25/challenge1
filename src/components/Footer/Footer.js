import classes from './Footer.module.css';
import bg from '../../images/Footer BG 2.png'
import logo from '../../images/FooterLogo.png';
import Facebook from '../../images/facebook-f.png';
import Instagram from '../../images/instagram2.png'
import Twitter from '../../images/twitter (1).png'
import Linkedin from '../../images/linkedin-in.png'
import Youtube from '../../images/youtube.png'
export function Footer() {
    return(
        <div className={classes.main}>
            <img alt="" src={bg} className={classes.overlay} />
            <div className={classes.container}>
                <div className={classes.box}>
                    <div>
                        <img src={logo} alt=""/>
                        <p style={{margin: "1rem 0"}}><b>Beautice</b> is a beauty Clinic WordPess Theme.</p>
                        <p>Baker Street 101, NY, United States.</p>
                        <p>
                            <span>+521 569 8996.</span>
                            <u style={{marginLeft: "5rem"}}><i>mail@company.com.</i></u>
                        </p>
                    </div>
                    <div className={classes.navbox}>
                        <ul>
                            <p>Pages</p>
                            <li>Home</li>
                            <li>About</li>
                            <li>Services</li>
                            <li>Gallery</li>
                            <li>Team</li>
                        </ul>
                        <ul>
                            <p>Infomations</p>
                            <li>Terms & conditions</li>
                            <li>Privacy policy</li>
                            <li>Blog</li>
                            <li>Contact</li>

                        </ul>
                    </div>
                </div>
                <div className={classes.box}>
                    <div>
                        <img src={Facebook} alt="Facebook" className={classes.socialbtn}/>
                        <img src={Twitter} alt="Twitter" className={classes.socialbtn} />
                        <img src={Linkedin} alt="Linkedin" className={classes.socialbtn} />
                        <img src={Youtube} alt="Youtube" className={classes.socialbtn} />
                        <img src={Instagram} alt="Instagram" className={classes.socialbtn} />
                    </div>
                    <p>&copy; AltDesain Studio 2021 - All right reserved.</p>
                </div>
            </div>
        </div>
    )
}