import { Link, NavLink } from 'react-router-dom';
import webLogo from '../assets/web_logo.svg';
import { useState } from 'react';

const Navbar = () => {
	const [show, setShow] = useState(false);

	const showBtn = () => setShow((value) => !value);
	return (
		<>
			<nav className='bg-sky-200/20 backdrop-blur-lg shadow-sm z-40 border-b border-gray-100/10'>
				<div className='max-w-screen-2xl flex flex-wrap items-center justify-between mx-auto p-4'>
					{/* LOGO */}
					<Link to={'/'} className='flex items-center'>
						<img className='h-14' src={webLogo} alt='logo' />
					</Link>

					{/* HIDDEN BUTTON */}
					<button type='button' className='w-10 h-10 inline-flex justify-center items-center p-2 text-sm text-sky-400 border-2 border-sky-300 rounded-lg md:hidden hover:bg-gray-100' onClick={showBtn}>
						<svg className='w-5 h-5' aria-hidden='true' xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 17 14'>
							<path stroke='currentColor' strokeLinecap='round' strokeLinejoin='round' strokeWidth='2' d='M1 1h15M1 7h15M1 13h15' />
						</svg>
					</button>

					{/* LIST */}
					<div className={show ? 'w-full md:block md:w-auto' : 'hidden w-full md:block md:w-auto'}>
						<ul className='font-medium flex flex-col justify-center p-4 mt-4 rounded-lg md:flex-row md:p-0 md:mt-0 md:space-x-2 md:border-0'>
							<li>
								<NavLink
									to={'/project'}
									className={({ isActive }) =>
										isActive
											? 'block py-2 pl-3 pr-4 font-normal text-sky-400 transition ease-in-out hover:bg-sky-200 rounded md:border-0 md:py-2 md:px-6 md:bg-sky-400 md:text-white md:hover:bg-sky-400 md:hover:text-white '
											: 'block py-2 pl-3 pr-4 font-normal text-sky-400 rounded transition ease-in-out md:border-0 md:py-2 md:px-6 md:hover:bg-sky-400 md:hover:text-white hover:bg-sky-200'
									}
								>
									Projects
								</NavLink>
							</li>
							<li>
								<NavLink
									to={'/team'}
									className={({ isActive }) =>
										isActive
											? 'block py-2 pl-3 pr-4 font-normal text-sky-400 hover:bg-sky-200 rounded md:border-0 md:py-2 md:px-6 md:bg-sky-400 md:text-white md:hover:bg-sky-400 md:hover:text-white '
											: 'block py-2 pl-3 pr-4 font-normal text-sky-400 rounded md:border-0 md:py-2 md:px-6 md:hover:bg-sky-400 md:hover:text-white hover:bg-sky-200'
									}
								>
									Team
								</NavLink>
							</li>
							<li>
								<NavLink
									to={'/contact'}
									className={({ isActive }) =>
										isActive
											? 'block py-2 pl-3 pr-4 font-normal text-sky-400  hover:bg-sky-200 rounded md:border-0 md:py-2 md:px-6 md:bg-sky-400 md:text-white md:hover:bg-sky-400 md:hover:text-white '
											: 'block py-2 pl-3 pr-4 font-normal text-sky-400 rounded md:border-0 md:py-2 md:px-6 md:hover:bg-sky-400 md:hover:text-white hover:bg-sky-200'
									}
								>
									Contact
								</NavLink>
							</li>
						</ul>
					</div>
				</div>
			</nav>
		</>
	);
};

export default Navbar;
