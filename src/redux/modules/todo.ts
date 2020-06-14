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

type ChangeCheckedPayload = {
	index: number;
	checked: boolean;
};

type DeletePayload = {
	index: number;
};

export const addTodo = actionCreator<ChangePayload>('ADDTODO');

export const changeChecked = actionCreator<ChangeCheckedPayload>(
	'ChengeChecked',
);

export const deleteTodo = actionCreator<DeletePayload>('DELETETODO');

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

const reducer = reducerWithInitialState(INITIAL_STATE)
	.case(addTodo, (state, payload) => {
		const newTodos = state.todos.concat(payload);
		return {
			...state,
			todos: newTodos,
		};
	})
	.case(changeChecked, (state, payload) => {
		const newTodos = [...state.todos];
		newTodos[payload.index].checked = payload.checked;
		return {
			...state,
			todos: newTodos,
		};
	})
	.case(deleteTodo, (state, payload) => {
		const newTodos = [...state.todos];
		newTodos.splice(payload.index, 1);
		return {
			...state,
			todos: newTodos,
		};
	});

export default reducer;

export const selectTodos = createSelector(
	(state: RootState) => state.resources.todo,
	(todo) => todo.todos,
);
