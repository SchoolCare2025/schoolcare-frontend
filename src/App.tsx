import { Suspense } from "react";
import { SonnerToaster } from "./components/common";
import { Router } from "./router";

function App() {
	return (
		<Suspense>
			<Router />

			<SonnerToaster />
		</Suspense>
	);
}

export default App;
