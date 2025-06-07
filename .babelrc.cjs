module.exports = {
	presets: [
		"@babel/preset-env",
		"@babel/preset-react",
		"@babel/preset-typescript",
	],
	plugins: [
		[
			"@stylexjs/babel-plugin",
			{
				dev: process.env.NODE_ENV !== "production",
				runtimeInjection: false,
				unstable_moduleResolution: {
					type: "commonJS",
					rootDir: __dirname,
				},
			},
		],
	],
};
