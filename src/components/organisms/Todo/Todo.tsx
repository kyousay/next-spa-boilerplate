import React, { useState } from 'react';
import { TodoItem } from '../../molecules/TodoItem';

type Props = {
	todos: {
		id: string;
		text: string;
		checked: boolean;
	}[];
	onChange: (e?: React.ChangeEvent<HTMLInputElement>) => void;
};

const Todo: React.FC<Props> = (props) => {
	const { todos, onChange } = props;
	return (
		<div>
			{todos.map((todo, index) => (
				<TodoItem
					key={todo.id}
					{...todo}
					onChange={onChange}
					index={index}
				/>
			))}
		</div>
	);
};

export default Todo;
