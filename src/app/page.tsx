import {HeroSection} from "./_ui/HeroSection";
import AboutSection from "./_ui/AboutSection";
import FounderSection from "./_ui/FounderSection";
import MenuSection from "./_ui/MenuSection";
import TeamSection from "./_ui/TeamSection";
import EventsSection from "./_ui/EventSection";
import LocationsMap from "./_ui/LocationsMap";
import FAQSection from "./_ui/FaqSection";
import Footer from "./_ui/FooterSection";

export default function Home() {
	return (
		<div>
			<HeroSection />
			<AboutSection />
			<FounderSection />
			<MenuSection />
			<TeamSection />
			<EventsSection />
			<LocationsMap />
			<FAQSection />
			<Footer />
		</div>
	);
}
