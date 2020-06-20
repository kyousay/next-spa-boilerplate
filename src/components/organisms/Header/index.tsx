import React from 'react';
import styles from './index.module.css';
import HeaderLogo from '../../atoms/Heding';

const Header: React.FC = () => {
	return (
		<div className={styles.headerWrapper}>
			<HeaderLogo Tag={'h1'}>R-Cloud Search</HeaderLogo>
		</div>
	);
};

export default Header;
