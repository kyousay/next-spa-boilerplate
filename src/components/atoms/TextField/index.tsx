import React from 'react';
import styles from './index.module.css';

type Props = {
	value: string;
	placeholder: string;
	onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

export const TextField: React.FC<Props> = (props) => {
	console.log(styles);
	return <input className={styles.root} type="text" {...props} />;
};
