import AboutSection from '../components/AboutSection';
import ContactSection from '../components/ContactSection';
import FeaturedSection from '../components/FeatureSection';
import HeroSection from '../components/HeroSection';
import TeamSection from '../components/TeamSection';

const home = () => {
	return (
		<>
			<HeroSection />
			<AboutSection />
			<FeaturedSection />
			<TeamSection />
			<ContactSection />
		</>
	);
};

export default home;
