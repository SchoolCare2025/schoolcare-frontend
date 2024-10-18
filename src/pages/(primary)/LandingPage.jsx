import React from "react";
import AboutUs from "./AboutUs";
import Blog from "./Blog";
import FeaturedSchools from "./FeaturedSchools";
import Homepage from "./Homepage";
import Services from "./Services";
import Testimonials from "./Testinonials";
import Registered from "./registered";

const LandingPage = () => {
	return (
		<div>
			<Homepage />
			<Registered />
			<AboutUs />
			<Services />
			<Testimonials />
			<FeaturedSchools />
			<Blog />
		</div>
	);
};
export default LandingPage;
