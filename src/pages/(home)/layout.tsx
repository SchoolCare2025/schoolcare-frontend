import { Outlet } from "react-router";
import { HeroSection } from "./-components/HeroSection";

function HomeLayout() {
	return (
		<div className="flex grow flex-col bg-[hsl(0,0%,98%)]">
			<HeroSection />
			<Outlet />
		</div>
	);
}

export default HomeLayout;
