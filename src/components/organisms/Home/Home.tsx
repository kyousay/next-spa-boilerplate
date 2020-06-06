import React from 'react';
import styles from './index.module.css';

type Props = {
	count: number;
	handleIncrement: () => void;
};

const Home: React.FC<Props> = (props) => {
	const { count, handleIncrement } = props;
	return (
		<div className={styles.root}>
			Welcome to Next.js!!! {count}
			<button onClick={handleIncrement}>increment</button>
		</div>
	);
};

export default Home;
