import React from 'react';
import styles from './index.module.css';

export type Props = {
	id: string;
	checked: boolean;
	onChange: (e?: React.ChangeEvent<HTMLInputElement>) => void;
};

export const Checkbox: React.FC<Props> = (props) => {
	return (
		<input
			name={props.id}
			className={styles.root}
			type="checkbox"
			{...props}
		/>
	);
};
