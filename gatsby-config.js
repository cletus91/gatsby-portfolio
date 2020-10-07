/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

module.exports = {
	siteMetadata: {
		title: 'CD Portfolio',
		description: 'A personal Portfolio Website',
		author: '@cletusdias',
		twitterUsername: '@cletus7',
		image: '/',
		siteUrl: 'https://testing-strapi-gatsby-build.netlify.app',
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
				apiURL: `http://localhost:1337`,
				queryLimit: 1000, // Default to 100
				//   contentTypes : `jobs`, `projects`,
				//   singleType : `about`
				//  ONLY ADD TO ARRAY IF YOU HAVE DATA IN STRAPI !!!!
				contentTypes: [`jobs`, `projects`],
			},
		},
		// {
		//   resolve: `gatsby-plugin-prefetch-google-fonts`,
		//   options: {
		//     fonts: [
		//       {
		//         family: `Roboto`,
		//         variants: [`400`, `700`],
		//       },
		//       {
		//         family: `Open Sans`,
		//       },
		//     ],
		//   },
		// },
	],
};
