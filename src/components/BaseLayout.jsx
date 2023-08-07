import { Outlet } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';
import { Suspense } from 'react';

const BaseLayout = () => {
	return (
		<>
			<div
				className='relative min-h-[100dvh] flex flex-col w-full '
				style={{ background: 'linear-gradient(143.6deg, rgba(74, 222, 128, 0.15) 20.79%, rgba(56, 189, 248, 0.26) 40.92%, rgba(74, 222, 128, 0.20) 70.35%)' }}
			>
				<Navbar />
				<Suspense fallback={<p>Loading...</p>}>
					<Outlet />
				</Suspense>
				<Footer />
			</div>
		</>
	);
};

export default BaseLayout;
