import React, { useCallback, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
	addTodo,
	changeChecked,
	selectTodos,
	deleteTodo,
} from '../../../redux/modules/todo';
import Todo from './Todo';

const Component: React.FC = () => {
	const dispatch = useDispatch();
	const todos = useSelector(selectTodos);

	return (
		<Todo
			todos={todos}
			onChange={(index: number, checked: boolean) => {
				dispatch(changeChecked({ index, checked }));
			}}
			onSubmit={(id: string, text: string) => {
				dispatch(
					addTodo({
						id,
						text,
						checked: false,
					}),
				);
			}}
			deleteHandler={(index: number) => dispatch(deleteTodo({ index }))}
		/>
	);
};

export default Component;
