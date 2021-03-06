import React from 'react';
import { FaTwitterSquare, FaLinkedin, FaFacebookSquare, FaInstagramSquare } from 'react-icons/fa';

const data = [
	{
		id: 1,
		icon: <FaTwitterSquare className='social-icon'></FaTwitterSquare>,
		url: 'https://www.twitter.com/cletus7',
	},
	{
		id: 2,
		icon: <FaLinkedin className='social-icon'></FaLinkedin>,
		url: 'https://www.linkedin.com/in/cletusdias91/',
	},
	{
		id: 3,
		icon: <FaFacebookSquare className='social-icon'></FaFacebookSquare>,
		url: 'https://www.facebook.com/cletus6',
	},
	{
		id: 4,
		icon: <FaInstagramSquare className='social-icon'></FaInstagramSquare>,
		url: 'https://www.instagram.com/diascletus91',
	},
];
const links = data.map(link => {
	return (
		<li key={link.id}>
			<a href={link.url} className='social-link' target='_blank' rel='noopener noreferrer'>
				{link.icon}
			</a>
		</li>
	);
});

export default ({ styleClass }) => {
	return <ul className={`social-links ${styleClass ? styleClass : ''}`}>{links}</ul>;
};
