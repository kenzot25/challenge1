import classes from "./Hero.module.css"
import mainIMG from '../../images/Frame 1.png'

export function Hero() {
    return (
        <div className={classes.hero}>
            <div className={classes.box}>
                <h1 className={classes.title}>Clinic & beauty <br/> consultant</h1>
                <p className={classes.description}>It is a long established fact that a reader will be by the readable content of a page.</p>
                <button className={classes.btn}>More Details</button>
            </div>
            <img className={classes.img} src={mainIMG} alt="" />

        </div>
    )

}