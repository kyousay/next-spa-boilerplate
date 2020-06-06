import { combineReducers } from 'redux';
import counter from './counter';
import test from './test';

const reducer = combineReducers({
	resources: combineReducers({
		counter,
		test,
	}),
});

export type RootState = ReturnType<typeof reducer>;

export default reducer;
