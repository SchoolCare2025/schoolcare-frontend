import { Suspense } from "react";
import { SonnerToaster } from "./components/common";
import { Router } from "./router";
import AOS from "aos";
import "aos/dist/aos.css";

AOS.init();

function App() {
	return (
		<Suspense>
			<Router />

			<SonnerToaster />
		</Suspense>
	);
}

export default App;
