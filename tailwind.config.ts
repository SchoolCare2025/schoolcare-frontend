/* eslint-disable perfectionist/sort-objects */
import type { Config } from "tailwindcss";

const config = {
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
	theme: {
		screens: {
			lg: "1000px",
			md: "768px",
			sm: "480px",
			sxl: "1200px",
			xl: "1440px",
		},

		extend: {
			fontFamily: {
				montserrat: ["Montserrat", "sans-serif"],
				inter: ["Inter", "sans-serif"],
			},

			borderRadius: {
				full: "50%",
			},

			colors: {
				school: {
					blue: "var(--color-blue)",
				},

				bgColor: "#04427B",
				bgTestimonials: {
					65: "rgba(4, 58, 123, 0.65)",
					DEFAULT: "#04427B",
				},
				borderBottom1: "#FFC3F2",
				borderBottom2: "#9CDBFF",
				borderBottom3: "#E9ACFF",
				borderBottom4: "#FF6D6D",
				cosBlue: "#028DDB",
				cosBorder: "#FFCCF4",
				cosInputText: "#B2AEAE",
				cosWhite: "#F8F8F8",
				footerBg: "#E8E8E8",
				greenColor: "#008000",
				hoverBtnColor: {
					75: "rgba(rgba(2, 141, 219, 1)",
				},
				inputColors: "#F0F0F0",
				optionsColor: "#6C6B6C",
				resultBtn: "#FF59BD",
				slitePlink: "#E0F4FF",
				starColor: "#FF9900",
				testiFont: "#212121",
				textWhite: "#FFFFFF",
			},
		},
	},
} satisfies Config;

export default config;
