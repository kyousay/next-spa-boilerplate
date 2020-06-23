import React from 'react';
import { storiesOf } from '@storybook/react';
import Link from '../';
import { Text } from '../../../atoms/Text';
import textStyle from '../../../atoms/Text/index.module.css';

storiesOf('molecules/Link', module)
	.add('HeaderLink - 非選択', () => {
		return (
			<div
				style={{
					backgroundColor: '#000',
					display: 'inline-block',
					padding: '20px',
				}}>
				<Link path={'RedShift'}>
					<Text className={textStyle['header_link']}>RedShift</Text>
				</Link>
			</div>
		);
	})
	.add('HeaderLink - 選択中', () => {
		return (
			<div
				style={{
					backgroundColor: '#000',
					display: 'inline-block',
					padding: '20px',
				}}>
				<Link path={'RedShift'}>
					<Text
						className={`${textStyle['header_link']} ${textStyle['is-active']}`}>
						RedShift
					</Text>
				</Link>
			</div>
		);
	});
