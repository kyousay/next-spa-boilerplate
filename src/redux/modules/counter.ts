import actionCreatorFactory from 'typescript-fsa';
import { createSelector } from 'reselect';
import { reducerWithInitialState } from 'typescript-fsa-reducers';
import { RootState } from './reducer';
const actionCreator = actionCreatorFactory('DIGIENQ/COUNTER');

export const increment = actionCreator('INCREMENT');
export const decrement = actionCreator('DECREMENT');

const INITIAL_STATE = {
	count: 0,
	status: 'ok',
};

const reducer = reducerWithInitialState(INITIAL_STATE)
	.case(increment, (state) => ({ ...state, count: state.count + 1 }))
	.case(decrement, (state) => ({ ...state, count: state.count - 1 }));

export default reducer;

export const selectCount = createSelector(
	(state: RootState) => state.resources.counter,
	(counter) => counter.count,
);
