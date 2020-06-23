import React from 'react';
import styles from './index.module.css';
import Link from 'next/link';

type Props = {
	path: string;
};

// Linkが名前かぶるため
const Component: React.FC<Props> = ({ path, children }) => {
	return (
		<Link href={path} passHref>
			<a className={styles.default}>{children}</a>
		</Link>
	);
};

export default Component;
