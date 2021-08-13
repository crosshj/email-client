import React from 'react';
import { render } from 'react-dom';

import Header from './components/Header.jsx';
import Loading from './components/Loading.jsx';
import Login from './components/Login.jsx';
import MessageList from './components/MessageList.jsx';
import MessageView from './components/MessageView.jsx';
import Settings from './components/Settings.jsx';
import SideBar from './components/SideBar.jsx';

import { getState } from './state/state.js';

const App = () => {
	const useStore = getState(React);
	const { state, actions } = useStore();

	const { loggedIn, loading, message, showSettings } = state;

	if(loading) return <Loading />;
	if(!loggedIn) return <Login {...actions} {...state} />;

	let Content = MessageList;
	if(message)
		Content = MessageView;
	if(showSettings) Content = Settings;

	return (
		<div className="app">
			<div className="mdl-layout mdl-js-layout mdl-layout--fixed-drawer
            mdl-layout--fixed-header">
				<Header />
				<SideBar {...actions} {...state} />
				<div className="mdl-layout__content">
					<div className="page-content">
						<Content {...actions} {...state} />
					</div>
				</div>
			</div>
		</div>
	);
};

render(
	<App />,
	document.getElementById('root')
);
