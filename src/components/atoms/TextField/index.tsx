import React from 'react';
import styles from './index.module.css';

type Props = {
	name: string;
	value: string;
	placeholder: string;
	onChange: (e?: React.ChangeEvent<HTMLInputElement>) => void;
};

export const TextField: React.FC<Props> = (props) => {
	return <input className={styles.root} type="text" {...props} />;
};
