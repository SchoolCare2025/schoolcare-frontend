export default {
	"*.{ts,tsx}": () => "pnpm lint:check-types",
	// eslint-disable-next-line perfectionist/sort-objects
	"*.{js,ts,tsx,mjs}": "pnpm lint:eslint",
};
