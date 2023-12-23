import React from 'react';
import { twMerge as cn } from 'tailwind-merge';
import crossPlatformLogo from '../assets/crossplatform_logo.svg';
import mobileDevLogo from '../assets/mobiledev_logo.svg';
import pcsLogo from '../assets/pcs_logo.jpg';
import webDesignLogo from '../assets/webdesign_logo.svg';
import webDevLogo from '../assets/webdev_logo.svg';

const AboutSection = () => {
	return (
		<>
			<section
				className='min-h-[100dvh] w-full flex flex-col py-4 bg-slate-100'
				id='about'
				// style={{ background: 'linear-gradient(-143.6deg, rgba(248, 250, 252, 0.35) 20.79%, rgba(241, 245, 249, 0.72) 40.92%, rgba(248, 250, 252, 0.19) 70.35%)' }}
			>
				<div className={cn('w-full flex flex-col justify-center items-center mt-10 py-4', 'md:w-11/12 md:mx-auto ')}>
					<div className={cn('flex flex-col justify-center items-center my-0', 'lg:my-8')}>
						<h1 className={cn('max-w-2xl py-4 px-2 text-2xl font-semibold tracking-normal text-center', 'sm:text-3xl md:text-4xl')}>
							We Know That <span className='text-green-400'>Good Development</span> Means <span className='text-sky-400'>Good Business</span>
						</h1>
					</div>
					<div className={cn('w-full flex flex-col flex-wrap justify-center items-center mt-5 gap-5', 'md:flex-row lg:mt-10')}>
						<div className={cn('flex flex-col justify-center items-center p-2 space-y-2')}>
							<img src={webDesignLogo} className={cn('max-w-lg mb-5 transition ease-in-out', ' hover:scale-105 ')} />
							<h1 className='text-center text-md font-semibold'>Web Design</h1>
							{/* <p className={cn('max-w-[18rem] text-sm tracking-wide text-gray-500 text-center ', 'xl:text-start')}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio, deleniti!</p> */}
						</div>
						<div className={cn('flex flex-col justify-center items-center p-2 space-y-2 ')}>
							<img src={mobileDevLogo} className={cn('max-w-lg  mb-5 transition ease-in-out', ' hover:scale-105 ')} />
							<h1 className='text-center text-md font-semibold'>Mobile Development</h1>
							{/* <p className={cn('max-w-[18rem] text-sm tracking-wide text-gray-500 text-center ', 'xl:text-start')}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio, deleniti!</p> */}
						</div>

						<div className={cn('flex flex-col justify-center items-center p-2 space-y-2')}>
							<img src={webDevLogo} className={cn('max-w-lg mb-5 transition ease-in-out', ' hover:scale-105')} />
							<h1 className='text-center text-md font-semibold'>Web Development</h1>
							{/* <p className={cn('max-w-[18rem] text-sm tracking-wide text-gray-500 text-center ', 'xl:text-start')}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio, deleniti!</p> */}
						</div>
						<div className={cn('flex flex-col justify-center items-center p-2 space-y-2')}>
							<img src={crossPlatformLogo} className={cn('max-w-lg mb-5 transition ease-in-out', ' hover:scale-105')} />
							<h1 className='text-center text-md font-semibold'>Video Editing</h1>
							{/* <p className={cn('max-w-[18rem] text-sm tracking-wide text-gray-500 text-center ', 'xl:text-start')}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio, deleniti!</p> */}
						</div>
					</div>

					<div className={cn('max-w-5xl mx-auto flex flex-col justify-center items-center py-5 my-10 gap-4', 'lg:flex-row')}>
						<img src={pcsLogo} className='max-w-[10rem] rounded-2xl saturate-150' alt='logo' />
						<div className={cn('h-full max-w-2xl mx-5 mt-10 px-5 space-y-2 flex flex-col justify-center items-center text-center', 'lg:items-start lg:text-start')}>
							<div className='flex flex-col justify-center space-y-2 mb-2'>
								<h1 className='text-xl font-semibold text-gray-900'>Mission</h1>
								<p className='text-md font-light text-gray-500'>
									To deliver high-quality product and services that is reasonable and within reach and help fellow tool users enable them achieve more.
								</p>
							</div>

							<div className='flex flex-col justify-center space-y-2 mb-2'>
								<h1 className='text-xl font-semibold text-gray-900'>Vision</h1>
								<p className='text-md font-light text-gray-500'>To build a reputable softwares, providing and building high-quality products and services for businesses and individual clients</p>
							</div>
							{/* <h1 className={cn('text-2xl font-semibold', 'md:text-3xl lg:text-4xl')}>About Pixel Cowboy Studio</h1> */}
							{/* <p className='text-sm tracking-wide leading-normal font-light text-gray-600 '>
								Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis inventore ducimus reiciendis in beatae commodi obcaecati fugit quasi, architecto quia dignissimos eligendi sequi tempora
								veritatis explicabo rem enim assumenda at sed eos nisi! Tempora
							</p> */}
						</div>
					</div>
				</div>
			</section>
		</>
	);
};

export default AboutSection;
