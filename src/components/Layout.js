import React, { useState } from 'react';
// import "../css/main.css"
import Navbar from './Navbar';
import Sidebar from './Sidebar';
import Footer from './Footer';
const Layout = ({ children }) => {
	const [isOpen, setIsOpen] = useState(false);

	const sidebarToggle = () => {
		setIsOpen(!isOpen);
	};

	return (
		<>
			<Navbar sidebarToggle={sidebarToggle} />
			<Sidebar sidebarToggle={sidebarToggle} isOpen={isOpen} />
			{children}
			<Footer />
		</>
	);
};

export default Layout;
