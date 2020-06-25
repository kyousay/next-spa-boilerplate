import React from 'react';
import styles from './index.module.css';
import { default as Next__Link } from 'next/link';

type Props = {
	path: string;
};

export const Link: React.FC<Props> = ({ path, children }) => {
	return (
		<Next__Link href={path} passHref>
			<a className={styles.root}>{children}</a>
		</Next__Link>
	);
};
