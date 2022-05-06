import classes from './ContactUs.module.css';
import contactIMG from '../../images/Contact Animations.png'
export function ContactUs() {
    const submitHandler = (e) =>{
        e.preventDefault()
    }
    return (
        <div className={classes.main}>
            <img className={classes.img} src={contactIMG} alt=""/>
            <div>
                <p className={classes.header}>Contact Us</p>
                <h2 className={classes.slogan}>Send your inquiry to <br />our expert team</h2>
                <p className={classes.description}>Quisque posuere id turpis ac malesuada.</p>
                <form onSubmit={submitHandler} className={classes.form}>
                    <div>
                        <input className={classes.shortFiled} type="text" placeholder="First Name"/>
                        <input type="text" placeholder="Last Name"/>
                    </div>
                    <input  type="text" placeholder="Email address" />
                    <input type="text" placeholder="Subject message" />
                    <input className={classes.inquiry} placeholder="Your inquiry here"  />
                </form>
                <button className={classes.btn} onClick={submitHandler}>Send Message</button>
            </div>
        </div>
    )
}