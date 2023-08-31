import { lazy } from 'react';
import { Navigate, Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom';
import './App.css';

import BaseLayout from './components/BaseLayout';

const Home = lazy(() => import('./page/Home'));
const ErrorPage = lazy(() => import('./page/ErrorPage'));

const router = createBrowserRouter(
	createRoutesFromElements(
		<Route element={<BaseLayout />}>
			<Route path='/' element={<Home />} />
			<Route path='*' element={<Navigate to={'/'} />} />
		</Route>
	)
);

const App = () => {
	return <RouterProvider router={router} />;
};

export default App;
