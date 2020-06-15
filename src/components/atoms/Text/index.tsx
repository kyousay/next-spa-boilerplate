import React from 'react';
import styles from './index.module.css';

type Props = Partial<{
	Tag: 'span' | 'p';
	role: 'defalut' | 'error';
	size: 's' | 'm' | 'l';
}>;

export const Text: React.FC<Props> = ({
	role = 'default',
	size = 'm',
	Tag = 'span',
	children,
}) => {
	return <Tag className={`${styles[role]} ${styles[size]}`}>{children}</Tag>;
};
