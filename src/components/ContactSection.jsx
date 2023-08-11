import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLocationDot, faPhone, faEnvelope } from '@fortawesome/free-solid-svg-icons';

const ContactSection = () => {
	return (
		<>
			<section className='bg-slate-100' id='contact'>
				<div className='max-w-7xl px-6 py-12 mx-auto'>
					<div className='text-center'>
						<p className='font-medium text-sky-500'>Contact us</p>

						<h1 className='mt-2 text-2xl font-semibold text-gray-800 md:text-4xl'>Get in touch</h1>

						<p className='mt-3 text-gray-500'>Our friendly team is always here to chat.</p>
					</div>

					<div className='grid grid-cols-1 gap-12 mt-10 md:grid-cols-2 lg:grid-cols-3'>
						<div className='flex flex-col items-center justify-center text-center'>
							<span className='inline-block p-3 text-sky-500 rounded-full bg-sky-100/80'>
								<FontAwesomeIcon icon={faEnvelope} className='text-emerald-300 w-6 h-6' />
							</span>

							<h2 className='mt-4 text-lg font-medium text-gray-800'>Email</h2>
							<p className='mt-2 text-gray-500'>Our friendly team is here to help.</p>
							<p className='mt-2 text-sky-500 dark:text-sky-400'>business.pixelcowboystudios@gmail.com</p>
						</div>

						<div className='flex flex-col items-center justify-center text-center'>
							<span className='inline-block p-3 text-sky-500 rounded-full bg-sky-100/80'>
								<FontAwesomeIcon icon={faLocationDot} className='text-emerald-300 w-6 h-6' />
							</span>

							<h2 className='mt-4 text-lg font-medium text-gray-800'>Office</h2>
							<p className='mt-2 text-gray-500'>Come say hello at our office HQ.</p>
							<p className='mt-2 text-sky-500 dark:text-sky-400'>Malaria, Caloocan City</p>
						</div>

						<div className='flex flex-col items-center justify-center text-center'>
							<span className='inline-block p-3 text-sky-500 rounded-full bg-sky-100/80'>
								<FontAwesomeIcon icon={faPhone} className='text-emerald-300 w-6 h-6' />
							</span>

							<h2 className='mt-4 text-lg font-medium text-gray-800'>Phone</h2>
							<p className='mt-2 text-gray-500'>Mon-Fri from 8am to 5pm.</p>
							<p className='mt-2 text-sky-500 dark:text-sky-400'>(+63) 987654321</p>
						</div>
					</div>
				</div>
			</section>
		</>
	);
};

export default ContactSection;
