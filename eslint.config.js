import { zayne } from "@zayne-labs/eslint-config";

export default zayne({
	ignores: ["src/**/*.jsx"],
	react: true,
	tailwindcssBetter: true,
	tanstack: {
		query: true,
	},
	typescript: {
		tsconfigPath: "tsconfig.json",
	},
});
