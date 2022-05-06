import {Navbar} from "./Navbar";
import {Hero} from "./Hero";

import classes from "./HeroSection.module.css";



export function HeroSection() {
    return (
        <>
            <div className={classes.heroSection}>
                <Navbar/>
                <Hero/>
            </div>
            <div className={classes.pagnigator}>
                <button></button>
                <button className={classes.active}></button>
                <button></button>
            </div>
        </>

    )
}