import React from 'react';
import Links from '../constants/links';
import SocialLinks from '../constants/socialLinks';
import { FaTimes } from 'react-icons/fa';
import { Link } from 'gatsby';

const Sidebar = ({ isOpen, sidebarToggle }) => {
	return (
		<aside className={`sidebar ${isOpen ? 'show-sidebar' : ''}`}>
			<button className='close-btn' onClick={sidebarToggle}>
				<FaTimes />
			</button>
			<div className='sidebar-container'>
				<Links styleClass='sidebar-links' />
				<SocialLinks styleClass='sidebar-icons' />
			</div>
		</aside>
	);
};

export default Sidebar;
