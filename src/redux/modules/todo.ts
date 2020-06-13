import actionCreatorFactory from 'typescript-fsa';
import { createSelector } from 'reselect';
import { reducerWithInitialState } from 'typescript-fsa-reducers';
import { RootState } from './reducer';
const actionCreator = actionCreatorFactory('TODO');

type ChangePayload = {
	id: string;
	text: string;
	checked: false;
};

export const addTodo = actionCreator<ChangePayload>('ADDTODO');

const INITIAL_STATE = {
	todos: [
		{
			id: 'todo01',
			text: 'test01',
			checked: false,
		},
		{
			id: 'todo02',
			text: 'test02',
			checked: false,
		},
	],
};

const reducer = reducerWithInitialState(INITIAL_STATE).case(
	addTodo,
	(state, payload) => {
		const newTodos = state.todos.concat(payload);
		return {
			...state,
			todos: newTodos,
		};
	},
);

export default reducer;

export const selectTodos = createSelector(
	(state: RootState) => state.resources.todo,
	(todo) => todo.todos,
);
