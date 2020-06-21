import React from 'react';
import styles from './index.module.css';

type Props = {
	className?: string;
};

export const IconFactory: (role: string, src: string) => React.FC<Props> = (
	role,
	src,
) => ({ className = 'default' }) => {
	return <img src={src} className={`${styles[role]} ${styles[className]}`} />;
};

export const FilterIcon = IconFactory('filter', '/filter.png');
export const DeleteIcon = IconFactory('delete', '/delete.png');
export const AddIcon = IconFactory('add', '/add.png');
