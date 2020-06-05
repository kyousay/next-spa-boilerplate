import { combineReducers } from 'redux';
import counter from './counter';

const reducer = combineReducers({
	counter,
});

export type RootState = ReturnType<typeof reducer>;

export default reducer;
