import EnhancedExp from "./components/EnhancedExp";
import FeaturedIn from "./components/FeaturedIn";
import Features from "./components/Features";
import Footer from "./components/Footer";
import Interface from "./components/Interface";
import PersonalizedExp from "./components/PersonalizedExp";
import Section from "./components/Section";
import TeamSupport from "./components/TeamSupport";
import TwitterCards from "./components/TwitterCards";

function App() {
	return (
		<>
			<Section background="gray">
				<PersonalizedExp />
			</Section>

			<Section>
				<EnhancedExp />
			</Section>

			<Section>
				<Interface />
			</Section>

			<Section background="gray">
				<Features />
			</Section>

			<Section>
				<TwitterCards />
			</Section>

			<Section background="gray">
				<FeaturedIn />
			</Section>

			<Section>
				<TeamSupport />
			</Section>

			<Section background="brand">
				<Footer />
			</Section>
		</>
	);
}

export default App;
