import React from 'react';
import webLogo from '../assets/web_logo.svg';

const Footer = () => {
	return (
		<>
			<footer className='bg-slate-50/75 rounded-lg shadow'>
				<div className='w-full max-w-screen-xl mx-auto p-4 md:py-8'>
					<div className='sm:flex sm:items-center sm:justify-between'>
						<img src={webLogo} className='h-12 mr-3  mb-4 sm:mb-0' alt='pcs Logo' />

						<ul className='flex flex-wrap items-center mb-6 text-sm font-medium text-gray-500 sm:mb-0'>
							<li>
								<a href='#about' className='mr-4 hover:underline md:mr-6'>
									About
								</a>
							</li>
							<li>
								<a href='#product' className='mr-4 hover:underline md:mr-6'>
									Product
								</a>
							</li>
							<li>
								<a href='#team' className='mr-4 hover:underline md:mr-6 '>
									Team
								</a>
							</li>
							<li>
								<a href='#contact' className='hover:underline'>
									Contact
								</a>
							</li>
						</ul>
					</div>
					<hr className='my-6 border-gray-200 sm:mx-auto lg:my-8' />
					<span className='block text-sm text-gray-500 sm:text-center'>© 2023 Pixel Cowboy Studio™ . All Rights Reserved.</span>
				</div>
			</footer>
		</>
	);
};

export default Footer;
