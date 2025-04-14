import AOS from "aos";
import "aos/dist/aos.css";
import { SonnerToaster } from "./components/common";
import { Router } from "./router";

AOS.init();

function App() {
	return (
		<>
			<Router />

			<SonnerToaster />
		</>
	);
}

export default App;
