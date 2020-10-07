import React from 'react';
import logo from '../assets/logo.svg';
import { FaAlignRight } from 'react-icons/fa';
import PageLinks from '../constants/links';

const Navbar = ({ sidebarToggle }) => {
	return (
		<nav className='navbar'>
			<div className='nav-center'>
				<div className='nav-header'>
					<img
						src={logo}
						style={{ width: '50px', height: '50px', top: '0', left: '0' }}
					/>
					<button type='button' className='toggle-btn' onClick={sidebarToggle}>
						<FaAlignRight></FaAlignRight>
					</button>
				</div>
				<PageLinks styleClass='nav-links'></PageLinks>
			</div>
		</nav>
	);
};

export default Navbar;
