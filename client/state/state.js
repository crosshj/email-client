import Network from './network.js'

const defaultState = {
	loggedIn: false,
	loading: false,
	appName: 'email'
};

const getLocalStorage = () => {
	const ls = localStorage.getItem('email-state');
	let state = defaultState;
	try {
		state = JSON.parse(ls) || state;
	} catch(e){}
	return state;
};
const setLocalStorage = (value) => {
	localStorage.setItem('email-state', JSON.stringify(value));
};

const getActions = (state, useCallback, setValue) => {
	const update = (currentState, apis) => Network(apis)
		.then(res => {
			const newState = {
				...currentState,
				...res
			};
			setLocalStorage(newState);
			setValue({
				...newState,
				loading: false
			});
		});

	const login = useCallback((username, password) => {
		const newState = {
			...state,
			username,
			loggedIn: true,
		};

		setValue({
			...newState,
			loading: true
		});

		update(newState, ['foldersList', 'foldersRead', 'messages']);
	}, [state]);

	const changeFolder = useCallback((currentFolder) => {
		const newState = {
			...state,
			message: undefined,
			currentFolder
		};
		setValue(newState);
	}, [state]);

	const selectMessage = useCallback((id) => {
		const message = state.messages.find(x => x.id === id);
		const newState = {
			...state,
			message
		};
		setValue(newState);
	}, [state]);

	const deleteMessage = useCallback((id) => {
		alert(`delete message with id: ${id}`);
		selectMessage();
	}, [state]);

	const sendMessage = useCallback(({ id }) => {
		alert(`should send message in reply to message id: ${id}`);
		selectMessage(id);
	}, [state]);

	return {
		login,
		changeFolder,
		selectMessage, sendMessage, deleteMessage,
		update
	};
}

export const getState = ({
	useState, useEffect, useCallback
}) => function useStore({ filter }={}) {
	let [state, setValue] = useState(0);
	state = state || getLocalStorage();
	const actions = getActions(state, useCallback, setValue);

	if(state.loggedIn){
		//actions.update(['foldersList', 'foldersRead', 'messages']);
	}

	return { state, actions };
};
