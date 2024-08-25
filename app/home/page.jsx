import Navbar from "./navbar";
import Banner from "./banner";
import Welcome from "./welcome";
import AIConsultant from "./ai-consultant";
import Applications from "../services/applications";
import TechnologyStacks from "./technologyStacks";
import EventResource from "./eventResource";
import GetInTouch from "./getinTouch";
import AddressMap from "./addressMap";
import Footer from "./footer";

export default function HomePage(){
    return(
        <div>
            <Navbar />
            <Banner />
            <Welcome />
            <AIConsultant />
            <Applications />
            <TechnologyStacks />
            <EventResource />
            <GetInTouch />
            <AddressMap />
            <Footer />
        </div>
    )
}