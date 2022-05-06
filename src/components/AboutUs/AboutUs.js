import classes from './AboutUs.module.css'
import vid from '../../images/unsplash_LRXYS0tSyGc.png';
import playBTN from '../../images/playbtn.svg'

export function AboutUs() {
    return (
        <div className={classes.main}>
            {/*<div className={classes.box}>*/}
            <div className={classes.info}>
                <p className={classes.header}>About Us</p>
                <h2 className={classes.slogan}>We are the best beauty clinic</h2>
                <p className={classes.description}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi cursus
                    venenatis quam scelerisque sodales. Morbi turpis odio, vulputate sed dapibus sit amet, interdum quis
                    leo. Suspendisse potenti. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per
                    inceptos himenaeos. <br/><br/> Donec maximus lectus at convallis suscipit. Nullam venenatis
                    scelerisque mi ut
                    gravida. Nam vitae diam est.
                </p>
                <div className={classes.box_btns}>
                    <button className={classes.btn}>Learn More</button>
                    <button className={classes.btn_second}>
                        <img src={playBTN} alt="" className={classes.playbtn}/>
                        <p>Watch video</p>
                    </button>
                </div>
            </div>
            <img className={classes.img} alt="" src={vid}/>
            {/*</div>*/}
        </div>
    )
}