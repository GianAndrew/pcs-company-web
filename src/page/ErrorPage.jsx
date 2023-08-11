import React from 'react';
import WebLogo from '../assets/web_logo.svg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from 'react-router-dom';

const ErrorPage = () => {
	const navigate = useNavigate();

	const backBtn = () => {
		navigate('/');
	};
	return (
		<>
			<section>
				<div className='max-w-screen-xl mx-auto px-4 flex items-center justify-start h-screen md:px-8'>
					<div className='max-w-lg mx-auto flex flex-col justify-center items-center text-center'>
						<div className='pb-6'>
							<img src={WebLogo} width={150} className='mx-auto' />
						</div>
						<h3 className='text-gray-800 text-4xl font-semibold sm:text-5xl'>Page not found</h3>
						<p className='text-gray-600 mt-3'>Sorry, the page you are looking for could not be found or has been removed.</p>

						<button
							type='button'
							className='flex justify-center items-center text-white bg-sky-400 focus:ring-4 focus:outline-none focus:ring-sky-300 font-medium rounded-lg text-sm px-5 py-2.5 mt-10 text-center mr-2 mb-2'
							onClick={backBtn}
						>
							<FontAwesomeIcon icon={faChevronLeft} className='mr-2' />
							Back To Home
						</button>
					</div>
				</div>
			</section>
		</>
	);
};

export default ErrorPage;
