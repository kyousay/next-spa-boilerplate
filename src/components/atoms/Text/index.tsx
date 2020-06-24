import React from 'react';
import styles from './index.module.css';

const TextFacotry: (role?: string, className?: string) => React.FC = (
	role = 'default',
	className = '',
) => ({ children }) => {
	return (
		<span className={[styles[role], styles[className]].join(' ')}>
			{children}
		</span>
	);
};

export const Text = TextFacotry();
export const HeaderLinkText = TextFacotry('header_link');
export const HeaderActiveLinkText = TextFacotry('header_link', 'is-active');
export const FooterLogoText = TextFacotry('footer_logo');

// export const Text: React.FC<Props> = ({ className, children }) => {
// 	return <span className={className}>{children}</span>;
// };
