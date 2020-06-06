import React from 'react';
import styles from './index.module.css';

type Props = {
	count: number;
	name: string;
	handleIncrement: () => void;
};

const Home: React.FC<Props> = (props) => {
	const { count, name, handleIncrement } = props;
	return (
		<div className={styles.root}>
			Welcome to Next.js!!! {name} and count is {count}
			<button onClick={handleIncrement}>increment</button>
		</div>
	);
};

export default Home;
