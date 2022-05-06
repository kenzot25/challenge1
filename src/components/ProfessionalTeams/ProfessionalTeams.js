import classes from './ProfessionalTeams.module.css';
import Fb from '../../images/Facebook.png';
import Tw from '../../images/Twitter.png';
import Ins from '../../images/Instagram.png'
import face1 from '../../images/unsplash_pTrhfmj2jDA.png'
import face2 from '../../images/unsplash_FVh_yqLR9eA.png'
import face3 from '../../images/unsplash_mEZ3PoFGs_k.png'
export function ProfessionalTeams() {
    return (
        <div className={classes.main}>
            <p className={classes.header}>Professional Teams</p>
            <h2 className={classes.slogan}>The Professional expert</h2>
            <p className={classes.description}>Lorem Ipsum is simply dummy text of the printing and typesetting
                industry.</p>
            <div className={classes.box}>
                <Card img={face1} description="Lorem ipsum dolor sit amet, consectetur adipiscing elit." name="Briyan Nevalli" title="Surgeon"/>
                <Card img={face2} description="Lorem ipsum dolor sit amet, consectetur adipiscing elit." name="Bella Sebastian" title="Demotologist"/>
                <Card img={face3} description="Lorem ipsum dolor sit amet, consectetur adipiscing elit." name="Lilly Adams" title="Stylist expert"/>
            </div>
        </div>
    )
}

function Card({img, title, name, description}) {
    return (
        <div className={classes.card}>
            <img src={img} alt={description} className={classes.img}/>
            <p className={classes.title}>{title}</p>
            <p className={classes.name}>{name}</p>
            <p className={classes.description}>{description}</p>
            <div className={classes.social}>
                <img className={classes.btn} src={Tw} alt="Twitter"/>
                <img className={classes.btn} src={Fb} alt="Facebook"/>
                <img className={classes.btn} src={Ins} alt="Instagram"/>
            </div>
        </div>
    )
}