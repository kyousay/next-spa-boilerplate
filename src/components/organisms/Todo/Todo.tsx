import React from 'react';
import { useForm } from 'react-hook-form';
import { TodoItem } from '../../molecules/TodoItem';
import style from './index.module.css';
import { Text } from '../../atoms/Text';

type Props = {
	todos: {
		id: string;
		text: string;
		checked: boolean;
	}[];
	onChange: (index: number, checked: boolean) => void;
	onSubmit: (id: string, text: string) => void;
	deleteHandler: (index: number) => void;
	editHandler: (index: number, text: string) => void;
};

type Inputs = {
	todo: string;
};

const Todo: React.FC<Props> = (props) => {
	const { todos, onChange, onSubmit, deleteHandler, editHandler } = props;
	const { register, setValue, handleSubmit, watch, errors } = useForm<
		Inputs
	>();
	return (
		<div className={style.todo_field}>
			{todos.map((todo, index) => (
				<TodoItem
					key={todo.id}
					{...todo}
					onChange={() => onChange(index, !todo.checked)}
					index={index}
					deleteHandler={deleteHandler}
					editHandler={editHandler}
				/>
			))}
			{errors.todo && (
				<Text role="error" size="l">
					This field is required
				</Text>
			)}
			<form
				onSubmit={handleSubmit(() => {
					onSubmit(`todo${todos.length + 1}`, watch('todo'));
					setValue('todo', '');
				})}>
				<input name="todo" ref={register({ required: true })} />
				<input type="submit" />
			</form>
		</div>
	);
};

export default Todo;
