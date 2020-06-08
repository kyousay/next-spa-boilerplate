const path = require('path');

module.exports = {
	stories: ['../src/**/__stories__/*.stories.tsx'],
	addons: ['@storybook/addon-actions', '@storybook/addon-links'],

	webpackFinal: async config => {
		config.module.rules.push({
			test: /\.(ts|tsx)$/,
			include: [
				path.resolve(__dirname, '../src/components'),
			],
			use: [
				{
					loader: 'babel-loader',
					options: {
						presets: ['next/babel'],
						plugins: ['react-docgen']
					}
				}
			]
		});
		config.resolve.extensions.push('.ts', '.tsx');

		config.module.rules.find(
			rule => rule.test.toString() === '/\\.css$/'
		).exclude = /\.module\.css$/;

		// Then we tell webpack what to do with CSS modules
		config.module.rules.push({
			test: /\.module\.css$/,
			include: path.resolve(__dirname, '../src/components'),
			use: [
				'style-loader',
				{
					loader: 'css-loader',
					options: {
						importLoaders: 1,
						modules: true
					}
				}
			]
		});
		return config;
	},
};
