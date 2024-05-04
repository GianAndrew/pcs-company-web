import { faGooglePlay } from '@fortawesome/free-brands-svg-icons';
import { faBook, faChartSimple, faFolder, faMagnifyingGlass, faScrewdriverWrench } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import AxieBuddyLogo from '../assets/axibuddylogo.png';
import AxieBuddyImage from '../assets/axie_buddy_images.svg';

const features = [
	{
		id: 1,
		title: 'Informative Menu',
		desc: 'Filled with relevant news, Marketplace Statistics and Available events for Axie Infinity.',
		icon: faBook,
	},
	{
		id: 2,
		title: 'Origin | Tools and Guides',
		desc: 'Explorers: Familiarize yourself with Card, Charm, Rune and Starter Axie using our Explorers!!',
		icon: faScrewdriverWrench,
	},
	{
		id: 3,
		title: 'Progress Trackers',
		desc: "Track your or someone's game progress, View their recent battle stats, examine their Team Composition and view their battle logs and watch.",
		icon: faChartSimple,
	},
	{
		id: 4,
		title: 'Ronin Hub',
		desc: 'Quick access to information about games both Official and Thirdparty as well as Axie Builder',
		icon: faMagnifyingGlass,
	},
	{
		id: 5,
		title: 'With built-in Favorites Manager',
		desc: 'A unified favorite managing system to view, edit and delete items you marked as favorites',
		icon: faFolder,
	},
];

const FeatureSection = () => {
	return (
		<>
			<section
				id='feature'
				className='min-h-[100dvh] flex flex-col justify-center bg-slate-900 text-white'
				style={{ background: 'linear-gradient(143.6deg, rgba(23, 37, 84, 0.89) 20.79%, rgba(23, 37, 84, 0.89) 40.92%, rgba(23, 37, 84, 0.93) 70.35%)' }}
			>
				<div className='flex flex-row justify-center items-center py-10 w-11/12 mx-auto'>
					<div className='h-full w-full xl:w-2/3 flex flex-col justify-between items-center'>
						<div className='h-2/6 flex flex-col md:flex-row justify-center items-center p-4 space-x-6 w-full'>
							<img src={AxieBuddyLogo} className='h-48 rounded-3xl shadow-lg' />

							<div className='flex flex-col justify-center items-center md:items-start'>
								<h1 className='text-4xl font-semibold my-2 text-center md:text-start'>Axie Buddy - Companion App</h1>
								<p className='text-gray-200 text-sm text-center md:text-start'>
									My Axie Buddy is your mobile companion app for Axie Infinity, packed with amazing useful tools that is available for you for free.
								</p>
								<a
									href='https://play.google.com/store/apps/details?id=com.pixelcowboystudios.myaxiebuddy&pcampaignid=web_share'
									className='flex mt-3 py-2 px-5 bg-black text-white rounded-lg items-center justify-center'
								>
									<FontAwesomeIcon icon={faGooglePlay} className='h-6 mr-3' />
									<div>
										<h1 className='text-xs'>GET IT ON</h1>
										<p className='text-lg font-semibold font-sans -mt-1'>Google Play</p>
									</div>
								</a>
							</div>
						</div>

						<div className='h-4/6 p-4 mt-12 lg:mt-0'>
							<ul className='grid gap-8 sm:grid-cols-2'>
								{features.map((feature) => (
									<li key={feature.id} className='flex gap-x-4'>
										<div className='flex-none w-12 h-12 bg-cyan-700/20 text-blue-200 rounded-lg flex items-center justify-center'>
											<FontAwesomeIcon icon={feature.icon} />
										</div>
										<div>
											<h4 className='text-lg text-sky-200 font-semibold'>{feature.title}</h4>
											<p className='mt-3 text-sm text-gray-200'>{feature.desc}</p>
										</div>
									</li>
								))}
							</ul>
						</div>
					</div>
					<div className='h-full hidden xl:w-4/5 xl:flex justify-center items-center'>
						<img src={AxieBuddyImage} className='block w-full p-6 m-2' />
					</div>
				</div>
			</section>
		</>
	);
};

export default FeatureSection;
