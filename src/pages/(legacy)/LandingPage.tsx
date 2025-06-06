import AboutUs from "./AboutUs";
import Blog from "./Blog";
import FeaturedSchools from "./FeaturedSchools";
import Homepage from "./Homepage";
import Services from "./Services";
import Testimonials from "./Testimonials";
import Registered from "./registered";

const LandingPage = () => {
	return (
		<div>
			<Homepage />
			<Registered />
			<AboutUs variant="home" />
			<Services />
			<Testimonials />
			<FeaturedSchools />
			<Blog />
		</div>
	);
};
export default LandingPage;
