import React from 'react';
import styles from './index.module.css';
import { FooterLogoText } from '../../atoms/Text';

const Footer: React.FC = () => {
	return (
		<div className={styles.footer_wrapper}>
			<FooterLogoText>＠hogehoge</FooterLogoText>
		</div>
	);
};

export default Footer;
