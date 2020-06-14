import React from 'react';
import { Checkbox, Props as checkboxProps } from '../../atoms/Checkbox/';
import style from './index.module.css';
import { deleteTodo } from '../../../redux/modules/todo';

export type Props = {
	text: string;
	index: number;
	deleteHandler: (index: number) => void;
} & checkboxProps;

export const TodoItem: React.FC<Props> = (props) => {
	const { text, id, checked, index, onChange, deleteHandler } = props;
	return (
		<div className={style.todo_row}>
			<Checkbox {...{ id, checked, onChange }} />
			<span>{text}</span>
			<button
				className={style.deleteButton}
				type="button"
				onClick={() => deleteHandler(index)}>
				削除
			</button>
		</div>
	);
};
