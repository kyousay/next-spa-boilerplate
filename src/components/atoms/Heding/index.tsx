import React from 'react';
import styles from './index.module.css';

type Props = {
	Tag?: 'h1' | 'h2' | 'h3' | 'h4';
	className?: string;
};

const HeadingFactory: (role?: string) => React.FC<Props> = (
	role = 'default',
) => ({ Tag = 'h2', children }) => {
	return (
		<Tag className={`${styles[role]} ${styles[`heading_${Tag}`]}`}>
			{children}
		</Tag>
	);
};

export const HeaderLogo = HeadingFactory('header');
export const Heading = HeadingFactory();

export default HeaderLogo;
