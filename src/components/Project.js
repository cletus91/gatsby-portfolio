import React from 'react';
import PropTypes from 'prop-types';
import Image from 'gatsby-image';
import { FaGithubSquare, FaShareSquare } from 'react-icons/fa';
const Project = ({ title, github, description, stack, url, image, index }) => {
	return (
		<article className='project'>
			{image && <Image fluid={image.childImageSharp.fluid} className='project-img' />}
			<div className='project-info'>
				<span className='project-number'>{index + 1}</span>
				<h3>{title || 'default title'}</h3>
				<p className='project-desc'>{description}</p>
				<div className='project-stack'>
					{stack.map(item => {
						return (
							<span key={item.id} className='about-stack'>
								{item.title}
							</span>
						);
					})}
					<div className='project-links'>
						{github && (
							<a href={github} target='_blank' rel='noopener noreferrer'>
								<FaGithubSquare className='project-icon' />
							</a>
						)}

						{url && (
							<a href={url} target='_blank' rel='noopener noreferrer'>
								<FaShareSquare className='project-icon' />
							</a>
						)}
					</div>
				</div>
			</div>
		</article>
	);
};

Project.propTypes = {
	title: PropTypes.string.isRequired,
	github: PropTypes.string.isRequired,
	// url: PropTypes.string.isRequired,
	description: PropTypes.string.isRequired,
	stack: PropTypes.arrayOf(PropTypes.object).isRequired,
	image: PropTypes.object.isRequired,
};

export default Project;
