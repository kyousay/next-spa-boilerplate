import React from 'react';
import {
	Text,
	HeaderLinkText,
	HeaderActiveLinkText,
	FooterLogoText,
} from '../';
import { storiesOf } from '@storybook/react';

storiesOf('atoms/Text', module)
	.add('defaultテキスト', () => {
		return <Text>テキスト</Text>;
	})
	.add('HeaderLinkテキスト', () => {
		return (
			<div
				style={{
					padding: '20px',
					backgroundColor: '#000',
					display: 'inline-block',
				}}>
				<HeaderLinkText>テキスト</HeaderLinkText>
			</div>
		);
	})
	.add('HeaderLinkテキスト - 選択中', () => {
		return (
			<div
				style={{
					padding: '20px',
					backgroundColor: '#000',
					display: 'inline-block',
				}}>
				<HeaderActiveLinkText>テキスト</HeaderActiveLinkText>
			</div>
		);
	})
	.add('FooterLogoテキスト', () => {
		return <FooterLogoText>テキスト</FooterLogoText>;
	});
