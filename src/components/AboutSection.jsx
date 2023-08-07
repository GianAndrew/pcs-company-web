import crossPlatformLogo from '../assets/crossplatform_logo.svg';
import mobileDevLogo from '../assets/mobiledev_logo.svg';
import pcsLogo from '../assets/pcs_logo.jpg';
import webDesignLogo from '../assets/webdesign_logo.svg';
import webDevLogo from '../assets/webdev_logo.svg';

const AboutSection = () => {
	return (
		<>
			<div
				className='min-h-[100dvh] bg-slate-100 flex flex-col py-4'
				id='about'
				style={{ background: 'linear-gradient(-143.6deg, rgba(248, 250, 252, 0.35) 20.79%, rgba(241, 245, 249, 0.72) 40.92%, rgba(248, 250, 252, 0.19) 70.35%)' }}
			>
				<div className='w-full flex flex-col justify-center items-center md:w-11/12 md:mx-auto mt-10'>
					<div className='flex flex-col justify-center items-center my-0 lg:my-8'>
						<h1 className='max-w-4xl py-4 px-2 text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold tracking-normal text-center '>
							We Know That <span className='text-green-400'>Good Development</span> Means <span className='text-sky-400'>Good Business</span>
						</h1>
					</div>
					<div className='w-full flex flex-col justify-center items-center mt-5 lg:mt-10 md:flex-row'>
						<div className='flex flex-col flex-wrap justify-center sm:flex-row'>
							<div className='flex flex-col justify-center items-center p-2 space-y-2 xl:items-start'>
								<img src={webDesignLogo} className='max-w-sm mb-5 hover:scale-105 transition ease-in-out' />
								<h1 className='font-semibold'>Web Design</h1>
								<p className='max-w-[18rem] text-sm tracking-wide text-gray-500 text-center xl:text-start'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio, deleniti!</p>
							</div>
							<div className='flex flex-col justify-center items-center p-2 space-y-2 xl:items-start'>
								<img src={mobileDevLogo} className='max-w-sm mb-5 hover:scale-105 transition ease-in-out' />
								<h1 className='font-semibold'>Mobile Development</h1>
								<p className='max-w-[18rem] text-sm tracking-wide text-gray-500 text-center xl:text-start'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio, deleniti!</p>
							</div>
						</div>
						<div className='flex flex-col flex-wrap justify-center sm:flex-row'>
							<div className='flex flex-col justify-center items-center p-2 space-y-2 xl:items-start'>
								<img src={webDevLogo} className='max-w-sm mb-5 hover:scale-105 transition ease-in-out' />
								<h1 className='font-semibold'>Web Development</h1>
								<p className='max-w-[18rem] text-sm tracking-wide text-gray-500 text-center xl:text-start'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio, deleniti!</p>
							</div>
							<div className='flex flex-col justify-center items-center p-2 space-y-2 xl:items-start'>
								<img src={crossPlatformLogo} className='max-w-sm mb-5 hover:scale-105 transition ease-in-out' />
								<h1 className='font-semibold'>Video Editing</h1>
								<p className='max-w-[18rem] text-sm tracking-wide text-gray-500 text-center xl:text-start'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio, deleniti!</p>
							</div>
						</div>
					</div>
					<div className='max-w-5xl mx-auto flex flex-col justify-center items-center p-2 my-10 gap-4 lg:flex-row '>
						<img src={pcsLogo} className='max-w-md h-52 rounded-2xl' alt='logo' />
						<div
							className='h-full mx-5 px-5 space-y-2 flex flex-col justify-center items-center text-center lg:items-start
                         lg:text-start'
						>
							<h1 className='text-2xl md:text-3xl lg:text-4xl font-semibold'>About Pixel Cowboy Studio</h1>
							<p className='text-sm tracking-wide leading-normal font-light text-gray-600 '>
								Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis inventore ducimus reiciendis in beatae commodi obcaecati fugit quasi, architecto quia dignissimos eligendi sequi tempora
								veritatis explicabo rem enim assumenda at sed eos nisi! Tempora
							</p>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default AboutSection;
