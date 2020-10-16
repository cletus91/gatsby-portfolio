import React from 'react';
import Image from 'gatsby-image';
import { graphql, useStaticQuery } from 'gatsby';
import SocialLinks from '../constants/socialLinks';

const query = graphql`
	{
		file(relativePath: { eq: "hero-img.png" }) {
			childImageSharp {
				fluid {
					...GatsbyImageSharpFluid
				}
			}
		}
	}
`;

const Hero = () => {
	const {
		file: {
			childImageSharp: { fluid },
		},
	} = useStaticQuery(query);

	return (
		<header className='hero'>
			<div className='section-center hero-center'>
				<article className='hero-info'>
					<div>
						<div className='underline'></div>
						<h1>I'm Cletus</h1>
						<h4>Web Developer & UI/UX Designer</h4>
						<SocialLinks />
					</div>
				</article>
				<Image fluid={fluid} className='hero-img' />
			</div>
		</header>
	);
};

export default Hero;
