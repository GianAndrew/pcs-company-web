import { faEnvelope, faLocationDot, faPhone } from '@fortawesome/free-solid-svg-icons';
import { faGithub, faLinkedin, faFacebook, faXTwitter } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

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

							<a href='studiospixelcowboy@gmail.com' target='_blank' rel='noreferrer' className='mt-2 text-sky-500 dark:text-sky-400'>
								studiospixelcowboy@gmail.com
							</a>
						</div>

						<div className='flex flex-col items-center justify-center text-center'>
							<span className='inline-block p-3 text-sky-500 rounded-full bg-sky-100/80'>
								<FontAwesomeIcon icon={faFacebook} className='text-emerald-300 w-6 h-6' />
							</span>

							<h2 className='mt-4 text-lg font-medium text-gray-800'>Facebook</h2>

							<a href='https://www.facebook.com/PixelCowboyStudio' target='_blank' rel='noreferrer' className='mt-2 text-sky-500 dark:text-sky-400 hover:underline'>
								Pixel Cowboy Studios
							</a>
						</div>

						<div className='flex flex-col items-center justify-center text-center'>
							<span className='inline-block p-3 text-sky-500 rounded-full bg-sky-100/80'>
								<FontAwesomeIcon icon={faXTwitter} className='text-emerald-300 w-6 h-6' />
							</span>

							<h2 className='mt-4 text-lg font-medium text-gray-800'>X / Twitter</h2>

							<a href='https://twitter.com/teampixelcowboy' target='_blank' rel='noreferrer' className='mt-2 text-sky-500 dark:text-sky-400'>
								@pixel_cowb66863
							</a>
						</div>
					</div>
				</div>
			</section>
		</>
	);
};

export default ContactSection;
