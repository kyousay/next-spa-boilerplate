import React from 'react';
import styles from './index.module.css';

type Props = {
	className?: string;
};

const TextFactory: (role?: string, className?: string) => React.FC<Props> = (
	role = 'default',
	className = '',
) => ({ children }) => {
	return (
		<span className={[styles[role], styles[className]].join(' ')}>
			{children}
		</span>
	);
};

export const Text = TextFactory();
export const HeaderLinkText = TextFactory('header_link');
export const HeaderActiveLinkText = TextFactory('header_link', 'is-active');
export const FooterLogoText = TextFactory('footer');
