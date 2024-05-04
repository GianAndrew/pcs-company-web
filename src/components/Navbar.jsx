import React from 'react';
import { Link } from 'react-router-dom';
import webLogo from '../assets/web_logo.svg';

const Navbar = () => {
	return (
		<>
			<nav className='bg-sky-100/5 backdrop-blur-lg shadow-sm z-40 border-b border-gray-200/5 sticky top-0'>
				<div className='max-w-screen-2xl flex flex-wrap items-center justify-between mx-auto p-4'>
					{/* LOGO */}
					<Link to={'/'} className='flex justify-center items-center'>
						<img className='h-14' src={webLogo} alt='logo' />
					</Link>
				</div>
			</nav>
		</>
	);
};

export default Navbar;
