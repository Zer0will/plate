import type {Config} from "tailwindcss";
import plugin from "tailwindcss/plugin";

export default {
	darkMode: ["class"],
	content: ["./src/pages/**/*.{js,ts,jsx,tsx,mdx}", "./src/components/**/*.{js,ts,jsx,tsx,mdx}", "./src/app/**/*.{js,ts,jsx,tsx,mdx}"],
	theme: {
		extend: {
			fontFamily: {
				poppins: ["var(--font-poppins)"],

				gilroy: ["var(--font-gilroy)"],
			},
			container: {
				center: true,
				padding: "1rem",
				screens: {
					xl: "1260px",
				},
			},
			colors: {
				background: "hsl(var(--background))",
				foreground: "hsl(var(--foreground))",
				card: {
					DEFAULT: "hsl(var(--card))",
					foreground: "hsl(var(--card-foreground))",
				},
				popover: {
					DEFAULT: "hsl(var(--popover))",
					foreground: "hsl(var(--popover-foreground))",
				},
				primary: {
					DEFAULT: "hsl(var(--primary))",
					foreground: "hsl(var(--primary-foreground))",
				},
				secondary: {
					DEFAULT: "hsl(var(--secondary))",
					foreground: "hsl(var(--secondary-foreground))",
				},
				muted: {
					DEFAULT: "hsl(var(--muted))",
					foreground: "hsl(var(--muted-foreground))",
				},
				accent: {
					DEFAULT: "hsl(var(--accent))",
					foreground: "hsl(var(--accent-foreground))",
				},
				destructive: {
					DEFAULT: "hsl(var(--destructive))",
					foreground: "hsl(var(--destructive-foreground))",
				},
				border: "hsl(var(--border))",
				input: "hsl(var(--input))",
				ring: "hsl(var(--ring))",
				chart: {
					"1": "hsl(var(--chart-1))",
					"2": "hsl(var(--chart-2))",
					"3": "hsl(var(--chart-3))",
					"4": "hsl(var(--chart-4))",
					"5": "hsl(var(--chart-5))",
				},
			},
			borderRadius: {
				lg: "var(--radius)",
				md: "calc(var(--radius) - 2px)",
				sm: "calc(var(--radius) - 4px)",
			},
			keyframes: {
				"accordion-down": {
					from: {
						height: "0",
					},
					to: {
						height: "var(--radix-accordion-content-height)",
					},
				},
				"accordion-up": {
					from: {
						height: "var(--radix-accordion-content-height)",
					},
					to: {
						height: "0",
					},
				},
			},
			animation: {
				"accordion-down": "accordion-down 0.2s ease-out",
				"accordion-up": "accordion-up 0.2s ease-out",
			},
			backgroundImage: {
				"bg-image": "url('/icons/hole-bg.svg')",
			},
		},
	},
	plugins: [
		require("tailwindcss-animate"),
		plugin(function ({addUtilities}) {
			const utilities = {
				/* Headings */
				".h1": {
					fontSize: "46px",

					fontWeight: "400",
					"@screen lg": {
						fontSize: "72px",
					},
					"@screen 2xl": {
						fontSize: "80px",
					},
				},

				".h2": {
					fontSize: "44px",
					fontWeight: "700",
					textTransform: "uppercase",
					"@screen lg": {
						fontSize: "66px",
					},
					"@screen 2xl": {
						fontSize: "76px",
					},
				},
				".h3": {
					fontSize: "24px",
					textTransform: "uppercase",
					fontWeight: "700",
					"@screen md": {
						fontSize: "32px",
					},
					"@screen lg": {
						fontSize: "44px",
					},
				},
				".h4": {
					fontSize: "28px",
					fontWeight: "400",
				},
				".h5": {
					fontSize: "26px",
					fontWeight: "500",
					lineHeight: "108%",
				},
				".h6": {
					fontSize: "20px",
					fontWeight: "300",
					"@screen md": {
						fontSize: "22px",
					},
				},
				".h7": {
					fontSize: "12px",
					fontWeight: "300",
					"@screen md": {
						fontSize: "16px",
					},
					"@screen lg": {
						fontSize: "20px",
						fontWeight: "400",
					},
				},
				".h8": {
					fontSize: "16px",
					fontWeight: "300",
					"@screen md": {
						fontSize: "18px",
					},
				},

				".h9": {
					fontSize: "14px",
					fontWeight: "500",
					"@screen md": {
						fontSize: "16px",
					},
				},
			};

			addUtilities(utilities);
		}),
	],
} satisfies Config;
