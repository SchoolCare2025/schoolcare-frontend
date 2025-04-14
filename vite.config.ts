import tailwindcss from "@tailwindcss/vite";
import react from "@vitejs/plugin-react-swc";
import { defineConfig } from "vite";
import viteTsconfigPaths from "vite-tsconfig-paths";

// https://vitejs.dev/config/

export default defineConfig({
	plugins: [viteTsconfigPaths(), react(), tailwindcss()],
	server: {
		// proxy: {
		// 	"/api": {
		// 		changeOrigin: true,
		// 		target: "https://api.schoolcare.com.ng",
		// 	},
		// },
	},
});
