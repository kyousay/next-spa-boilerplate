import React from 'react';
import styles from './index.module.css';
import { Text } from '../../atoms/Text';
import textStyles from '../../atoms/Text/index.module.css';

const Footer: React.FC = () => {
	return (
		<div className={styles.footerWrapper}>
			<Text className={textStyles.footer}>＠hogehoge</Text>
		</div>
	);
};

export default Footer;
