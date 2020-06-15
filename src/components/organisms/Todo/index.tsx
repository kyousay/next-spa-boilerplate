import React, { useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
	addTodo,
	changeChecked,
	selectTodos,
	deleteTodo,
	changeText,
} from '../../../redux/modules/todo';
import Todo from './Todo';

const Component: React.FC = () => {
	const dispatch = useDispatch();
	const todos = useSelector(selectTodos);
	const changeCheckedHandle = useCallback(
		(index: number, checked: boolean) => {
			dispatch(changeChecked({ index, checked }));
		},
		[],
	);
	const addTodoHandle = useCallback(
		(id: string, text: string) =>
			dispatch(addTodo({ id, text, checked: false })),
		[],
	);
	const deleteTodoHanlder = useCallback(
		(index: number) => dispatch(deleteTodo({ index })),
		[],
	);
	const changeTextHandler = useCallback(
		(index: number, text: string) => dispatch(changeText({ index, text })),
		[],
	);

	return (
		<Todo
			todos={todos}
			onChange={changeCheckedHandle}
			onSubmit={addTodoHandle}
			deleteHandler={deleteTodoHanlder}
			editHandler={changeTextHandler}
		/>
	);
};

export default Component;
