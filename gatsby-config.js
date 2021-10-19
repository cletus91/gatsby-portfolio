// import 'dotenv/config';

module.exports = {
	siteMetadata: {
		title: 'CD Portfolio',
		description: 'A personal Portfolio Website',
		author: '@cletusdias',
		twitterUsername: '@cletus7',
		image: '/twitter-card.png',
		siteUrl: 'https://www.cletusdias.com',
	},
	plugins: [
		`gatsby-transformer-sharp`,
		`gatsby-plugin-sharp`,
		`gatsby-plugin-react-helmet`,
		`gatsby-plugin-sitemap`,
		{
			resolve: `gatsby-source-filesystem`,
			options: {
				name: `assets`,
				path: `${__dirname}/src/assets/`,
			},
		},
		{
			resolve: `gatsby-source-strapi`,
			options: {
				apiURL: `https://cletus-portfolio-backend.herokuapp.com`,
				queryLimit: 1000,
				contentTypes: [`projects`, `jobs`],
				singleTypes: [`about`],
			},
		},
		{
			resolve: `gatsby-plugin-google-fonts`,
			options: {
				fonts: [`Poppins`, `Open Sans\:400,700`],
			},
		},
		{
			resolve: `gatsby-plugin-gtag`,
			options: {
				trackingId: `G-L4BJP7JHRR`,
				head: true,
			},
		},
	],
};
