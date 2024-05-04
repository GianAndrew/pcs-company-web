import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import webLogo from '../assets/web_logo.svg';

const Navbar = () => {
	const [navbar, setNavbar] = useState(false);

	const changeBackground = () => {
		if (window.scrollY >= 80) {
			setNavbar(true);
		} else {
			setNavbar(false);
		}
	};

	window.addEventListener('scroll', changeBackground);

	return (
		<>
			<nav className={`${navbar ? 'bg-slate-100' : 'bg-sky-100/5'} backdrop-blur-lg shadow-sm z-40 sticky top-0`}>
				<div className='container flex flex-wrap items-center justify-between mx-auto py-2 px-4'>
					{/* LOGO */}
					<a href='#hero' className='flex justify-center items-center'>
						<img className='h-12' src={webLogo} alt='logo' />
					</a>
					<div className='flex space-x-4'>
						<a href='#hero'>Home</a>
						<a href='#about'>About</a>
						<a href='#feature'>Feature</a>
						<a href='#team'>Team</a>
					</div>
				</div>
			</nav>
		</>
	);
};

export default Navbar;
