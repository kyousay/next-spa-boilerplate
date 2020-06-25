import React from 'react';
import { storiesOf } from '@storybook/react';
import Link from '../';
import { HeaderLinkText, HeaderActiveLinkText } from '../../../atoms/Text';
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
					<HeaderLinkText>RedShift</HeaderLinkText>
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
					<HeaderActiveLinkText>RedShift</HeaderActiveLinkText>
				</Link>
			</div>
		);
	});
