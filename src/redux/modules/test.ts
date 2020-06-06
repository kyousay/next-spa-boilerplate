import actionCreatorFactory from 'typescript-fsa';
import { createSelector } from 'reselect';
import { reducerWithInitialState } from 'typescript-fsa-reducers';
import { steps, StepAction } from 'redux-effects-steps';
import { read } from '../middlewares/redux-effects-axios';
import { RootState } from './reducer';
const actionCreator = actionCreatorFactory('DIGIENQ/TEST');

type Res = {
	name: string;
};

const readTestRequest = actionCreator('REQUEST');
const readTestSuccess = actionCreator<Res>('SUCCESS');
const readTestFail = actionCreator('FAIL');

export const readTest = (): StepAction =>
	steps(readTestRequest(), read('/api/test'), [
		readTestSuccess,
		readTestFail,
	]);

const INITIAL_STATE = {
	data: { name: '' },
};

const reducer = reducerWithInitialState(INITIAL_STATE).case(
	readTestSuccess,
	(state, payload) => ({ ...state, data: payload }),
);

export default reducer;

export const selectTest = createSelector(
	(state: RootState) => state.test,
	(test) => test.data.name,
);
