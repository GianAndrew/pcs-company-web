import { faFacebook, faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { twMerge as cn } from 'tailwind-merge';
import GianImg from '../assets/gian.jpg';
import JamesImg from '../assets/jj.jpg';
import LracImg from '../assets/lrac.jpg';
import MauiImg from '../assets/maui.jpg';

const teams = [
	{
		id: 1,
		name: 'Carl Palma',
		title: 'Mobile Developer',
		img: LracImg,
		desc: 'At a assumenda quas cum earum ut itaque commodi saepe rem aspernatur quam natus quis nihil quod, hic explicabo doloribus magnam neque, exercitationem eius sunt!',
		github: 'https://github.com/ytpixelcowboy',
		linkedin: 'https://www.linkedin.com/in/carl-jordee-palma-69423122a/?originalSubdomain=ph',
	},
	{
		id: 2,
		name: 'Gian Del Rosario',
		title: 'Web App Developer',
		img: GianImg,
		desc: 'At a assumenda quas cum earum ut itaque commodi saepe rem aspernatur quam natus quis nihil quod, hic explicabo doloribus magnam neque, exercitationem eius sunt!',
		github: 'https://github.com/GianAndrew',
		linkedin: 'https://www.linkedin.com/in/gian-andrew-del-rosario-b85a332aa',
	},
	{
		id: 3,
		name: 'Maui Sierra',
		title: 'Software Engineer',
		img: MauiImg,
		desc: 'At a assumenda quas cum earum ut itaque commodi saepe rem aspernatur quam natus quis nihil quod, hic explicabo doloribus magnam neque, exercitationem eius sunt!',
		github: 'https://github.com/auimi',
		linkedin: 'https://www.linkedin.com/in/maui-sierra-3b0516295/?originalSubdomain=ph',
	},
	{
		id: 4,
		name: 'James Paala',
		title: 'Project Assistant',
		img: JamesImg,
		desc: 'At a assumenda quas cum earum ut itaque commodi saepe rem aspernatur quam natus quis nihil quod, hic explicabo doloribus magnam neque, exercitationem eius sunt!',
		github: '',
		linkedin: '',
	},
];

const TeamSection = () => {
	return (
		<>
			<section
				id='team'
				className='min-h-[100dvh] flex justify-center items-center bg-slate-100 py-10'
				// style={{ background: 'linear-gradient(143.6deg, rgba(103, 232, 249, 0.65) 20.79%, rgba(56, 189, 248, 0.75) 40.92%, rgba(125, 211, 252, 0.65) 90.35%)' }}
			>
				<div className='max-w-screen-xl mx-auto px-4 md:px-8'>
					<div className='w-full flex flex-col justify-center items-center text-center'>
						<h3 className='text-gray-900 text-3xl font-semibold sm:text-5xl'>Meet our talent team</h3>
						<p className='max-w-xl text-gray-500 mt-3'>Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum has been the industrys standard dummy.</p>
					</div>
					<div className='mt-20'>
						<ul className='grid gap-8 lg:grid-cols-2'>
							{teams.map((team) => (
								<li key={team.id} className='gap-8 sm:flex'>
									<div className='w-full h-60'>
										<img src={team.img} className='w-full h-full object-cover object-center shadow-md rounded-xl' alt='' />
									</div>
									<div className='mt-4 sm:mt-0 w-full'>
										<h4 className='text-xl text-gray-900 font-semibold'>{team.name}</h4>
										<p className='text-md text-sky-500'>{team.title}</p>

										<div className='mt-3 flex gap-4 text-gray-400'>
											{team.github ? (
												<a href={team.github} target='_blank' rel='noreferrer'>
													<FontAwesomeIcon icon={faGithub} className={cn('w-5 h-5 text-sky-300', 'hover:text-sky-600')} />
												</a>
											) : null}

											{team.linkedin ? (
												<a href={team.linkedin} target='_blank' rel='noreferrer'>
													<FontAwesomeIcon icon={faLinkedin} className={cn('w-5 h-5 text-sky-300', 'hover:text-sky-600')} />
												</a>
											) : null}
										</div>
									</div>
								</li>
							))}
						</ul>
					</div>
				</div>
			</section>
		</>
	);
};

export default TeamSection;
