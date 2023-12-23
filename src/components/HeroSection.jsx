import { faChevronRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { twMerge as cn } from 'tailwind-merge';
import CodeAltYellow from '../assets/home_code_alt_yellow.svg';
import CodeSvg from '../assets/home_code_logo.svg';
import CodeSvgAlt from '../assets/home_code_logo_alt.svg';
import HatSvg from '../assets/home_hat_logo.svg';

const HeroSection = () => {
	return (
		<>
			<section className={cn('h-[100dvh]  flex flex-wrap w-full', 'lg:w-11/12 lg:mx-auto')} id='hero'>
				<div className={cn('h-full w-full flex flex-col justify-center items-center', 'xl:w-1/2 xl:items-start')}>
					<div className={cn('flex flex-col justify-center items-center relative', 'xl:hidden')}>
						<img src={HatSvg} className='w-[25%] ' alt='HatImage' />
					</div>

					<p className={cn('block font-Poppins mb-2 font-medium text-4xl tracking-normal text-gray-700 lowercase', 'sm:text-5xl md:text-6xl')}>We are</p>
					<p className={cn('font-PressStart text-center uppercase home-header tracking-wide text-5xl', 'sm:text-6xl md:text-7xl lg:text-[5rem] xl:text-start')}>
						Pixel <br /> Cowboy <br /> <span className={cn('home-header-span text-5xl font-PressStart', 'sm:text-6xl md:text-7xl lg:text-[5rem]')}> Studio</span>
					</p>
					<p className={cn('w-5/6 text-center text-sm normal-case mb-6 text-gray-500', 'md:text-md md:w-4/6 xl:text-start')}>
						We are an indie software development group from the Philippines crafting quality software since 2018.
					</p>

					<div className='flex flex-row space-x-2'>
						<a
							href='#about'
							className={cn(
								'font-semibold rounded-lg text-sm px-6 py-2.5 transition ease-in-out text-gray-900 bg-yellow-300 border border-yellow-400',
								'hover:bg-green-600 hover:text-white hover:border-green-500',
								'focus:outline-none focus:ring-4 focus:ring-yellow-300'
							)}
						>
							Get Started
							<FontAwesomeIcon className='ml-2' icon={faChevronRight} />
						</a>
					</div>
				</div>
				<div className={cn('hidden h-full flex-col justify-center items-center relative', 'xl:flex xl:w-1/2')}>
					<img src={CodeSvg} alt='codeSvg' className='absolute w-[30%] top-0 left-20 hover:scale-125 transition ease-in-out' />
					<img src={CodeSvgAlt} alt='codeSvg' className='absolute w-[10%] top-[15rem] left-20 hover:scale-125 transition ease-in-out' />
					<img src={CodeAltYellow} alt='' className='absolute w-[20%] top-10 right-0 hover:scale-125 transition ease-in-out' />
					<img src={HatSvg} alt='hatSvg' className='relative inline-block align-middle overflow-hidden w-[80%] h-auto' />
					<img src={CodeSvgAlt} alt='codeSvg' className='absolute w-[40%] bottom-0 right-10' />
					<img src={CodeSvg} alt='codeSvg' className='absolute w-[15%] bottom-10 left-[15rem] ' />
				</div>
			</section>
		</>
	);
};

export default HeroSection;
