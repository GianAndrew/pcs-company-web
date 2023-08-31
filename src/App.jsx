import { lazy } from 'react';
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom';
import './App.css';

import BaseLayout from './components/BaseLayout';

const Home = lazy(() => import('./page/Home'));
const ErrorPage = lazy(() => import('./page/ErrorPage'));

const router = createBrowserRouter(
	createRoutesFromElements(
		<Route>
			<Route element={<BaseLayout />}>
				<Route index element={<Home />} />
				<Route path='/*' element={<ErrorPage />} />
			</Route>
		</Route>
	)
);

const App = () => {
	return <RouterProvider router={router} />;
};

export default App;
