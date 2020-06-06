import { useMemo } from 'react';
import { compose, Store, createStore, applyMiddleware } from 'redux';
import reducer, { RootState } from './modules/reducer';
import stepsMiddleware from 'redux-effects-steps';
import axiosMiddleware from './middlewares/redux-effects-axios';

let store: Store | null;

interface ExtendedWindow extends Window {
	__REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose;
}
declare const window: ExtendedWindow;

const composeEnhancer =
	(typeof window === 'object' &&
		window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) ||
	compose;

function initStore(preloadedState = {}) {
	return createStore(
		reducer,
		preloadedState,
		composeEnhancer(applyMiddleware(stepsMiddleware, axiosMiddleware())),
	);
}

export const initializeStore = (preloadedState: Partial<RootState>): Store => {
	let _store = store ?? initStore(preloadedState);

	// After navigating to a page with an initial Redux state, merge that state
	// with the current state in the store, and create a new store
	if (preloadedState && store) {
		_store = initStore({
			...store.getState(),
			...preloadedState,
		});
		// Reset the current store
		store = null;
	}

	// For SSG and SSR always create a new store
	if (typeof window === 'undefined') return _store;
	// Create the store once in the client
	if (!store) store = _store;

	return _store;
};

export function useStore(initialState) {
	const store = useMemo(() => initializeStore(initialState), [initialState]);
	return store;
}
