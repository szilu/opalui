const { version } = require("./package.json");

let plugins = [
	require("postcss-banner")({
		banner: `cl-ds.css v${version} | MIT License | https://github.com/szilu/cloudillo-ds`,
		important: true,
	}),
	require("postcss-import")({
		//plugins: [require("stylelint")({ fix: true, formatter: "compact" })],
	}),
	require("autoprefixer")(),
	require("postcss-reporter")({ clearReportedMessages: true }),
];

// if (process.env.NODE_ENV == 'production') plugins.push(require("postcss-csso"))
if (process.env.NODE_ENV == "production")
	plugins.push(
		require("cssnano")({
			preset: [require('cssnano-preset-default'), { calc: false }]
		})
		/*
		require("cssnano")({
			preset: "default",
			calc: false
		})
		*/
	);

module.exports = {
	plugins,
};

// vim: ts=4
