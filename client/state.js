export const getState = ({
	useState, useEffect, useCallback
}) => function useStore({ filter }={}) {
	let [value, setValue] = useState(0);

	if(!value){
	}

	const state = value
		? { ...value }
		: { };

	return {
		state
	};
}

