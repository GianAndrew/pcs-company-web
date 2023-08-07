import { Link } from 'react-router-dom';
import webLogo from '../assets/web_logo.svg';

const Footer = () => {
	return (
		<>
			<footer className='bg-slate-50/75 rounded-lg shadow dark:bg-gray-900'>
				<div className='w-full max-w-screen-xl mx-auto p-4 md:py-8'>
					<div className='sm:flex sm:items-center sm:justify-between'>
						<img src={webLogo} className='h-12 mr-3  mb-4 sm:mb-0' alt='pcs Logo' />

						<ul className='flex flex-wrap items-center mb-6 text-sm font-medium text-gray-500 sm:mb-0 dark:text-gray-400'>
							<li>
								<Link to='/project' className='mr-4 hover:underline md:mr-6'>
									Projects
								</Link>
							</li>
							<li>
								<Link to='/team' className='mr-4 hover:underline md:mr-6 '>
									Team
								</Link>
							</li>
							<li>
								<Link to='/contact' className='hover:underline'>
									Contact
								</Link>
							</li>
						</ul>
					</div>
					<hr className='my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8' />
					<span className='block text-sm text-gray-500 sm:text-center dark:text-gray-400'>© 2023 Pixel Cowboy Studio™ . All Rights Reserved.</span>
				</div>
			</footer>
		</>
	);
};

export default Footer;
