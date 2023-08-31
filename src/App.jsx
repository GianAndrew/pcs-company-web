import { lazy } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';

import BaseLayout from './components/BaseLayout';

const Home = lazy(() => import('./page/Home'));
const ErrorPage = lazy(() => import('./page/ErrorPage'));

const App = () => {
	return (
		<BrowserRouter basename='/'>
			<Routes>
				<Route element={<BaseLayout />}>
					<Route index element={<Home />} />
					<Route path='/*' element={<ErrorPage />} />
				</Route>
			</Routes>
		</BrowserRouter>
	);
};

export default App;
