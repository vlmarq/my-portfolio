module.exports = {
	mode: "jit",
	purge: ["./public/index.html", "./src/**/*.{js,jsx,ts,tsx,vue}"],
	darkMode: false, // or 'media' or 'class'
	theme: {
		extend: {
			backgroundImage: {
				"gradient-conic": "conic-gradient(var(--tw-gradient-stops))",
				"gradient-conic-t": "conic-gradient(at top, var(--tw-gradient-stops))",
				"gradient-conic-r":
					"conic-gradient(at right, var(--tw-gradient-stops))",
				"gradient-conic-b":
					"conic-gradient(at bottom, var(--tw-gradient-stops))",
				"gradient-conic-l": "conic-gradient(at left, var(--tw-gradient-stops))",
				"gradient-conic-tr":
					"conic-gradient(at top right, var(--tw-gradient-stops))",
				"gradient-conic-tl":
					"conic-gradient(at top left, var(--tw-gradient-stops))",
				"gradient-conic-br":
					"conic-gradient(at bottom right, var(--tw-gradient-stops))",
				"gradient-conic-bl":
					"conic-gradient(at bottom left, var(--tw-gradient-stops))",
			},
		},
	},
	variants: {
		extend: {},
	},
	plugins: [],
};
