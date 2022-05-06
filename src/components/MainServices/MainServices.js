import classes from './MainServices.module.css'
import img1 from '../../images/Animation1.png'
import img2 from '../../images/Animation2.png'
import img3 from '../../images/Animation3.png'

export function MainServices() {
    return (
        <div className={classes.main}>
            <h2 className={classes.header}>Main Services</h2>
            <p className={classes.slogan}>Learn services to focus <br/>on your beauty</p>
            <p className={classes.description}>Porta rhoncus arci condimentum vitae lobortis eu dignissim non massa. Non
                parturient amet, feugiat tellus saggitis, sceleirsque eget nulla turpis.
            </p>
            <div className={classes.box}>
                <Card title="Beauty consultstion" img={img1}
                      description="Non eros molestie, luctus velit nec, vulputate leo. Praesent vel interdum nisi."></Card>
                <Card title="Skin treatments" img={img2}
                      description="Non eros molestie, luctus velit nec, vulputate leo. Praesent vel interdum nisi."></Card>
                <Card title="Beauty product" img={img3}
                      description="Non eros molestie, luctus velit nec, vulputate leo. Praesent vel interdum nisi."></Card>
            </div>
        </div>
    )
}

function Card({img, title, description}) {
    return (
        <div className={classes.card}>
            <img src={img} alt=""/>
            <p className={classes.card_title}>{title}</p>
            <p className={classes.card_description}>{description}</p>
        </div>
    )
}