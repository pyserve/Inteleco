import Navbar from "./components/navbar";
import Banner from "./components/banner";
import Welcome from "./components/welcome";
import AIConsultant from "./components/ai-consultant";
import Applications from "./components/applications";
import TechnologyStacks from "./components/technologyStacks";
import EventResource from "./components/eventResource";
import GetInTouch from "./components/getinTouch";
import AddressMap from "./components/addressMap";
import Footer from "./components/footer";

export default function Home() {
  return (
    <div className="">
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
  );
}
