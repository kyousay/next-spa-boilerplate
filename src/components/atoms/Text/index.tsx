import React from 'react';
import styles from './index.module.css';

type Props = {
	Tag?: 'span' | 'p';
	size?: 'S' | 'M' | 'L';
	className?: string;
};

const TextFactory: (role?: string) => React.FC<Props> = (role = 'default') => ({
	Tag = 'span',
	size = 'M',
	children,
}) => {
	return (
		<Tag className={`${styles[role]} ${styles[`text_${size}`]}`}>
			{children}
		</Tag>
	);
};

export const Text = TextFactory();
