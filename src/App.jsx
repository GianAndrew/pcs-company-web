import { lazy } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';

import BaseLayout from './components/BaseLayout';

const Home = lazy(() => import('./page/Home'));
const ErrorPage = lazy(() => import('./page/ErrorPage'));

const App = () => {
	return (
		<BrowserRouter>
			<Routes>
				<Route element={<BaseLayout />}>
					<Route path='/' element={<Home />} />
				</Route>
				<Route path='*' element={<ErrorPage />} />
			</Routes>
		</BrowserRouter>
	);
};

export default App;
