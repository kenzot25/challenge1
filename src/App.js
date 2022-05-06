import {HeroSection} from "./components/HeaderSection/HeaderSection";
import {MainServices} from "./components/MainServices/MainServices";
import {AboutUs} from "./components/AboutUs/AboutUs";
import {ProfessionalTeams} from "./components/ProfessionalTeams/ProfessionalTeams";
import {ContactUs} from "./components/ContactUs/ContactUs";
import {Footer} from "./components/Footer/Footer";


function App() {
    return (
        //  First Section
        <>
            <HeroSection/>
            <div className="middleBG">
                <MainServices/>
                <AboutUs/>
            </div>
            <div className="bottomBG">
                <ProfessionalTeams/>
                <ContactUs/>
            </div>
            <Footer />
        </>
    );
}

export default App;
