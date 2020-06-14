import React, { useState } from 'react';
import { Checkbox, Props as checkboxProps } from '../../atoms/Checkbox/';
import style from './index.module.css';

export type Props = {
	text: string;
	index: number;
	deleteHandler: (index: number) => void;
	editHandler: (index: number, text: string) => void;
} & checkboxProps;

export const TodoItem: React.FC<Props> = (props) => {
	const {
		text,
		id,
		checked,
		index,
		onChange,
		deleteHandler,
		editHandler,
	} = props;
	const [isEdit, changeIsEdit] = useState(true);
	const [nowText, changeText] = useState(text);
	return (
		<div className={style.todo_row}>
			<Checkbox {...{ id, checked, onChange }} />
			{isEdit ? (
				<>
					<span>{nowText}</span>
					<button
						className={style.deleteButton}
						type="button"
						onClick={() => deleteHandler(index)}>
						削除
					</button>
					<button
						className={style.deleteButton}
						type="button"
						onClick={() => changeIsEdit(false)}>
						編集
					</button>
				</>
			) : (
				<>
					<input
						type="text"
						name="changeTodo"
						value={nowText}
						onChange={(e) => changeText(e.target.value)}
					/>
					<button
						type="button"
						onClick={() => {
							editHandler(index, nowText);
							changeIsEdit(true);
						}}>
						編集終了
					</button>
				</>
			)}
		</div>
	);
};
