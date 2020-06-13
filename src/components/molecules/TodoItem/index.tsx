import React from 'react';
import { Checkbox, Props as checkboxProps } from '../../atoms/Checkbox/';
import styles from './index.module.css';

export type Props = {
	text: string;
	index: number;
} & checkboxProps;

export const TodoItem: React.FC<Props> = (props) => {
	const { text, id, checked, onChange } = props;
	return (
		<div className={styles.todo_row}>
			<Checkbox {...{ id, checked, onChange }} />
			<span>{text}</span>
		</div>
	);
};
