import CodeAltYellow from '../assets/home_code_alt_yellow.svg';
import CodeSvg from '../assets/home_code_logo.svg';
import CodeSvgAlt from '../assets/home_code_logo_alt.svg';
import HatSvg from '../assets/home_hat_logo.svg';

const HeroSection = () => {
	return (
		<>
			<div className='h-[100dvh] flex flex-wrap w-full lg:w-11/12 lg:mx-auto' id='hero'>
				<div className='h-full w-full xl:w-1/2 flex flex-col justify-center items-center xl:items-start'>
					<div className='flex flex-col justify-center items-center xl:hidden relative '>
						<img src={HatSvg} className='w-[25%] ' alt='HatImage' />
					</div>

					<p className='block font-Poppins mb-2 font-medium text-4xl sm:text-5xl md:text-6xl tracking-widest text-gray-500 lowercase'>we are</p>
					<p className='font-PressStart text-center uppercase home-header tracking-wide text-5xl sm:text-7xl md:text-8xl lg:text-[7rem] xl:text-start '>
						Pixel <br /> Cowboy <br /> <span className='home-header-span text-5xl sm:text-7xl md:text-8xl lg:text-[7rem] font-PressStart'> Studio</span>
					</p>
					<p className='w-5/6 text-center text-sm normal-case mb-6 text-gray-500 md:text-md md:w-4/6 xl:text-start '>
						Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sapiente quibusdam, facere est necessitatibus impedit qui.
					</p>

					<a
						href='#about'
						className='font-bold rounded-full text-sm px-10 py-3.5 mr-2 mb-2 transition ease-in-out text-gray-700 bg-yellow-400 hover:bg-green-600 hover:text-white hover:scale-105  focus:outline-none focus:ring-4 focus:ring-yellow-300  dark:bg-green-500 dark:hover:bg-amber-600  dark:focus:ring-yellow-800'
					>
						Get Started
					</a>
				</div>
				<div className='hidden xl:w-1/2 h-full xl:flex flex-col justify-center items-center relative'>
					<img src={CodeSvg} alt='codeSvg' className='absolute w-[30%] top-0 left-20 hover:scale-125 transition ease-in-out animate-pulse duration-300' />
					<img src={CodeSvgAlt} alt='codeSvg' className='absolute w-[10%] top-[15rem] left-20 hover:scale-125 transition ease-in-out animate-pulse duration-150' />
					<img
						src={CodeAltYellow}
						alt=''
						className='absolute w-[20%] top-10 right-0 hover:scale-125 transition ease-in-out animate-pulse duration-150
					'
					/>
					<img src={HatSvg} alt='hatSvg' className='relative inline-block align-middle overflow-hidden w-[80%] h-auto' />
					<img src={CodeSvgAlt} alt='codeSvg' className='absolute w-[40%] bottom-0 right-10' />
					<img src={CodeSvg} alt='codeSvg' className='absolute w-[15%] bottom-10 left-[15rem] ' />
				</div>
			</div>
		</>
	);
};

export default HeroSection;
