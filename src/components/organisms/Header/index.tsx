import React from 'react';
import styles from './index.module.css';
import { Img } from '../../atoms/Img';

const Header: React.FC = () => {
	return (
		<div className={styles.headerWrapper}>
			<Img
				src={'/HeaderLogo.png'}
				alt={'R-CloudSearch'}
				width={'180'}
				height={'29'}
			/>
		</div>
	);
};

export default Header;
