import HeroSection from '../components/HeroSection';
import AboutSection from '../components/AboutSection';
import TeamSection from '../components/TeamSection';
import ContactSection from '../components/ContactSection';
import FeaturedSection from '../components/FeatureSection';

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
