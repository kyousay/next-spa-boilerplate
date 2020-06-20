import React from 'react';
import styles from './index.module.css';
import { Text } from '../../atoms/Text';

const Footer: React.FC = () => {
	return (
		<div className={styles.footerWrapper}>
			<Text>＠hogehoge</Text>
		</div>
	);
};

export default Footer;
