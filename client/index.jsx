import './client.styl';

import Header from './components/Header.jsx';
import SideBar from './components/SideBar.jsx';
import MessageList from './components/MessageList.jsx';
import MessageView from './components/MessageView.jsx';

import { getState } from './state.js';
const useStore = getState({ useState, useCallback, useEffect });

const App = () => {
	const { state, actions } = useStore();

	return (
		<div class="app">
			<div class="container">
				<SideBar />
			</div>
		</div>
	);
};
