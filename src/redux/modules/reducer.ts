import { combineReducers } from 'redux';
import counter from './counter';
import test from './test';
import registration from './registration';

const reducer = combineReducers({
	resources: combineReducers({
		counter,
		test,
	}),
	ui: combineReducers({
		registration,
	}),
});

export type RootState = ReturnType<typeof reducer>;

export default reducer;
