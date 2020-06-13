import React, { useCallback, useEffect } from 'react';
import style from './index.module.css';
import { useSelector, useDispatch } from 'react-redux';
import { selectTodos } from '../../../redux/modules/todo';
import Todo from './Todo';

const Component: React.FC = () => {
	// const dispatch = useDispatch();
	const todos = useSelector(selectTodos);

	return (
		<div className={style.todo_field}>
			<Todo
				todos={todos}
				onChange={(e?: React.ChangeEvent<HTMLInputElement>) => {
					console.log('hoge');
				}}
			/>
		</div>
	);
};

export default Component;
