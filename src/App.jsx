import { lazy } from 'react';
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom';
import './App.css';

import BaseLayout from './components/BaseLayout';

const Home = lazy(() => import('./page/Home'));
const Project = lazy(() => import('./page/Project'));
const Team = lazy(() => import('./page/Team'));
const Contact = lazy(() => import('./page/Contact'));

const router = createBrowserRouter(
	createRoutesFromElements(
		<Route>
			<Route element={<BaseLayout />}>
				<Route index element={<Home />} />
				<Route path='/team' element={<Team />} />
				<Route path='/project' element={<Project />} />
				<Route path='/contact' element={<Contact />} />
			</Route>
		</Route>
	)
);

const App = () => {
	return <RouterProvider router={router} />;
};

export default App;
